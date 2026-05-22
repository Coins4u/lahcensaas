"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";

function decodePart(part: string): string {
  const padded = part.replace(/-/g, "+").replace(/_/g, "/");
  const json = decodeURIComponent(
    escape(atob(padded + "=".repeat((4 - (padded.length % 4)) % 4)))
  );
  return JSON.stringify(JSON.parse(json), null, 2);
}

export function JwtDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const decode = () => {
    try {
      const parts = token.trim().split(".");
      if (parts.length < 2) throw new Error("JWT must have at least header and payload.");
      setHeader(decodePart(parts[0]!));
      setPayload(decodePart(parts[1]!));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JWT");
      setHeader("");
      setPayload("");
    }
  };

  return (
    <ToolShell hint="Decode only — never paste production secrets on untrusted sites. This runs locally in your browser.">
      <Textarea label="JWT token" value={token} onChange={(e) => setToken(e.target.value)} rows={4} error={error} placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
      <button type="button" onClick={decode} className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500">
        Decode
      </button>
      <div className="grid gap-4 lg:grid-cols-2">
        <ToolPanel label="Header"><pre className="tool-output text-xs">{header || "—"}</pre></ToolPanel>
        <ToolPanel label="Payload"><pre className="tool-output text-xs">{payload || "—"}</pre></ToolPanel>
      </div>
    </ToolShell>
  );
}
