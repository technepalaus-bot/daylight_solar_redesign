"use server";
import { ContactFormIn } from "@/types";
import nodemailer from "nodemailer";
import validator from "validator";
import prisma from "@/lib/prisma";

export const sendConsultationEmail = async (formData: ContactFormIn) => {
  const {
    fullName,
    email,
    contactNumber,
    homeAddress,
    powerBill,
    solarUnits,
    dateDay,
    dateMonth,
    dateYear,
    timeHours,
    timeMinutes,
    timePeriod,
    hasSolar,
  } = formData;

  // Validate required fields
  const requiredFields = [
    fullName,
    email,
    contactNumber,
    homeAddress,
    powerBill,
    dateDay,
    dateMonth,
    dateYear,
    timeHours,
    timeMinutes,
    timePeriod,
  ];
  if (requiredFields.some((field) => !field)) {
    return { error: "All fields are required." };
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return { error: "Invalid email address." };
  }

  // Format date and time
  const visitDate = `${dateDay}/${dateMonth}/${dateYear}`;
  const visitTime = `${timeHours}:${timeMinutes} ${timePeriod}`;

  try {
    // Save to database
    await prisma.contact.create({
      data: {
        fullName,
        email,
        phone: contactNumber,
        address: homeAddress,
        powerBill,
        hasSolar: hasSolar === "yes",
        message: solarUnits ? `Solar Units: ${solarUnits}` : null,
        preferredDate: visitDate,
        preferredTime: visitTime,
        status: "new",
      },
    });

    // Check if email environment variables are set
    const emailConfigured = process.env.EMAIL_HOST && 
      process.env.EMAIL_PORT && 
      process.env.EMAIL_USER && 
      process.env.EMAIL_PASS && 
      process.env.ADMIN_EMAIL;

    if (emailConfigured) {
      // Create transporter
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

      // Send email
      await transporter.sendMail({
        from: `"Solar Consultation Form" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "New Solar Consultation Request",
        text: `
        Full Name: ${fullName}
        Email: ${email}
        Contact Number: ${contactNumber}
        Home Address: ${homeAddress}
        Average Power Bill: ${powerBill}
        Existing Solar: ${hasSolar || "Not provided"}
        Number of Solar Units: ${solarUnits || "Not applicable"}
        Preferred Visit Date: ${visitDate}
        Preferred Visit Time: ${visitTime}
      `,
      });
    }

    return { message: "Sent successfully!" };
  } catch (error) {
    console.error("Error:", error);
    return { error: "Failed to submit. Please try again." };
  }
};
