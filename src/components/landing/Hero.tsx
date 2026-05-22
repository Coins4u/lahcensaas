import Link from "next/link";
import { ArrowRight, Code2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PAID_PLANS } from "@/lib/plans";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15)_0%,_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
            <Code2 className="h-4 w-4" />
            {SITE.techStack}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              {SITE.creator}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            I build tools to solve my daily development challenges. I&apos;ve decided to open
            access to my personal utility suite for others who find them useful — fast,
            local-first, and honest about what you get.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-emerald-500/80" />
            Web developer · {SITE.location}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/pricing">
              <Button size="lg">
                View access tiers
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/tools">
              <Button size="lg" variant="outline">
                Open my toolbox
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            One-time contributions from{" "}
            <strong className="text-slate-300">{PAID_PLANS[0]?.price}</strong> ·
            30 days access per tier · No subscriptions
          </p>
        </div>
      </div>
    </section>
  );
}
