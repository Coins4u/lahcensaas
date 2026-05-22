"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function ObjectToJson() {
  const [input, setInput] = useState('({ name: "LL Toolbox", count: 25 })');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(`"use strict"; return (${input});`);
      const value = fn() as unknown;
      setOutput(JSON.stringify(value, null, 2));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not parse object literal");
      setOutput("");
    }
  };

  return (
    <ToolShell actions={<Button size="sm" onClick={convert}>Convert to JSON</Button>}>
      <Textarea label="JavaScript object literal" value={input} onChange={(e) => setInput(e.target.value)} rows={6} error={error} />
      <Textarea label="JSON output" value={output} readOnly rows={8} />
    </ToolShell>
  );
}
