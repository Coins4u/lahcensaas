"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Input } from "@/components/ui/Input";
import { CopyButton } from "../CopyButton";

export function SitemapGenerator() {
  const [urls, setUrls] = useState("https://example.com/\nhttps://example.com/about\nhttps://example.com/pricing");
  const [priority, setPriority] = useState("0.8");

  const lines = urls.split("\n").map((u) => u.trim()).filter(Boolean);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lines
  .map(
    (loc) => `  <url>
    <loc>${loc.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</loc>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return (
    <ToolShell actions={<CopyButton text={xml} label="Copy XML" />}>
      <Textarea label="URLs (one per line)" value={urls} onChange={(e) => setUrls(e.target.value)} rows={8} />
      <Input label="Default priority (0.0–1.0)" value={priority} onChange={(e) => setPriority(e.target.value)} className="max-w-xs" />
      <ToolPanel label="sitemap.xml"><pre className="tool-output max-h-80 text-xs whitespace-pre-wrap">{xml}</pre></ToolPanel>
    </ToolShell>
  );
}
