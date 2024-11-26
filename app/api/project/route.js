import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function GET(request) {
    const project = await prisma.project.findMany();
    return new Response(JSON.stringify({ data: project }), {
        status: 200,
    });
}