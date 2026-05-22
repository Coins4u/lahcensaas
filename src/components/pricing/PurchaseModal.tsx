"use client";

import { useState } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import type { PlanConfig } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface PurchaseModalProps {
  plan: PlanConfig | null;
  onClose: () => void;
}

export function PurchaseModal({ plan, onClose }: PurchaseModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  if (!plan) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, planId: plan.id }),
      });
      const data = (await res.json()) as { success?: boolean; email?: string; error?: string };

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmittedEmail(data.email ?? email);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="relative w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-slate-500 hover:bg-[var(--surface-elevated)] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {submittedEmail ? (
          <div className="py-4 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
            <h2 className="mt-4 text-xl font-bold text-white">Thank you!</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Your invoice has been sent to{" "}
              <strong className="text-white">{submittedEmail}</strong>. Check your inbox and
              spam folder for the payment link.
            </p>
            <Button className="mt-6 w-full" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <>
            <h2 className="pr-8 text-xl font-bold text-white">{plan.name}</h2>
            <p className="mt-1 text-sm text-slate-500">
              {plan.price} · 30 days · {plan.toolCount} utilities
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input
                label="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              {error && (
                <p className="rounded-lg bg-red-950/50 px-3 py-2 text-sm text-red-400">{error}</p>
              )}
              <p className="text-xs text-slate-500">
                I&apos;ll email you an invoice with a secure payment link. One-time contribution
                — no recurring charges.
              </p>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send invoice to my email"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
