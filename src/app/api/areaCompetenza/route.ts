import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
    try {
        const aree = await prisma.areaCompetenza.findMany({
            where: { isAttiva: true },
            orderBy: { ordine: 'asc' },
        });
        return NextResponse.json(aree);
    } catch (error) {
        console.error('Error fetching aree di competenza:', error);
        return NextResponse.json({ error: 'Internal server error' },
            {
                status: 500,
                headers: {
                    'Cache-Control': 'public, s-maxage=1',
                    'CDN-Cache-Control': 'public, s-maxage=60',
                    'Vercel-CDN-Cache-Control': 'public, s-maxage=3600',
                }
            });
    }
}