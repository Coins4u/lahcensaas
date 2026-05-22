"use client";

import { useState } from "react";
import { ToolShell } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function TimestampConverter() {
  const [epoch, setEpoch] = useState(String(Math.floor(Date.now() / 1000)));
  const [iso, setIso] = useState(new Date().toISOString());
  const [human, setHuman] = useState(new Date().toLocaleString());

  const fromEpoch = () => {
    const n = Number(epoch);
    if (Number.isNaN(n)) return;
    const ms = epoch.length > 10 ? n : n * 1000;
    const d = new Date(ms);
    setIso(d.toISOString());
    setHuman(d.toLocaleString());
  };

  const fromIso = () => {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return;
    setEpoch(String(Math.floor(d.getTime() / 1000)));
    setHuman(d.toLocaleString());
  };

  const now = () => {
    const t = Math.floor(Date.now() / 1000);
    const d = new Date(t * 1000);
    setEpoch(String(t));
    setIso(d.toISOString());
    setHuman(d.toLocaleString());
  };

  return (
    <ToolShell actions={<><Button size="sm" onClick={fromEpoch}>Epoch → Date</Button><Button size="sm" variant="outline" onClick={fromIso}>ISO → Epoch</Button><Button size="sm" variant="secondary" onClick={now}>Now</Button></>}>
      <Input label="Unix timestamp (seconds or ms)" value={epoch} onChange={(e) => setEpoch(e.target.value)} className="font-mono" />
      <Input label="ISO 8601" value={iso} onChange={(e) => setIso(e.target.value)} className="font-mono" />
      <Input label="Local display" value={human} readOnly />
    </ToolShell>
  );
}
