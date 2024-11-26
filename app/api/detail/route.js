import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id'); // 获取请求参数中的 id

    if (!id) {
        return NextResponse.error({ status: 400, message: 'ID is required' });
    }
    try {
        // 查询 project 表中 id 为 2 的 project 及其所有的 testcase
        const project = await prisma.project.findUnique({
            where: { id: parseInt(id) },
            include: {
                testCases: true
            }
        });
        if (!project) {
            return NextResponse.error({ status: 404, message: 'Project not found' });
        }

        // 构建响应数据
        const response = {
            data: {
                id: project.id,
                name: project.name,
                port: project.port,
                testCases: project.testCases || []
            }
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error(error);
        return NextResponse.error({ status: 500, message: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }


}