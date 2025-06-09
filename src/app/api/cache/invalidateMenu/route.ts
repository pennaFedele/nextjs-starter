import { invalidateMenuCache } from "@/lib/cache-manager";
import { NextResponse } from "next/server";

export async function POST() {
    await invalidateMenuCache();
    return NextResponse.json({ success: true });
}
    