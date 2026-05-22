"use client";

import { useState } from "react";
import { ToolShell, ToolPanel } from "../ToolShell";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CopyButton } from "../CopyButton";

export function SeoMetaGenerator() {
  const [title, setTitle] = useState("Lahcen Lahmidi's Toolbox — Dev Utilities");
  const [description, setDescription] = useState(
    "Personal browser utilities by a web developer in Morocco. Local-first SEO, JSON, and formatting tools."
  );
  const [url, setUrl] = useState("https://example.com");
  const [image, setImage] = useState("");

  const output = `<!-- Primary Meta Tags -->
<title>${title || "Page Title"}</title>
<meta name="title" content="${title || "Page Title"}" />
<meta name="description" content="${description || "Page description"}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${title || "Page Title"}" />
<meta property="og:description" content="${description || "Page description"}" />
${image ? `<meta property="og:image" content="${image}" />` : ""}

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="${url}" />
<meta name="twitter:title" content="${title || "Page Title"}" />
<meta name="twitter:description" content="${description || "Page description"}" />
${image ? `<meta name="twitter:image" content="${image}" />` : ""}`;

  return (
    <ToolShell
      hint="Generate production-ready SEO, Open Graph, and Twitter Card tags for any landing page."
      actions={<CopyButton text={output} label="Copy all tags" />}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Page title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input label="Canonical URL" value={url} onChange={(e) => setUrl(e.target.value)} />
        <div className="md:col-span-2">
          <Textarea label="Meta description" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
        </div>
        <Input label="Social image URL (optional)" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
      </div>
      <ToolPanel label="Generated HTML meta tags">
        <pre className="tool-output max-h-80 whitespace-pre-wrap text-xs">{output}</pre>
      </ToolPanel>
    </ToolShell>
  );
}
