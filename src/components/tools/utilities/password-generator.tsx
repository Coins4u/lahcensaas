"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "../CopyButton";
import { RefreshCw } from "lucide-react";

const CHARSETS = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{}|;:,.<>?",
};

function randomFrom(chars: string, len: number): string {
  const arr = new Uint32Array(len);
  crypto.getRandomValues(arr);
  return Array.from(arr, (n) => chars[n % chars.length]).join("");
}

export function PasswordGenerator() {
  const [length, setLength] = useState(20);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [apiKey, setApiKey] = useState(false);
  const [result, setResult] = useState("");

  const generate = () => {
    if (apiKey) {
      const bytes = new Uint8Array(32);
      crypto.getRandomValues(bytes);
      setResult(Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join(""));
      return;
    }
    let pool = "";
    if (useUpper) pool += CHARSETS.upper;
    if (useLower) pool += CHARSETS.lower;
    if (useNumbers) pool += CHARSETS.numbers;
    if (useSymbols) pool += CHARSETS.symbols;
    if (!pool) pool = CHARSETS.lower;
    setResult(randomFrom(pool, length));
  };

  return (
    <ToolShell
      hint="Cryptographically secure passwords and API keys generated locally — never sent to a server."
      actions={
        <>
          <Button size="sm" onClick={generate}>
            <RefreshCw className="h-4 w-4" /> Generate
          </Button>
          <CopyButton text={result} label="Copy" />
        </>
      }
    >
      <ToolPanel label="Character sets">
        <div className="flex flex-wrap gap-4 text-sm">
          {(
            [
              ["Uppercase", useUpper, setUseUpper],
              ["Lowercase", useLower, setUseLower],
              ["Numbers", useNumbers, setUseNumbers],
              ["Symbols", useSymbols, setUseSymbols],
            ] as const
          ).map(([label, checked, setter]) => (
            <label key={label} className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input type="checkbox" checked={checked} onChange={(e) => setter(e.target.checked)} className="accent-indigo-600" />
              {label}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2">
            <input type="checkbox" checked={apiKey} onChange={(e) => setApiKey(e.target.checked)} className="accent-indigo-600" />
            API key (64-char hex)
          </label>
        </div>
      </ToolPanel>
      {!apiKey && (
        <Input label="Length" type="number" min={8} max={128} value={length} onChange={(e) => setLength(Number(e.target.value))} className="max-w-xs" />
      )}
      <ToolPanel label="Generated secret">
        <pre className="tool-output break-all">{result || "Click Generate to create a secure credential."}</pre>
      </ToolPanel>
    </ToolShell>
  );
}
