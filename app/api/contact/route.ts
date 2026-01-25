import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // Create transporter using Gmail SMTP (you can use any SMTP service)
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to 'outlook' or use custom SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "saadghufran@outlook.com",
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb;">
              <h2 style="color: #1e293b; margin: 0 0 10px 0; font-size: 18px;">Contact Details</h2>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Name:</strong>
              <span style="color: #1e293b;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Email:</strong>
              <span style="color: #1e293b;">${email}</span>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Phone:</strong>
              <span style="color: #1e293b;">${phone}</span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569; display: inline-block; width: 120px;">Service:</strong>
              <span style="color: #1e293b; background-color: #dbeafe; padding: 4px 12px; border-radius: 6px; display: inline-block;">${service}</span>
            </div>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <h3 style="color: #1e293b; margin: 0 0 10px 0; font-size: 16px;">Message:</h3>
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="color: #334155; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 25px; padding: 15px; background-color: #f0fdf4; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="color: #065f46; margin: 0; font-size: 14px;">
                <strong>📧 Reply to:</strong> <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Received at ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
            </p>
          </div>
        </div>
      `,
      replyTo: email, // Allow direct reply to the customer
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Contact form email sent successfully:", {
      name,
      email,
      service,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, error: "Unable to process request" }, { status: 500 });
  }
}
