"use client";

import { useMemo, useState } from "react";
import { ToolShell } from "../ToolShell";
import { Textarea } from "@/components/ui/Textarea";

function mdToHtml(md: string): string {
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");
  html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");
  html = html.replace(/`([^`]+)`/gim, "<code>$1</code>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
  html = html.replace(/^- (.*$)/gim, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/gim, "<ul>$1</ul>");
  html = html.replace(/\n\n/g, "</p><p>");
  return `<p>${html}</p>`;
}

export function MarkdownPreviewer() {
  const [md, setMd] = useState("# Hello UtilHub\n\nWrite **Markdown** here.\n\n- Item one\n- Item two\n\n[Link](https://utilhub.io)");
  const html = useMemo(() => mdToHtml(md), [md]);

  return (
    <ToolShell>
      <div className="grid gap-4 lg:grid-cols-2">
        <Textarea label="Markdown" value={md} onChange={(e) => setMd(e.target.value)} rows={14} />
        <div>
          <p className="mb-1.5 text-sm font-medium text-slate-700">HTML Preview</p>
          <div
            className="prose prose-sm max-w-none min-h-[280px] rounded-lg border border-slate-200 bg-white p-4 text-slate-800"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </ToolShell>
  );
}
