import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Arms of Grace Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Contact] ${subject} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a0f2e">
          <div style="background:#5c2d91;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">New Contact Form Submission</h1>
          </div>
          <div style="background:#faf5ff;padding:32px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:600;width:130px;color:#6b6578">Name</td><td style="padding:8px 0">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#6b6578">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#5c2d91">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#6b6578">Phone</td><td style="padding:8px 0">${phone || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#6b6578">Subject</td><td style="padding:8px 0">${subject}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #ede0f8;margin:20px 0"/>
            <p style="font-weight:600;color:#6b6578;margin:0 0 8px">Message</p>
            <p style="margin:0;line-height:1.6;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
