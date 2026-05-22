"use client";

import { useMemo, useState } from "react";
import { ToolShell } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { CopyButton } from "../CopyButton";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const h = hex.replace("#", "");
  if (!/^[0-9A-Fa-f]{6}$/.test(h)) return null;
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHsl(r: number, g: number, b: number): string {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

export function ColorConverter() {
  const [hex, setHex] = useState("#8b5cf6");

  const rgb = useMemo(() => hexToRgb(hex), [hex]);
  const rgbStr = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "Invalid HEX";
  const hslStr = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : "—";

  return (
    <ToolShell hint="Convert brand colors between HEX, RGB, and HSL for CSS and design handoff.">
      <Input label="HEX color" value={hex} onChange={(e) => setHex(e.target.value)} className="font-mono max-w-xs" />
      <div className="flex flex-wrap items-center gap-4">
        <div className="h-20 w-32 rounded-xl border border-[var(--border)] shadow-inner" style={{ backgroundColor: rgb ? hex : "#333" }} />
        <div className="space-y-2 text-sm font-mono text-slate-300">
          <p>RGB: {rgbStr}</p>
          <p>HSL: {hslStr}</p>
          <CopyButton text={`${hex}\n${rgbStr}\n${hslStr}`} label="Copy values" />
        </div>
      </div>
    </ToolShell>
  );
}
