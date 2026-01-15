import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

// Mark as dynamic - don't run during build
export const dynamic = "force-dynamic";

// POST - Create admin user (only if no users exist)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    // Check if any admin exists
    const existingAdmin = await prisma.user.findFirst();
    
    if (existingAdmin) {
      return NextResponse.json(
        { error: "Admin already exists. Please login." },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "admin",
      },
    });

    return NextResponse.json(
      { message: "Admin created successfully", id: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating admin:", error);
    return NextResponse.json(
      { error: "Failed to create admin" },
      { status: 500 }
    );
  }
}

// GET - Check if admin exists
export async function GET() {
  try {
    const admin = await prisma.user.findFirst();
    return NextResponse.json({ adminExists: !!admin });
  } catch (error) {
    console.error("Error checking admin:", error);
    return NextResponse.json(
      { error: "Failed to check admin" },
      { status: 500 }
    );
  }
}
