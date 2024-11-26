import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as path from 'path';
import { fork } from 'child_process';
import { compareBase64Images } from '@/utils/compareImg';
const prisma = new PrismaClient();

// 定义任务队列和锁变量
export const taskQueue = [];
export let isProcessing = false;

export async function POST(request) {
    const { projectId, script, name } = await request.json(); // 解析请求体
    console.log('projectId:', projectId, name);
    try {
        // 创建新的 testCase 并关联到项目
        const newTestCase = await prisma.testCase.create({
            data: {
                projectId: parseInt(projectId), // 确保 projectId 是整数
                name: name,
                video: '',
                status: 'DOING',
                images: [],
                diffImgs: [],
                script: script,
            },
        });

        // 将任务添加到队列中
        taskQueue.push({ testCaseId: newTestCase.id, script, name });
        console.log('Task added to queue:', taskQueue.length, isProcessing);
        // 如果没有正在处理的任务，则开始处理队列
        if (!isProcessing) {
            processQueue();
        }

        return new Response(JSON.stringify({ status: 'S', id: projectId, testCaseId: newTestCase.id }), {
            status: 200,
        });
    } catch (error) {
        console.log('Error creating test case:', error);
        return new Response(JSON.stringify({ status: 'F', message: error.message }), {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }
}

// 处理任务队列
export async function processQueue() {

    isProcessing = true;

    if (taskQueue.length > 0) {
        const { testCaseId, script, name } = taskQueue.shift();
        console.log('Processing queue...', name);
        try {
            const projectRoot = process.cwd(); // 获取当前工作目录
            // 启动子进程
            const child = fork(path.join(projectRoot, 'app', 'api', 'detail', 'create', 'worker.mjs'));

            // 向子进程发送任务
            child.send({ testCaseId, script, name });

            // 监听子进程的消息
            child.on('message', async (result) => {
                if (result.status === 'COMPLETED') {

                    // 创建新的 testCase 并关联到项目
                    const testCase = await prisma.testCase.findUnique({
                        where: { id: testCaseId }
                    });
                    let diffImgs = [];
                    if (testCase.images) {
                        testCase.images.forEach(async (image, index) => {
                            const imgResult = await compareBase64Images(image, result.images[index])
                            imgResult && diffImgs.push(imgResult);
                        });
                    }
                    await prisma.testCase.update({
                        where: { id: testCaseId },
                        data: {
                            status: 'COMPLETED',
                            video: result.video,
                            images: result.images,
                            diffImgs
                        },
                    }).catch((updateError) => {
                        console.error('Error updating testCase status:', updateError);
                    });
                } else if (result.status === 'FAILED') {
                    await prisma.testCase.update({
                        where: { id: testCaseId },
                        data: { status: 'FAILED' },
                    }).catch((updateError) => {
                        console.error('Error updating testCase status:', updateError);
                    });
                }
            });

            // 监听子进程的退出事件
            child.on('exit', (code) => {
                console.log('code', isProcessing);
                if (code !== 0) {
                    console.error('Child process exited with code:', code);
                }
                // 子进程退出后，继续处理下一个任务
                if (taskQueue.length > 0) {
                    console.log('Next task in queue:', taskQueue[0].name, isProcessing);
                    processQueue();
                } else {
                    isProcessing = false;
                }
            });
        } catch (error) {
            console.error('Error executing task:', error);
            // 可以在这里记录错误或采取其他措施
        }
        // 由于我们在子进程的 exit 事件中调用 processQueue，这里不需要 break
    }
}