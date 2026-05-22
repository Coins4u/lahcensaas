import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="border-t border-violet-500/20 bg-gradient-to-br from-violet-950/80 via-[var(--surface)] to-[var(--background)] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Want access to my toolbox?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Pick a tier, get your code by email, and start using the same utilities I rely on
          every day.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/pricing">
            <Button size="lg">
              View access tiers
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <a href={`mailto:${SITE.email}`}>
            <Button size="lg" variant="outline">
              <Mail className="h-5 w-5" />
              Reach out to me
            </Button>
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-600">{SITE.techStack}</p>
      </div>
    </section>
  );
}
