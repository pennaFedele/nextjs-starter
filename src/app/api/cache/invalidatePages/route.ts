import { invalidatePageCache } from "@/lib/cache-manager";
import { NextResponse } from "next/server";

export async function POST() {
    await invalidatePageCache();
    return NextResponse.json({ success: true });
}
    