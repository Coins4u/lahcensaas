import { NextResponse } from "next/server";
import { sendAdminNotificationEmail, sendInvoiceEmail } from "@/lib/email";
import { getPlanById } from "@/lib/plans";
import { SITE } from "@/lib/site";
import type { InvoiceRequest } from "@/lib/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InvoiceRequest;
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const planId = Number(body.planId);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const plan = getPlanById(planId);
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan selected." }, { status: 400 });
    }

    await Promise.all([
      sendInvoiceEmail(email, name, plan),
      sendAdminNotificationEmail(name, email, plan),
    ]);

    return NextResponse.json({ success: true, email });
  } catch (error) {
    console.error("[invoice]", error);
    const message =
      error instanceof Error && error.message.includes("SMTP")
        ? "Email service is not configured. Please contact support."
        : `Unable to send invoice. Please try again or email ${SITE.email}.`;
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
