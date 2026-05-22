import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";
import { TOTAL_TOOLS } from "@/lib/tools-config";
import { Code2, MapPin, Mail, ArrowRight, Terminal } from "lucide-react";

export const metadata = {
  title: "About me",
  description: `About ${SITE.creator} — web developer in Morocco and creator of ${SITE.name}.`,
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          <Code2 className="h-3.5 w-3.5" />
          {SITE.techStack}
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">About me</h1>
        <p className="mt-2 text-lg text-violet-300">{SITE.creator}</p>
        <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4" />
          Web developer · {SITE.location}
        </p>

        <div className="mt-10 space-y-6 text-slate-400 leading-relaxed">
          <p>
            Hi — I&apos;m Lahcen. I build websites and tools for clients and my own projects.
            {SITE.name} started because I kept opening ten different tabs for JSON, SEO meta,
            UTM links, and small formatters. I wanted one calm place that respects privacy and
            actually works.
          </p>
          <p>
            As a web developer in Morocco, I needed fast, local-first utilities for SEO,
            formatting, and deployment prep. These are the{" "}
            <strong className="text-white">{TOTAL_TOOLS} tools I use every day</strong> — now
            packaged so others can support the project and unlock tiers that match their needs.
          </p>
          <p>
            Everything in the toolbox runs in your browser. I don&apos;t process your pasted
            data on my servers for the utilities themselves. If you have questions, billing
            issues, or ideas for new tools, email me directly.
          </p>
        </div>

        <div className="mt-10 card-surface flex items-start gap-4">
          <Terminal className="h-8 w-8 shrink-0 text-violet-400" />
          <div>
            <h2 className="font-semibold text-white">What I offer</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>· {TOTAL_TOOLS} professional browser utilities</li>
              <li>· Tiered access via one-time contributions (30 days)</li>
              <li>· Clear terms, privacy, refund, and DMCA policies</li>
              <li>· Personal support at {SITE.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/tools">
            <Button>
              Open toolbox
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline">Access tiers</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost">
              <Mail className="h-4 w-4" />
              Contact me
            </Button>
          </Link>
        </div>
      </article>
    </SiteLayout>
  );
}
