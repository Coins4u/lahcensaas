import { SiteLayout } from "@/components/layout/SiteLayout";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { SITE } from "@/lib/site";
import { Code2 } from "lucide-react";

export const metadata = {
  title: "Access tiers",
  description: `One-time contributions for 30 days access to ${SITE.creator}'s developer toolbox.`,
};

export default function PricingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-[var(--border)] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <Code2 className="h-3.5 w-3.5" />
            {SITE.techStack}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">Access tiers</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Support my work with a <strong className="text-slate-200">one-time contribution</strong>{" "}
            for 30 days of toolbox access. Not subscriptions — just clear tiers that unlock
            more utilities.
          </p>
        </div>
      </section>
      <PricingPlans />
    </SiteLayout>
  );
}
