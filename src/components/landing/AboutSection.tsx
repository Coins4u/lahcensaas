import { SITE } from "@/lib/site";
import { TOTAL_TOOLS } from "@/lib/tools-config";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Why I built this</h2>
        <div className="mt-8 space-y-4 text-slate-400 leading-relaxed">
          <p>
            As a web developer in Morocco, I needed fast, local-first tools for SEO, JSON
            formatting, encoding, and the small tasks that eat up my day. I was tired of
            ad-heavy sites and tools that sent my data somewhere I couldn&apos;t see.
          </p>
          <p>
            These are the <strong className="text-white">{TOTAL_TOOLS} utilities I use every day</strong>.
            I packaged them into a single workspace, tiered access by contribution, so I can
            keep hosting and improving the project while sharing it with others who work the
            same way.
          </p>
          <p className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-sm text-slate-500">
            — {SITE.creator}, {SITE.location} ·{" "}
            <Link href="/about" className="text-violet-400 hover:underline">
              Read full about me
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
