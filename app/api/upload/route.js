import fs from 'fs';
import path from 'path';
import AdmZip from 'adm-zip';
import { NextResponse } from 'next/server';

// 配置 Next.js 以支持文件上传
export const config = {
    api: {
        bodyParser: false, // 禁用默认的 body parser
    },
};

export async function POST(request, res) {
    try {
        const formData = await request.formData();

        const files = formData.getAll("files");


        if (!files || files.length === 0) {
            return NextResponse.json({ message: 'No files uploaded' }, { status: 400 });
        }

        const assertDir = path.join('D:\\', 'testProject');

        fs.mkdirSync(assertDir, { recursive: true }); // 确保目录存在
        const file = files[0];
        // 生成新的文件名
        const timestamp = Date.now();
        const newFileName = `${timestamp}_${file.name}`;
        const uploadPath = path.join(assertDir, newFileName);
        const assertName = `${file.name.replace(/\.[^/.]+$/, '')}_${timestamp}`;
        // 生成解压目录
        const extractDir = path.join(assertDir, assertName);
        fs.mkdirSync(extractDir, { recursive: true }); // 确保解压目录存在

        // 将文件保存到指定路径
        const buffer = Buffer.from(await file.arrayBuffer());
        await fs.promises.writeFile(uploadPath, buffer);

        // 解压缩文件
        const zip = new AdmZip(uploadPath);
        zip.extractAllTo(extractDir, true);

        // 删除临时上传文件
        fs.unlinkSync(uploadPath);
        // 定义删除文件夹的函数
        const deleteFolder = (folderPath) => {
            if (fs.existsSync(folderPath)) {
                fs.rmdirSync(folderPath, { recursive: true });
                console.log(`Directory ${folderPath} deleted due to inactivity`);
            }
        };

        // 设置定时器，例如 1 小时后删除未使用的文件夹
        const timeout = 1000 * 60 * 60; // 1 小时
        setTimeout(() => {
            deleteFolder(extractDir);
        }, timeout);

        console.log(`File ${file.name} uploaded and extracted successfully`);


        return NextResponse.json({ message: 'Files uploaded and extracted successfully', assertName, extractDir }, { status: 200 });
    } catch (error) {
        console.error('Error uploading and extracting file:', error);
        return NextResponse.json({ message: 'Error uploading and extracting file', error: error.message }, { status: 500 });
    }
}