import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM product";
    const [product] = await db.query(sql);
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
    });
  }
}
