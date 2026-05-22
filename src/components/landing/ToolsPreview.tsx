import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TOOLS, TOTAL_TOOLS } from "@/lib/tools-config";
import { getToolIcon } from "@/lib/tool-icons";
import { Button } from "@/components/ui/Button";

const CATEGORY_ORDER = ["SEO", "Developer", "Media", "Content", "Security", "Design"];

export function ToolsPreview() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    tools: TOOLS.filter((t) => t.category === cat),
  })).filter((g) => g.tools.length > 0);

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="section-heading">My {TOTAL_TOOLS} utilities</h2>
            <p className="section-sub mt-0">
              Each one solves a problem I hit weekly. Unlock more with higher access tiers.
            </p>
          </div>
          <Link href="/tools">
            <Button variant="outline">
              Open toolbox
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 space-y-10">
          {byCategory.map(({ category, tools }) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-violet-400">
                {category}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => {
                  const Icon = getToolIcon(tool.slug);
                  return (
                    <li
                      key={tool.slug}
                      className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 transition-colors hover:border-violet-500/40"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-white">{tool.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                          {tool.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
