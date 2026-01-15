"use server";
import { FormDataIn } from "@/types";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export const sendSolarSubsidyEmail = async (formData: FormDataIn) => {
  const {
    fullName,
    homeAddress,
    contactNumber,
    averagePowerBill,
    property,
    existingSolar,
    solarCount,
  } = formData;

  // Validate required fields
  const requiredFields = [
    fullName,
    homeAddress,
    contactNumber,
    averagePowerBill,
    property,
    existingSolar,
  ];

  // Only require solarCount if existingSolar is "yes"
  if (existingSolar === "yes" && !solarCount) {
    return {
      error:
        "Please specify the number of solar panels if you have existing solar.",
    };
  }

  if (requiredFields.some((field) => !field)) {
    return { error: "All fields are required." };
  }

  try {
    // Save to database
    await prisma.solarSubsidy.create({
      data: {
        fullName,
        homeAddress,
        contactNumber,
        averagePowerBill,
        property,
        existingSolar,
        solarCount: solarCount || null,
        status: "pending",
      },
    });

    // Validate environment variables for email
    const requiredEnvVars = [
      process.env.EMAIL_HOST,
      process.env.EMAIL_PORT,
      process.env.EMAIL_USER,
      process.env.EMAIL_PASS,
      process.env.ADMIN_EMAIL,
    ];

    // Send email only if email credentials are available
    if (!requiredEnvVars.some((envVar) => !envVar)) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT),
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          requireTLS: true,
        });

        await transporter.sendMail({
          from: `"Solar Subsidy Form" <${process.env.EMAIL_USER}>`,
          to: process.env.ADMIN_EMAIL,
          subject: "New Solar Subsidy Request",
          text: `
            Full Name: ${fullName}
            Home Address: ${homeAddress}
            Contact Number: ${contactNumber}
            Average Power Bill: ${averagePowerBill}
            Property Ownership: ${property}
            Existing Solar: ${existingSolar}
            Number of Solar Panels: ${solarCount || "Not applicable"}
          `,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Continue even if email fails - data is already saved
      }
    }

    return { message: "Application submitted successfully! We'll contact you soon." };
  } catch (error) {
    console.error("Error processing solar subsidy request:", error);
    return { error: "Failed to process your request. Please try again." };
  }
};
