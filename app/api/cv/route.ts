import { readFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// We read a file from disk and send email, so this must run on Node, not Edge.
export const runtime = "nodejs";

const CV_FILENAME = "David_Smart_CV.pdf";
const CV_PATH = path.join(process.cwd(), "private", CV_FILENAME);

const ALERT_TO = process.env.CV_ALERT_TO || "david.smart@fluencetraining.com";
// Resend requires a verified domain. Until you verify one, "onboarding@resend.dev" works for testing.
const ALERT_FROM = process.env.CV_ALERT_FROM || "David Smart <onboarding@resend.dev>";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();

  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[cv] RESEND_API_KEY not set; cannot email the CV.");
    return NextResponse.json(
      { error: "Email isn't configured yet. Please try again later." },
      { status: 500 }
    );
  }

  // Request metadata for the owner alert.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";
  const referer = req.headers.get("referer") || "direct";
  const when = new Date().toISOString();

  let file: Buffer;
  try {
    file = await readFile(CV_PATH);
  } catch (err) {
    console.error("[cv] could not read CV file:", err);
    return NextResponse.json({ error: "CV is temporarily unavailable." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const firstName = name.split(" ")[0];

  // 1. Private lead alert to the owner — sent first and independently, so it
  //    always fires even if the visitor delivery later fails.
  try {
    const { error } = await resend.emails.send({
      from: ALERT_FROM,
      to: ALERT_TO,
      replyTo: email,
      subject: `📄 CV requested by ${name}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:14px;color:#111;line-height:1.6">
          <h2 style="margin:0 0 12px">CV requested by a new lead</h2>
          <table style="border-collapse:collapse">
            <tr><td style="padding:4px 12px 4px 0;color:#666">Name</td><td><strong>${name}</strong></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">When</td><td>${when}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">IP</td><td>${ip}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">Device</td><td>${userAgent}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#666">From page</td><td>${referer}</td></tr>
          </table>
        </div>
      `,
    });
    if (error) console.error("[cv] owner alert rejected:", error);
  } catch (err) {
    console.error("[cv] owner alert email failed:", err);
  }

  // 2. Email the CV straight to the visitor.
  try {
    const { error } = await resend.emails.send({
      from: ALERT_FROM,
      to: email,
      replyTo: ALERT_TO,
      subject: "David Smart — CV",
      html: `
        <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:15px;color:#111;line-height:1.6">
          <p>Hi ${firstName},</p>
          <p>Thanks for your interest — my CV is attached as a PDF.</p>
          <p>Feel free to just reply to this email if you'd like to talk.</p>
          <p>Best,<br/>David Smart</p>
        </div>
      `,
      attachments: [{ filename: CV_FILENAME, content: file.toString("base64") }],
    });

    if (error) {
      console.error("[cv] resend error sending to visitor:", error);
      return NextResponse.json(
        { error: "We couldn't send the email. Please double-check your address." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[cv] failed to email CV to visitor:", err);
    return NextResponse.json(
      { error: "We couldn't send the email. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
