"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Input } from "@/components/ui/Input";

const FIELD_HELP: Record<number, string> = {
  0: "minute (0-59)",
  1: "hour (0-23)",
  2: "day of month (1-31)",
  3: "month (1-12)",
  4: "day of week (0-7, 0 and 7 = Sunday)",
};

export function CronHelper() {
  const [expr, setExpr] = useState("0 9 * * 1-5");
  const parts = expr.trim().split(/\s+/);
  const valid = parts.length === 5;

  const description = valid
    ? `Runs at minute "${parts[0]}" of hour "${parts[1]}" on day-of-month "${parts[2]}" in month "${parts[3]}" on weekday "${parts[4]}".`
    : "Enter 5 fields: minute hour day month weekday";

  return (
    <ToolShell hint="Quick reference for standard cron syntax (5-field Unix style).">
      <Input label="Cron expression" value={expr} onChange={(e) => setExpr(e.target.value)} className="font-mono" placeholder="0 9 * * 1-5" />
      <ToolPanel label="Plain English">
        <p className="text-sm text-slate-300">{description}</p>
      </ToolPanel>
      {valid && (
        <ul className="grid gap-2 sm:grid-cols-2">
          {parts.map((p, i) => (
            <li key={i} className="rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2 text-xs">
              <span className="text-violet-400">Field {i}:</span> <code className="text-emerald-400">{p}</code>
              <span className="block text-slate-500">{FIELD_HELP[i]}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xs text-slate-600">Example: <code className="text-slate-400">0 9 * * 1-5</code> = 9:00 AM weekdays</p>
    </ToolShell>
  );
}
