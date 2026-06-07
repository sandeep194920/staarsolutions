import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, company, projectType, budget, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Staar Solutions <hello@staarsolutions.ca>",
      to: "sandeepamarnath@staarsolutions.ca",
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <h2>New project inquiry — Staar Solutions</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px 0;color:#64748b;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0;font-weight:600">${company}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#64748b">Project type</td><td style="padding:8px 0;font-weight:600">${projectType}</td></tr>
          ${budget ? `<tr><td style="padding:8px 0;color:#64748b">Budget</td><td style="padding:8px 0;font-weight:600">${budget}</td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0"/>
        <p style="color:#64748b;margin-bottom:4px;font-family:sans-serif;font-size:14px">Message</p>
        <p style="font-family:sans-serif;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
