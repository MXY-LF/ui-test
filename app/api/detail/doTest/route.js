
import { taskQueue, isProcessing, processQueue } from '@/app/api/detail/create/route'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request) {
    const { testId } = await request.json(); // 解析请求体
    try {
        // 创建新的 testCase 并关联到项目
        const newTestCase = await prisma.testCase.findUnique({
            where: { id: testId }
        });
        console.log('newTestCase:', newTestCase);
        // 将任务添加到队列中
        taskQueue.push({ testCaseId: testId, script: newTestCase.script, name: newTestCase.name });
        console.log('Task added to queue:', taskQueue.length, isProcessing);
        // 如果没有正在处理的任务，则开始处理队列
        if (!isProcessing) {
            processQueue();
        }

        return new Response(JSON.stringify({ testCaseId: newTestCase.id }), {
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