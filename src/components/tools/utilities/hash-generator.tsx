"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "../CopyButton";

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function HashGenerator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const hash = async () => {
    try {
      setOutput(await sha256(input));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Hash failed");
    }
  };

  return (
    <ToolShell
      hint="SHA-256 hashing via Web Crypto API — your text never leaves the browser."
      actions={
        <>
          <Button size="sm" onClick={hash}>Hash SHA-256</Button>
          <CopyButton text={output} />
        </>
      }
    >
      <Textarea label="Input text" value={input} onChange={(e) => setInput(e.target.value)} rows={5} error={error} />
      <ToolPanel label="SHA-256 hash">
        <pre className="tool-output break-all">{output || "—"}</pre>
      </ToolPanel>
    </ToolShell>
  );
}
