import { SiteLayout } from "@/components/layout/SiteLayout";
import { SITE } from "@/lib/site";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: {lastUpdated} · {SITE.creator}
        </p>
        <div className="prose prose-invert mt-10 max-w-none prose-headings:text-white prose-headings:font-semibold prose-p:text-slate-400 prose-li:text-slate-400 prose-a:text-violet-400">
          {children}
        </div>
      </article>
    </SiteLayout>
  );
}
