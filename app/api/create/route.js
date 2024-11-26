import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
const prisma = new PrismaClient();

export async function POST(request) {
    const body = await request.json();

    // 将 fileDir 属性重新命名为 zipFile
    const modifiedBody = {
        ...body,
        zipFile: body.files,
    };

    delete modifiedBody.files; // 删除原始的 files 属性

    try {
        // 创建项目
        const project = await prisma.project.create({
            data: modifiedBody
        });

        // 获取项目的 name 和 id
        const { name, id } = project;

        // 构建新的文件夹名称
        const oldFolderPath = modifiedBody.zipFile;
        const newFolderPath = path.join(path.dirname(oldFolderPath), `${name}-${id}`);

        // 更新文件夹名称
        await updateFolderName(oldFolderPath, newFolderPath);

        // 更新数据库中的路径
        await prisma.project.update({
            where: { id: project.id },
            data: { zipFile: newFolderPath }
        });

        // 打开一个新的终端窗口来执行命令
        openTerminalWithCommand(`serve -s -p 3000 "${newFolderPath}/dist"`);

        return new Response(JSON.stringify({ data: project }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error creating project:', error);
        return new Response(JSON.stringify({ error: 'Failed to create project' }), {
            status: 500,
        });
    }
}

// 更新文件夹名称的函数
async function updateFolderName(oldName, newName) {
    try {
        await fs.promises.rename(oldName, newName);
        console.log(`Folder renamed from ${oldName} to ${newName}`);
    } catch (error) {
        console.error(`Error renaming folder from ${oldName} to ${newName}:`, error);
        throw error;
    }
}

function openTerminalWithCommand(command) {
    console.log(`Opening terminal with command: ${command}`);

    let terminal;
    let args;

    if (process.platform === 'win32') {
        terminal = 'cmd.exe';
        args = ['/c', 'start', 'cmd', '/k', command];
    } else if (process.platform === 'linux') {
        terminal = 'gnome-terminal';
        args = ['--', 'bash', '-c', command + '; exec bash'];
    } else {
        console.error('Unsupported platform');
        return;
    }

    try {
        const child = spawn(terminal, args, { shell: true });
        child.on('error', (err) => {
            console.error(`Error opening terminal: ${err.message}`);
        });
        child.on('exit', (code, signal) => {
            console.log(`Terminal exited with code ${code} and signal ${signal}`);
        });
    } catch (error) {
        console.error(`Error opening terminal: ${error.message}`);
    }
}