import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const popular = await prisma.post.findMany({
      where: {
        views: {
          gt: 2,
        },
      },
      take: 5,
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(popular, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
