import Link from "next/link";
import { Terminal, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="font-bold text-white">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Handcrafted by {SITE.creator} in {SITE.location}. This is my personal
              portfolio and software showcase — local-first utilities I use daily as a
              web developer.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Mail className="h-4 w-4 text-violet-400" />
              <a
                href={`mailto:${SITE.email}`}
                className="text-violet-400 hover:text-violet-300 hover:underline"
              >
                {SITE.email}
              </a>
            </p>
            <p className="mt-3 inline-flex rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-xs text-slate-500">
              {SITE.techStack}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/tools" className="hover:text-violet-400">
                  My toolbox
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-violet-400">
                  About me
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-violet-400">
                  Access tiers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-violet-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-violet-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-violet-400">
                  Refunds
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="hover:text-violet-400">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-8 text-center text-xs text-slate-500 sm:text-left">
          <p>
            Handcrafted by {SITE.creator} in Agadir. © {SITE.year}. This is a personal
            portfolio and software showcase.
          </p>
        </div>
      </div>
    </footer>
  );
}
