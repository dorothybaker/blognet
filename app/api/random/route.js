import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const randomPost = await prisma.post.findMany({
      take: 1,
      orderBy: {
        views: "desc",
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(randomPost, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
