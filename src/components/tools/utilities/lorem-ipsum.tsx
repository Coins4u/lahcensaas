"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const WORDS =
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".split(
    " "
  );

function generate(type: "words" | "sentences" | "paragraphs", count: number): string {
  const sentence = () => {
    const len = 8 + Math.floor(Math.random() * 12);
    const words = Array.from({ length: len }, () => WORDS[Math.floor(Math.random() * WORDS.length)]);
    words[0] = words[0]!.charAt(0).toUpperCase() + words[0]!.slice(1);
    return words.join(" ") + ".";
  };

  if (type === "words") {
    return Array.from({ length: count }, () => WORDS[Math.floor(Math.random() * WORDS.length)]).join(" ");
  }
  if (type === "sentences") {
    return Array.from({ length: count }, sentence).join(" ");
  }
  return Array.from({ length: count }, () => Array.from({ length: 4 }, sentence).join(" ")).join("\n\n");
}

export function LoremIpsum() {
  const [type, setType] = useState<"words" | "sentences" | "paragraphs">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState(generate("paragraphs", 3));

  return (
    <ToolShell
      actions={
        <Button size="sm" onClick={() => setOutput(generate(type, count))}>
          Generate
        </Button>
      }
    >
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as typeof type)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          >
            <option value="words">Words</option>
            <option value="sentences">Sentences</option>
            <option value="paragraphs">Paragraphs</option>
          </select>
        </div>
        <Input label="Count" type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-24" />
      </div>
      <Textarea value={output} readOnly rows={10} />
    </ToolShell>
  );
}
