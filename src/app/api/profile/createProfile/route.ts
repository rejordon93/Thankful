import { NextRequest, NextResponse } from "next/server";
import prisma from "@/database/prisma";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { createProfileType } from "@/types/types";

export async function POST(req: NextRequest) {
  try {
    const body: createProfileType = await req.json();
    const { firstname, lastname, title, profileImage, phone } = body;

    const userId = getDataFromToken(req);

    if (!userId) {
      return NextResponse.json({ error: "No UserID" }, { status: 401 });
    }

    if (!firstname || !lastname || !title || !phone) {
      return NextResponse.json({ error: "Missing Data" }, { status: 400 });
    }

    const newProfile = await prisma.profile.create({
      data: {
        userId,
        firstName: firstname,
        lastName: lastname,
        title,
        profileImage, // can be optional // null
        phone,
      },
    });

    return NextResponse.json(newProfile, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
