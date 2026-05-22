"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function encodeEntities(s: string) {
  return s.replace(/[&<>"']/g, (c) => MAP[c] ?? c);
}

function decodeEntities(s: string) {
  const el = document.createElement("textarea");
  el.innerHTML = s;
  return el.value;
}

export function HtmlEntity() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <ToolShell actions={<><Button size="sm" onClick={() => setOutput(encodeEntities(input))}>Encode</Button><Button size="sm" variant="outline" onClick={() => setOutput(decodeEntities(input))}>Decode</Button></>}>
      <Textarea label="Input" value={input} onChange={(e) => setInput(e.target.value)} rows={5} />
      <Textarea label="Output" value={output} readOnly rows={5} />
    </ToolShell>
  );
}
