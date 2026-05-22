import { NextResponse } from "next/server";
import { sendContactMessageEmail } from "@/lib/email";
import { SITE } from "@/lib/site";
import type { ContactRequest } from "@/lib/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TOPIC_LABELS: Record<string, string> = {
  general: "General question",
  access: "Access & billing",
  tools: "Toolbox feedback",
  other: "Something else",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const topic = body.topic?.trim() ?? "general";
    const message = body.message?.trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Please write a message of at least 10 characters." },
        { status: 400 }
      );
    }

    const topicLabel = TOPIC_LABELS[topic] ?? TOPIC_LABELS.general;

    await sendContactMessageEmail({ name, email, topic: topicLabel, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact]", error);
    const message =
      error instanceof Error && error.message.includes("SMTP")
        ? "Email service is not configured. Please email me directly."
        : `Unable to send your message. Please try again or email ${SITE.email}.`;
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
