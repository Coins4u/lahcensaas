import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PAID_PLANS } from "@/lib/plans";
import { Button } from "@/components/ui/Button";

export function PricingPreview() {
  const featured = PAID_PLANS.find((p) => p.highlight) ?? PAID_PLANS[2];
  const supporter = PAID_PLANS[0];
  const ultimate = PAID_PLANS[PAID_PLANS.length - 1];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Access tiers</h2>
          <p className="section-sub">
            <strong className="text-slate-300">One-time contributions</strong> for 30 days of
            access. Not business plans — just support levels for my toolbox.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[supporter, featured, ultimate].map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-950/40 to-[var(--surface)] shadow-lg shadow-violet-900/20 ring-1 ring-violet-500/30"
                  : "border-[var(--border)] bg-[var(--surface-elevated)]"
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 w-fit rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-violet-300">
                {plan.price}
                <span className="text-base font-normal text-slate-500"> once</span>
              </p>
              <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {plan.toolCount} utilities
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  30 days access
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Email redemption code
                </li>
              </ul>
              <Link href="/pricing" className="mt-8 block">
                <Button className="w-full" variant={plan.highlight ? "primary" : "outline"}>
                  Choose tier
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Eight tiers from {supporter.price} to {ultimate.price}.{" "}
          <Link href="/pricing" className="font-medium text-violet-400 hover:underline">
            See all access tiers
            <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
          </Link>
        </p>
      </div>
    </section>
  );
}
