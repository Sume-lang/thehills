import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        const db = await createConnection();
        const sql = "SELECT * FROM user";
        const [user] = await db.query(sql);
        return NextResponse.json({
            success: true,
            user: user,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something went wrong",
        });
    }
}