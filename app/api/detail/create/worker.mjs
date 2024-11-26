import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as path from 'path';
import { exec } from 'child_process';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
const maxRetries = 3; // 最大重试次数

process.on('message', async ({ testCaseId, script, name }) => {
    let retries = 0;

    const runTask = async () => {
        let filePath;
        try {
            // 生成并保存 JavaScript 文件
            const projectRoot = process.cwd(); // 获取当前工作目录
            filePath = path.join(projectRoot, 'cypress/e2e', `${name}_${testCaseId}.cy.js`);
            // 检查文件是否存在
            const fileExists = await fs.access(filePath).then(() => true).catch(() => false);
            if (!fileExists) {
                await fs.writeFile(filePath, script, 'utf8');
                console.log(`Script saved to ${filePath}`);
            } else {
                console.log(`File already exists: ${filePath}`);
            }

            // 执行 Cypress 测试脚本
            const specPath = `cypress/e2e/${name}_${testCaseId}.cy.js`;
            const command = `npx cypress run --spec ${specPath}`;

            console.log('Running command:', command);

            const { stdout, stderr } = await new Promise((resolve, reject) => {
                exec(command, (error, stdout, stderr) => {
                    if (error) {
                        console.error('Error executing Cypress:', error);
                        reject(error);
                    } else {
                        resolve({ stdout, stderr });
                    }
                });
            });

            console.log('Cypress output:', stdout);
            console.error('Cypress error:', stderr);

            // 构建文件路径
            const screenshotsPath = path.join(process.cwd(), 'cypress', 'screenshots', `${name}_${testCaseId}.cy.js`);
            const videoPath = path.join(process.cwd(), 'cypress', 'videos', `${name}_${testCaseId}.cy.js.mp4`);

            // 读取截图文件夹中的所有文件
            const files = fsSync.readdirSync(screenshotsPath);

            // 过滤出图片文件并读取内容
            const imgPaths = files
                .map(file => path.join(screenshotsPath, file))
                .map(filePath => {
                    const fileBuffer = fsSync.readFileSync(filePath);
                    return `data:image/png;base64,${fileBuffer.toString('base64')}`;
                });

            // 检查视频文件是否存在并读取内容
            const videoExists = fsSync.existsSync(videoPath);
            let videoBase64 = '';
            if (videoExists) {
                const videoBuffer = fsSync.readFileSync(videoPath);
                videoBase64 = `data:video/mp4;base64,${videoBuffer.toString('base64')}`;
            }

            // 发送结果回主进程
            process.send({ status: 'COMPLETED', video: videoBase64, images: imgPaths });

            // 删除图片文件夹
            try {
                await fs.rm(screenshotsPath, { recursive: true, force: true });
                console.log(`Deleted screenshots folder: ${screenshotsPath}`);
            } catch (rmError) {
                console.error('Error deleting screenshots folder:', rmError);
            }

            // 删除视频文件
            try {
                if (videoExists) {
                    await fs.unlink(videoPath);
                    console.log(`Deleted video file: ${videoPath}`);
                }
            } catch (unlinkError) {
                console.error('Error deleting video file:', unlinkError);
            }

            // 删除生成的脚本文件
            try {
                await fs.unlink(filePath);
                console.log(`Deleted script file: ${filePath}`);
            } catch (unlinkError) {
                console.error('Error deleting script file:', unlinkError);
            }
        } catch (error) {
            console.error('Error saving script or running Cypress:', error);
            if (retries < maxRetries) {
                retries++;
                console.log(`Retrying task, attempt ${retries}...`);
                await runTask();
            } else {
                // 删除生成的脚本文件
                try {
                    if (filePath) {
                        await fs.unlink(filePath);
                        console.log(`Deleted script file: ${filePath}`);
                    }
                } catch (unlinkError) {
                    console.error('Error deleting script file:', unlinkError);
                }
                // 发送失败结果回主进程
                process.send({ status: 'FAILED' });
            }
        } finally {
            await prisma.$disconnect();
            process.exit(0); // 退出子进程
        }
    };

    runTask();
});