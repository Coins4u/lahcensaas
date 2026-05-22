"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "../CopyButton";
import { RefreshCw } from "lucide-react";

export function UuidGenerator() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>([]);

  const generate = () => {
    const list = Array.from({ length: Math.min(50, Math.max(1, count)) }, () =>
      crypto.randomUUID()
    );
    setUuids(list);
  };

  return (
    <ToolShell
      hint="Generate RFC 4122 v4 UUIDs locally — ideal for database keys and API testing."
      actions={
        <>
          <Button size="sm" onClick={generate}>
            <RefreshCw className="h-4 w-4" /> Generate
          </Button>
          <CopyButton text={uuids.join("\n")} label="Copy all" />
        </>
      }
    >
      <Input label="How many?" type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value))} className="max-w-xs" />
      <ToolPanel label="Generated UUIDs">
        <pre className="tool-output max-h-64 whitespace-pre-wrap">{uuids.length ? uuids.join("\n") : "Click Generate."}</pre>
      </ToolPanel>
    </ToolShell>
  );
}
