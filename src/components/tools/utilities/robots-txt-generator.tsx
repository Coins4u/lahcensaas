"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";
import { Input } from "@/components/ui/Input";
import { CopyButton } from "../CopyButton";

export function RobotsTxtGenerator() {
  const [sitemap, setSitemap] = useState("https://example.com/sitemap.xml");
  const [disallow, setDisallow] = useState("/admin/\n/private/");
  const [allowAll, setAllowAll] = useState(true);

  const output = `User-agent: *
${allowAll ? "Allow: /" : ""}
${disallow
  .split("\n")
  .filter(Boolean)
  .map((p) => `Disallow: ${p.trim()}`)
  .join("\n")}
${sitemap ? `\nSitemap: ${sitemap}` : ""}`.trim();

  return (
    <ToolShell actions={<CopyButton text={output} />}>
      <label className="flex items-center gap-2 text-sm text-slate-400">
        <input type="checkbox" checked={allowAll} onChange={(e) => setAllowAll(e.target.checked)} className="accent-violet-600" />
        Allow all crawlers (Allow: /)
      </label>
      <Textarea label="Disallow paths (one per line)" value={disallow} onChange={(e) => setDisallow(e.target.value)} rows={4} />
      <Input label="Sitemap URL" value={sitemap} onChange={(e) => setSitemap(e.target.value)} />
      <ToolPanel label="robots.txt"><pre className="tool-output">{output}</pre></ToolPanel>
    </ToolShell>
  );
}
