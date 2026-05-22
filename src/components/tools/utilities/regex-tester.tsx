"use client";

import { useMemo, useState } from "react";
import { ToolShell } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function RegexTester() {
  const [pattern, setPattern] = useState("[a-z]+");
  const [flags, setFlags] = useState("gi");
  const [text, setText] = useState("Lahcen toolbox provides 25 browser utilities for developers.");

  const result = useMemo(() => {
    try {
      const re = new RegExp(pattern, flags);
      const matches: RegExpMatchArray[] = [];
      if (flags.includes("g")) {
        let m: RegExpExecArray | null;
        while ((m = re.exec(text)) !== null) {
          matches.push(m);
          if (m[0] === "") re.lastIndex++;
        }
      } else {
        const m = re.exec(text);
        if (m) matches.push(m);
      }
      return { error: "", matches, count: matches.length };
    } catch (e) {
      return { error: e instanceof Error ? e.message : "Invalid regex", matches: [] as RegExpMatchArray[], count: 0 };
    }
  }, [pattern, flags, text]);

  return (
    <ToolShell>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Pattern" value={pattern} onChange={(e) => setPattern(e.target.value)} className="font-mono" />
        <Input label="Flags" value={flags} onChange={(e) => setFlags(e.target.value)} className="font-mono w-32" />
      </div>
      <Textarea label="Test string" value={text} onChange={(e) => setText(e.target.value)} rows={4} />
      {result.error ? (
        <p className="text-sm text-red-600">{result.error}</p>
      ) : (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
          <p className="font-medium text-slate-700">{result.count} match(es)</p>
          <ul className="mt-2 space-y-1 font-mono text-indigo-700">
            {result.matches.map((m, i) => (
              <li key={i}>{m[0]} {m.index !== undefined && <span className="text-slate-400">@ {m.index}</span>}</li>
            ))}
          </ul>
        </div>
      )}
    </ToolShell>
  );
}
