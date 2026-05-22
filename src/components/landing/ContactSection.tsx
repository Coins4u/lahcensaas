import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="section-heading">Reach out to me</h2>
        <p className="section-sub mx-auto">
          Questions about access, billing, or a tool? I read every message personally — no
          ticket queue, no chatbot.
        </p>
        <div className="mt-10 card-surface mx-auto max-w-md text-left">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold text-white">{SITE.creator}</p>
              <p className="mt-1 text-sm text-slate-500">{SITE.tagline}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </div>
          </div>
          <a href={`mailto:${SITE.email}?subject=Toolbox%20question`} className="mt-6 block">
            <Button className="w-full">Send me an email</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
