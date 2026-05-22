"use client";

import { useMemo, useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";

export function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const lines = text ? text.split("\n").length : 0;
    const sentences = text.trim() ? (text.match(/[.!?]+/g)?.length ?? 1) : 0;
    const readingMin = words / 200;
    return { words, chars, charsNoSpace, lines, sentences, readingMin };
  }, [text]);

  const items = [
    { label: "Words", value: stats.words, color: "text-indigo-600" },
    { label: "Characters", value: stats.chars, color: "text-violet-600" },
    { label: "No spaces", value: stats.charsNoSpace, color: "text-slate-700" },
    { label: "Lines", value: stats.lines, color: "text-slate-700" },
    { label: "Sentences", value: stats.sentences, color: "text-slate-700" },
    { label: "Read time", value: `${stats.readingMin.toFixed(1)} min`, color: "text-emerald-600" },
  ];

  return (
    <ToolShell hint="Real-time content analytics for copywriters, SEO, and social posts.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map(({ label, value, color }) => (
          <ToolPanel key={label} className="text-center !p-4">
            <p className={`text-2xl font-bold tabular-nums ${color}`}>{value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
          </ToolPanel>
        ))}
      </div>
      <ToolPanel label="Your text">
        <Textarea value={text} onChange={(e) => setText(e.target.value)} rows={12} placeholder="Paste or type your content for instant analysis..." className="border-0 p-0 shadow-none" />
      </ToolPanel>
    </ToolShell>
  );
}
