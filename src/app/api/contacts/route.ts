import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all contacts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    
    const where = status ? { status } : {};
    
    const contacts = await prisma.contact.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

// POST create new contact (from contact form)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, address, powerBill, hasSolar, message, preferredDate, preferredTime } = body;
    
    const contact = await prisma.contact.create({
      data: {
        fullName,
        email,
        phone,
        address,
        powerBill,
        hasSolar: hasSolar === "yes" || hasSolar === true,
        message,
        preferredDate,
        preferredTime,
        status: "new",
      },
    });
    
    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
