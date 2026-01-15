import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all testimonials
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const active = searchParams.get("active");
    
    const where = active === "true" ? { active: true } : {};
    
    const testimonials = await prisma.testimonial.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

// POST create new testimonial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { quote, author, image, rating, verified, active } = body;
    
    const testimonial = await prisma.testimonial.create({
      data: {
        quote,
        author,
        image: image || "/testimonial.png",
        rating: rating || 5,
        verified: verified ?? true,
        active: active ?? true,
      },
    });
    
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}
