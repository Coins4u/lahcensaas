"use client";

import { useMemo, useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { CopyButton } from "../CopyButton";

export function UtmBuilder() {
  const [url, setUrl] = useState("https://example.com/landing");
  const [source, setSource] = useState("newsletter");
  const [medium, setMedium] = useState("email");
  const [campaign, setCampaign] = useState("spring_launch");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");

  const built = useMemo(() => {
    try {
      const u = new URL(url);
      if (source) u.searchParams.set("utm_source", source);
      if (medium) u.searchParams.set("utm_medium", medium);
      if (campaign) u.searchParams.set("utm_campaign", campaign);
      if (term) u.searchParams.set("utm_term", term);
      if (content) u.searchParams.set("utm_content", content);
      return u.toString();
    } catch {
      return "Enter a valid base URL";
    }
  }, [url, source, medium, campaign, term, content]);

  return (
    <ToolShell hint="Build GA4-compatible UTM links for campaigns without spreadsheet formulas." actions={<CopyButton text={built} label="Copy URL" />}>
      <Input label="Base URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="utm_source" value={source} onChange={(e) => setSource(e.target.value)} />
        <Input label="utm_medium" value={medium} onChange={(e) => setMedium(e.target.value)} />
        <Input label="utm_campaign" value={campaign} onChange={(e) => setCampaign(e.target.value)} />
        <Input label="utm_term (optional)" value={term} onChange={(e) => setTerm(e.target.value)} />
        <Input label="utm_content (optional)" value={content} onChange={(e) => setContent(e.target.value)} className="sm:col-span-2" />
      </div>
      <ToolPanel label="Tracked URL"><pre className="tool-output break-all text-xs">{built}</pre></ToolPanel>
    </ToolShell>
  );
}
