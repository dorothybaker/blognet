import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POSTS_PER_PAGE = 5;

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POSTS_PER_PAGE,
        skip: POSTS_PER_PAGE * (page - 1),
        where: { ...(cat && { catSlug: cat }) },
        orderBy: {createdAt: 'desc'}
      }),
      prisma.post.count({ where: { ...(cat && { catSlug: cat }) } }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A POST

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
