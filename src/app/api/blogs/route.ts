import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all blogs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get("published");
    
    const where = published === "true" ? { published: true } : {};
    
    const blogs = await prisma.blog.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST create new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, image, author, category, readTime, published } = body;
    
    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        image,
        author,
        category,
        readTime: readTime || 5,
        published: published || false,
      },
    });
    
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
