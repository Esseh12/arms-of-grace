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
    const { firstName, lastName, email, phone, role, availability, about } = await req.json();

    if (!firstName || !lastName || !email || !role) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Arms of Grace Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Volunteer] ${role} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a0f2e">
          <div style="background:#5c2d91;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">New Volunteer Application</h1>
          </div>
          <div style="background:#faf5ff;padding:32px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;font-weight:600;width:160px;color:#6b6578">Name</td><td style="padding:8px 0">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#6b6578">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#5c2d91">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#6b6578">Phone</td><td style="padding:8px 0">${phone || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#6b6578">Role Interested In</td><td style="padding:8px 0">${role}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#6b6578">Availability</td><td style="padding:8px 0">${availability || "Not specified"}</td></tr>
            </table>
            ${about ? `
            <hr style="border:none;border-top:1px solid #ede0f8;margin:20px 0"/>
            <p style="font-weight:600;color:#6b6578;margin:0 0 8px">About Themselves</p>
            <p style="margin:0;line-height:1.6;white-space:pre-wrap">${about}</p>
            ` : ""}
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Volunteer form error:", err);
    return Response.json({ error: "Failed to submit application. Please try again." }, { status: 500 });
  }
}
