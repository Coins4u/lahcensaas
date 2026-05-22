"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Copy } from "lucide-react";

export function BoxShadowGenerator() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(8);
  const [blur, setBlur] = useState(24);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("rgba(79, 70, 229, 0.25)");
  const [inset, setInset] = useState(false);

  const css = `box-shadow: ${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${color};`;

  return (
    <ToolShell actions={<Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(css)}><Copy className="h-4 w-4" /> Copy CSS</Button>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Input label="X offset" type="number" value={x} onChange={(e) => setX(Number(e.target.value))} />
        <Input label="Y offset" type="number" value={y} onChange={(e) => setY(Number(e.target.value))} />
        <Input label="Blur" type="number" value={blur} onChange={(e) => setBlur(Number(e.target.value))} />
        <Input label="Spread" type="number" value={spread} onChange={(e) => setSpread(Number(e.target.value))} />
        <Input label="Color" value={color} onChange={(e) => setColor(e.target.value)} />
        <label className="flex items-end gap-2 pb-2 text-sm">
          <input type="checkbox" checked={inset} onChange={(e) => setInset(e.target.checked)} />
          Inset shadow
        </label>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div
          className="h-32 w-48 rounded-xl bg-white"
          style={{ boxShadow: `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${color}` }}
        />
        <code className="flex-1 rounded-lg bg-slate-900 p-4 text-sm text-green-400">{css}</code>
      </div>
    </ToolShell>
  );
}
