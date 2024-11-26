import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function GET(request) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id'); // 获取请求参数中的 id
    const project = await prisma.project.findUnique({
        where: { id: parseInt(id) }
    });
    return new Response(JSON.stringify({ data: project }), {
        status: 200,
    });
}