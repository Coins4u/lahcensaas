"use client";

import { useState } from "react";
import { KeyRound, Shield } from "lucide-react";
import { useAccess } from "@/context/AccessProvider";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { getPlanByTier } from "@/lib/plans";
import { TOTAL_TOOLS } from "@/lib/tools-config";

interface AccessCodeInputProps {
  onToast: (message: string, type: "success" | "error") => void;
}

export function AccessCodeInput({ onToast }: AccessCodeInputProps) {
  const [code, setCode] = useState("");
  const { tier, planName, redeemedCode, redeemCode, resetAccess } = useAccess();
  const plan = getPlanByTier(tier);

  const handleRedeem = () => {
    const result = redeemCode(code);
    onToast(result.message, result.success ? "success" : "error");
    if (result.success) setCode("");
  };

  return (
    <section className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-950/40 to-[var(--surface)] p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white">
            <KeyRound className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-semibold text-white">Redeem access code</h2>
            <p className="mt-0.5 text-sm text-slate-400">
              Paste the code from your purchase email to unlock your tier.
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
              <Shield className="h-4 w-4 text-violet-400" />
              <span>
                Tier: <strong className="text-violet-300">{planName}</strong>
                {" · "}
                {plan.toolCount} / {TOTAL_TOOLS} unlocked
                {redeemedCode && (
                  <span className="text-slate-600"> ({redeemedCode})</span>
                )}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
          <Input
            placeholder="e.g. PLUS30"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleRedeem()}
            className="sm:w-56"
          />
          <Button onClick={handleRedeem}>Redeem</Button>
          {tier > 0 && (
            <Button variant="ghost" size="sm" onClick={resetAccess}>
              Clear
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
