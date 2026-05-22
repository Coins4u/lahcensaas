"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = () => {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Encode failed");
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid Base64");
    }
  };

  return (
    <ToolShell actions={<><Button size="sm" onClick={encode}>Encode</Button><Button size="sm" variant="outline" onClick={decode}>Decode</Button></>}>
      <Textarea label="Input" value={input} onChange={(e) => setInput(e.target.value)} rows={6} error={error} />
      <Textarea label="Output" value={output} readOnly rows={6} />
    </ToolShell>
  );
}
