"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { CopyButton } from "../CopyButton";

export function CssGradientGenerator() {
  const [c1, setC1] = useState("#8b5cf6");
  const [c2, setC2] = useState("#06b6d4");
  const [angle, setAngle] = useState(135);
  const [radial, setRadial] = useState(false);

  const css = radial
    ? `background: radial-gradient(circle, ${c1} 0%, ${c2} 100%);`
    : `background: linear-gradient(${angle}deg, ${c1} 0%, ${c2} 100%);`;

  return (
    <ToolShell actions={<CopyButton text={css} label="Copy CSS" />}>
      <div className="flex flex-wrap gap-4">
        <Input label="Color 1" value={c1} onChange={(e) => setC1(e.target.value)} className="w-36 font-mono" />
        <Input label="Color 2" value={c2} onChange={(e) => setC2(e.target.value)} className="w-36 font-mono" />
        {!radial && <Input label="Angle (deg)" type="number" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-28" />}
        <label className="flex items-end gap-2 pb-2 text-sm text-slate-400">
          <input type="checkbox" checked={radial} onChange={(e) => setRadial(e.target.checked)} className="accent-violet-600" />
          Radial gradient
        </label>
      </div>
      <div className="h-32 rounded-xl border border-[var(--border)]" style={{ background: css.replace("background: ", "") }} />
      <ToolPanel label="CSS">
        <pre className="tool-output">{css}</pre>
      </ToolPanel>
    </ToolShell>
  );
}
