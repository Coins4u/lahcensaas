"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const converters = {
  upper: (s: string) => s.toUpperCase(),
  lower: (s: string) => s.toLowerCase(),
  title: (s: string) => s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()),
  slug: (s: string) => s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
};

export function CaseConverter() {
  const [input, setInput] = useState("UtilHub Web Utilities");
  const [output, setOutput] = useState("");

  return (
    <ToolShell
      actions={
        <>
          {(Object.keys(converters) as Array<keyof typeof converters>).map((key) => (
            <Button key={key} size="sm" variant="outline" onClick={() => setOutput(converters[key](input))}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
        </>
      }
    >
      <Textarea label="Input" value={input} onChange={(e) => setInput(e.target.value)} rows={4} />
      <Textarea label="Output" value={output} readOnly rows={4} />
    </ToolShell>
  );
}
