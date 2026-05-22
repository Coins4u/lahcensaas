import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE } from "@/lib/site";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contact me",
  description: `Get in touch with ${SITE.creator} — questions about the toolbox, access, or billing.`,
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          <MessageCircle className="h-3.5 w-3.5" />
          Personal support
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">Contact me</h1>
        <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed">
          Questions about access tiers, a tool, or billing? Send a message below — I read every
          one myself. No ticket queue, no chatbot.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <aside className="space-y-6 lg:col-span-2">
            <div className="card-surface">
              <Mail className="h-6 w-6 text-violet-400" />
              <h2 className="mt-4 font-semibold text-white">Email</h2>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 block text-sm text-violet-400 hover:text-violet-300 hover:underline"
              >
                {SITE.email}
              </a>
            </div>

            <div className="card-surface">
              <MapPin className="h-6 w-6 text-violet-400" />
              <h2 className="mt-4 font-semibold text-white">Location</h2>
              <p className="mt-2 text-sm text-slate-500">{SITE.location}</p>
            </div>

            <div className="card-surface">
              <Clock className="h-6 w-6 text-violet-400" />
              <h2 className="mt-4 font-semibold text-white">Response time</h2>
              <p className="mt-2 text-sm text-slate-500">
                I usually reply within 1–2 business days. For urgent access issues after
                payment, mention your purchase email in the message.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Looking for policies? See{" "}
              <Link href="/terms" className="text-violet-400 hover:underline">
                Terms
              </Link>
              ,{" "}
              <Link href="/privacy" className="text-violet-400 hover:underline">
                Privacy
              </Link>
              , or{" "}
              <Link href="/refund-policy" className="text-violet-400 hover:underline">
                Refunds
              </Link>
              .
            </p>
          </aside>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
