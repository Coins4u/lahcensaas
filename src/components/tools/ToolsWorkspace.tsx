"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Lock,
  Unlock,
  Shield,
  Zap,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useAccess } from "@/context/AccessProvider";
import { TOOLS, TOTAL_TOOLS } from "@/lib/tools-config";
import { getPlanByTier, PAID_PLANS } from "@/lib/plans";
import { getToolIcon } from "@/lib/tool-icons";
import { AccessCodeInput } from "./AccessCodeInput";
import { LockedOverlay } from "./LockedOverlay";
import { Toast } from "./Toast";
import { TOOL_COMPONENTS } from "./tool-registry";
import { Button } from "@/components/ui/Button";

export function ToolsWorkspace() {
  const { canAccessTool, planName, tier } = useAccess();
  const plan = getPlanByTier(tier);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(TOOLS[0]?.slug ?? null);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const filtered = TOOLS.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  const selected = TOOLS.find((t) => t.slug === selectedSlug);
  const unlocked = selected ? canAccessTool(selected.id) : false;
  const ToolComponent = selectedSlug ? TOOL_COMPONENTS[selectedSlug] : null;
  const unlockedCount = TOOLS.filter((t) => canAccessTool(t.id)).length;
  const SelectedIcon = selected ? getToolIcon(selected.slug) : null;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              <Sparkles className="h-3.5 w-3.5" />
              My personal toolbox
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Developer toolbox
            </h1>
            <p className="mt-2 max-w-xl text-slate-400">
              {TOTAL_TOOLS} utilities I built for daily work. Everything runs in your browser —
              your data stays on your device.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="workspace-card flex items-center gap-3 px-4 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-slate-500">Your tier</p>
                <p className="font-semibold text-white">{planName}</p>
              </div>
            </div>
            <div className="workspace-card flex items-center gap-3 px-4 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Zap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-slate-500">Unlocked</p>
                <p className="font-semibold text-white">
                  {unlockedCount} <span className="font-normal text-slate-500">/ {TOTAL_TOOLS}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <AccessCodeInput onToast={(message, type) => setToast({ message, type })} />

        <div className="mt-8 grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="workspace-card overflow-hidden">
            <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  placeholder="Search utilities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[#0a0c10] py-2.5 pl-10 pr-3 text-sm text-slate-200 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/25"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {tier === 0
                  ? "Purchase a pass to unlock tools"
                  : `${plan.toolCount} tools included in your plan`}
              </p>
            </div>
            <ul className="max-h-[calc(100vh-320px)] space-y-1 overflow-y-auto p-2">
              {filtered.map((tool) => {
                const open = canAccessTool(tool.id);
                const active = selectedSlug === tool.slug;
                const Icon = getToolIcon(tool.slug);
                return (
                  <li key={tool.slug}>
                    <button
                      type="button"
                      onClick={() => setSelectedSlug(tool.slug)}
                      className={`workspace-sidebar-item ${
                        active ? "workspace-sidebar-item-active" : "workspace-sidebar-item-idle"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          active ? "bg-white/20" : "bg-slate-100 text-indigo-600"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{tool.name}</span>
                        <span
                          className={`block truncate text-xs ${
                            active ? "text-indigo-200" : "text-slate-400"
                          }`}
                        >
                          {tool.category}
                        </span>
                      </span>
                      {open ? (
                        <Unlock
                          className={`h-4 w-4 shrink-0 ${active ? "text-indigo-200" : "text-emerald-500"}`}
                        />
                      ) : (
                        <Lock
                          className={`h-4 w-4 shrink-0 ${active ? "text-indigo-200" : "text-slate-300"}`}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Main panel */}
          <main className="workspace-card relative min-h-[520px] overflow-hidden">
            {selected ? (
              <>
                <div className="border-b border-[var(--border)] bg-gradient-to-r from-[var(--surface)] to-violet-950/20 px-6 py-5">
                  <div className="flex items-start gap-4">
                    {SelectedIcon && (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-900/40">
                        <SelectedIcon className="h-6 w-6" />
                      </span>
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="inline-flex rounded-md bg-violet-600/20 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-violet-300">
                        {selected.category}
                      </span>
                      <h2 className="mt-1 text-xl font-bold text-white">{selected.name}</h2>
                      <p className="mt-1 text-sm text-slate-400">{selected.description}</p>
                    </div>
                    {unlocked && (
                      <span className="hidden shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 sm:inline-flex">
                        <Unlock className="h-3.5 w-3.5" />
                        Active
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative p-6">
                  {!unlocked && <LockedOverlay toolName={selected.name} toolId={selected.id} />}
                  <div
                    className={
                      !unlocked
                        ? "pointer-events-none select-none opacity-40 blur-[2px]"
                        : ""
                    }
                  >
                    {ToolComponent && <ToolComponent />}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex min-h-[520px] flex-col items-center justify-center p-8 text-center">
                <p className="text-slate-500">Select a utility from the sidebar.</p>
              </div>
            )}
          </main>
        </div>

        {tier === 0 && (
          <div className="mt-8 workspace-card p-6">
            <h3 className="font-semibold text-white">Support the project — unlock more tools</h3>
            <p className="mt-1 text-sm text-slate-400">
              One-time contributions from {PAID_PLANS[0]?.price} to{" "}
              {PAID_PLANS[PAID_PLANS.length - 1]?.price}. 30 days access per tier.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {PAID_PLANS.slice(0, 4).map((p) => (
                <span
                  key={p.id}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-xs text-slate-400"
                >
                  {p.name}: {p.toolCount} tools · {p.price}
                </span>
              ))}
            </div>
            <Link href="/pricing" className="mt-4 inline-block">
              <Button>
                View access tiers
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
}
