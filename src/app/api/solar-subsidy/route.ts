import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const submissions = await prisma.solarSubsidy.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(submissions);
  } catch (error) {
    console.error("Error fetching solar subsidy submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const submission = await prisma.solarSubsidy.create({
      data: {
        fullName: data.fullName,
        homeAddress: data.homeAddress,
        contactNumber: data.contactNumber,
        averagePowerBill: data.averagePowerBill,
        property: data.property,
        existingSolar: data.existingSolar,
        solarCount: data.solarCount || null,
        status: "pending",
      },
    });

    return NextResponse.json(submission);
  } catch (error) {
    console.error("Error creating solar subsidy submission:", error);
    return NextResponse.json(
      { error: "Failed to create submission" },
      { status: 500 }
    );
  }
}
