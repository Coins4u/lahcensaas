import { Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PAID_PLANS } from "@/lib/plans";

interface LockedOverlayProps {
  toolName: string;
  toolId: number;
}

export function LockedOverlay({ toolName, toolId }: LockedOverlayProps) {
  const requiredPlan =
    PAID_PLANS.find((p) => p.toolCount >= toolId) ?? PAID_PLANS[PAID_PLANS.length - 1];

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-[var(--background)]/80 p-4 backdrop-blur-sm">
      <div className="max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-xl">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400">
          <Lock className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-lg font-bold text-white">Locked on your tier</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          <strong className="text-white">{toolName}</strong> unlocks with{" "}
          <strong className="text-violet-400">{requiredPlan?.name}</strong> or higher (
          {requiredPlan?.price} · 30 days).
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Link href="/pricing">
            <Button size="sm">Get {requiredPlan?.name}</Button>
          </Link>
          <Link href="/pricing">
            <Button size="sm" variant="outline">
              All tiers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
