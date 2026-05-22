"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PAID_PLANS } from "@/lib/plans";
import type { PlanConfig } from "@/lib/types";
import { PurchaseModal } from "./PurchaseModal";

export function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<PlanConfig | null>(null);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid grid-cols-4 gap-4 border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:grid-cols-5 sm:px-6">
            <span className="col-span-2 sm:col-span-1">Tier</span>
            <span className="hidden sm:block">Utilities</span>
            <span>Contribution</span>
            <span className="col-span-2 sm:col-span-1 text-right">Action</span>
          </div>
          {PAID_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`grid grid-cols-4 items-center gap-4 border-b border-[var(--border)] px-4 py-4 last:border-0 sm:grid-cols-5 sm:px-6 ${
                plan.highlight ? "bg-violet-950/30" : ""
              }`}
            >
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold text-white">
                  {plan.name}
                  {plan.highlight && (
                    <span className="ml-2 rounded-full bg-violet-600 px-2 py-0.5 text-xs text-white">
                      Popular
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-sm text-slate-500 sm:hidden">
                  {plan.toolCount} utilities · 30 days
                </p>
              </div>
              <p className="hidden text-sm text-slate-400 sm:block">{plan.toolCount} utilities</p>
              <p className="font-bold text-violet-400">{plan.price}</p>
              <div className="col-span-2 flex justify-end sm:col-span-1">
                <Button
                  size="sm"
                  variant={plan.highlight ? "primary" : "outline"}
                  onClick={() => setSelectedPlan(plan)}
                >
                  Get tier
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAID_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-violet-500/50 bg-gradient-to-b from-violet-950/40 to-[var(--surface)] ring-1 ring-violet-500/30"
                  : "border-[var(--border)] bg-[var(--surface-elevated)]"
              }`}
            >
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-violet-400">
                30 days access
              </p>
              <p className="mt-4 text-3xl font-bold text-violet-300">
                {plan.price}
                <span className="text-sm font-normal text-slate-500"> once</span>
              </p>
              <p className="mt-3 text-sm text-slate-500">{plan.description}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Tools 1–{plan.toolCount} of 25
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Redeem in toolbox
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  Invoice by email
                </li>
              </ul>
              <Button
                className="mt-6 w-full"
                variant={plan.highlight ? "primary" : "outline"}
                onClick={() => setSelectedPlan(plan)}
              >
                Get tier
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Already contributed?{" "}
          <Link href="/tools" className="font-medium text-violet-400 hover:underline">
            Redeem your code in the toolbox
          </Link>
        </p>
      </section>

      <PurchaseModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </>
  );
}
