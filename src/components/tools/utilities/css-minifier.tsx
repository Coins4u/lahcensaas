"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "../CopyButton";

function minifyCss(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>+~])\s*/g, "$1")
    .trim();
}

function minifyHtml(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, "").replace(/>\s+</g, "><").replace(/\s+/g, " ").trim();
}

export function CssMinifier() {
  const [input, setInput] = useState("/* example */\n.header {\n  color: #fff;\n  padding: 1rem;\n}");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"css" | "html">("css");

  const minify = () => {
    setOutput(mode === "css" ? minifyCss(input) : minifyHtml(input));
  };

  return (
    <ToolShell actions={<><Button size="sm" onClick={minify}>Minify</Button><CopyButton text={output} /></>}>
      <div className="flex gap-2">
        {(["css", "html"] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={`rounded-lg px-3 py-1.5 text-sm capitalize ${mode === m ? "bg-violet-600 text-white" : "border border-[var(--border)] text-slate-400"}`}>
            {m}
          </button>
        ))}
      </div>
      <Textarea label="Input" value={input} onChange={(e) => setInput(e.target.value)} rows={8} />
      <ToolPanel label="Minified output"><pre className="tool-output max-h-48 whitespace-pre-wrap break-all">{output}</pre></ToolPanel>
    </ToolShell>
  );
}
