import prisma from "@/lib/db";
import { getPageFromCache, setPageInCache } from "@/lib/cache-manager";
import { NextResponse } from "next/server";
import { HeaderPages } from "@/components/header";

export async function GET() {

    const cachedLinks = await getPageFromCache();
    if (cachedLinks) {
        console.info("CACHE Hit per links");
        return NextResponse.json(cachedLinks);
    }

    const pages = await prisma.areaCompetenza.findMany({
        where: {
            isAttiva: true,
        },
        select: {
            id: true,
            descrizione: true,
            descrizioneInglese: true,
        }
    })as HeaderPages[];

    await setPageInCache(pages);
    console.info("CACHE Miss per links");
    return NextResponse.json(pages);
}
