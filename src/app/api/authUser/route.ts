import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import prisma from "@/database/prisma";

export async function GET(req: NextRequest) {
  try {
    const userId = getDataFromToken(req);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, username: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.log(user);
    console.log(req.cookies.get("token"));

    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ error: "Unauthorized", err }, { status: 401 });
  }
}
