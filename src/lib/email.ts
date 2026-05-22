import nodemailer from "nodemailer";
import type { PlanConfig } from "./types";
import { SITE } from "./site";
import { TOTAL_TOOLS } from "./tools-config";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env.local"
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendInvoiceEmail(
  to: string,
  customerName: string,
  plan: PlanConfig
): Promise<void> {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? SITE.email;
  const transporter = getTransporter();

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; color: #0f172a; line-height: 1.6; max-width: 560px; margin: 0 auto; padding: 24px;">
  <h1 style="color: #7c3aed; font-size: 22px;">${SITE.name} — Your invoice</h1>
  <p>Hi ${escapeHtml(customerName)},</p>
  <p>Thanks for supporting my work. Complete your <strong>one-time contribution</strong> (30 days access) using the link below.</p>
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
    <tr><td style="padding: 8px 0; color: #64748b;">Tier</td><td style="padding: 8px 0;"><strong>${escapeHtml(plan.name)}</strong></td></tr>
    <tr><td style="padding: 8px 0; color: #64748b;">Amount</td><td style="padding: 8px 0;"><strong>${escapeHtml(plan.price)}</strong></td></tr>
    <tr><td style="padding: 8px 0; color: #64748b;">Utilities</td><td style="padding: 8px 0;">${plan.toolCount} of ${TOTAL_TOOLS}</td></tr>
  </table>
  <p style="margin: 28px 0;">
    <a href="${plan.checkoutUrl}" style="display: inline-block; background: #7c3aed; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600;">
      Pay &amp; get access
    </a>
  </p>
  <p style="font-size: 13px; color: #64748b;">After payment you'll receive a code to redeem in the toolbox.<br/>
  — ${SITE.creator} · <a href="mailto:${SITE.email}">${SITE.email}</a></p>
</body>
</html>`;

  const text = `Hi ${customerName},

Thanks for supporting ${SITE.name}.

Tier: ${plan.name}
Amount: ${plan.price} (one-time, 30 days access)
Utilities: ${plan.toolCount} of ${TOTAL_TOOLS}

Pay here: ${plan.checkoutUrl}

— ${SITE.creator}`;

  await transporter.sendMail({
    from: `"${SITE.creator}" <${from}>`,
    to,
    subject: `${SITE.shortName} — ${plan.name} (${plan.price})`,
    text,
    html,
  });
}

export async function sendAdminNotificationEmail(
  customerName: string,
  customerEmail: string,
  plan: PlanConfig
): Promise<void> {
  const adminTo = process.env.ADMIN_EMAIL ?? process.env.SMTP_USER ?? SITE.email;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER ?? SITE.email;
  const transporter = getTransporter();
  const submittedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; color: #0f172a; padding: 24px;">
  <h1 style="color: #7c3aed;">New tier request — ${SITE.shortName}</h1>
  <p><strong>Name:</strong> ${escapeHtml(customerName)}</p>
  <p><strong>Email:</strong> ${escapeHtml(customerEmail)}</p>
  <p><strong>Tier:</strong> ${escapeHtml(plan.name)} (${escapeHtml(plan.price)})</p>
  <p><strong>Time:</strong> ${escapeHtml(submittedAt)}</p>
</body>
</html>`;

  await transporter.sendMail({
    from: `"${SITE.shortName}" <${from}>`,
    to: adminTo,
    replyTo: customerEmail,
    subject: `[${SITE.shortName}] ${plan.name} — ${customerEmail}`,
    text: `New request\n\n${customerName}\n${customerEmail}\n${plan.name} ${plan.price}\n${submittedAt}`,
    html,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
