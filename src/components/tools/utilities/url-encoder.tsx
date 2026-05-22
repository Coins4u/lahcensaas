"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = () => {
    try {
      setOutput(encodeURIComponent(input));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Encode failed");
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Decode failed — invalid encoding");
    }
  };

  return (
    <ToolShell actions={<><Button size="sm" onClick={encode}>Encode</Button><Button size="sm" variant="outline" onClick={decode}>Decode</Button></>}>
      <Textarea label="Input" value={input} onChange={(e) => setInput(e.target.value)} rows={5} error={error} />
      <Textarea label="Output" value={output} readOnly rows={5} />
    </ToolShell>
  );
}
