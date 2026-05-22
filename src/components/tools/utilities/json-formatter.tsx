"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "../CopyButton";
import { Braces } from "lucide-react";

export function JsonFormatter() {
  const [input, setInput] = useState(
    '{\n  "project": "LL Toolbox",\n  "utilities": 25,\n  "local": true\n}'
  );
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = (minify = false) => {
    try {
      const parsed = JSON.parse(input) as unknown;
      setOutput(JSON.stringify(parsed, null, minify ? 0 : 2));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  };

  const validate = () => {
    try {
      JSON.parse(input);
      setError("");
      setOutput("✓ Valid JSON — syntax is correct.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  };

  return (
    <ToolShell
      hint="Format, validate, and minify JSON instantly. Processing runs in your browser — data never leaves your device."
      actions={
        <>
          <Button size="sm" onClick={() => format(false)}>
            <Braces className="h-4 w-4" /> Format
          </Button>
          <Button size="sm" variant="outline" onClick={() => format(true)}>
            Minify
          </Button>
          <Button size="sm" variant="secondary" onClick={validate}>
            Validate
          </Button>
          <CopyButton text={output} label="Copy output" />
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel label="Input">
          <Textarea value={input} onChange={(e) => setInput(e.target.value)} rows={14} error={error} className="border-0 p-0 shadow-none" />
        </ToolPanel>
        <ToolPanel label="Output">
          {output ? (
            <pre className="tool-output max-h-[360px] whitespace-pre-wrap">{output}</pre>
          ) : (
            <p className="text-sm text-slate-400">Formatted JSON will appear here.</p>
          )}
        </ToolPanel>
      </div>
    </ToolShell>
  );
}
