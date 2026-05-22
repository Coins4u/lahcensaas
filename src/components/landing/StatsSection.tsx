import { TOTAL_TOOLS } from "@/lib/tools-config";

const stats = [
  { value: String(TOTAL_TOOLS), label: "Utilities", detail: "In my daily toolbox" },
  { value: "8", label: "Access tiers", detail: "By contribution level" },
  { value: "0", label: "Server uploads", detail: "For tool processing" },
  { value: "30", label: "Days access", detail: "Per contribution" },
];

export function StatsSection() {
  return (
    <section className="border-b border-[var(--border)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">What you get</h2>
          <p className="mt-3 text-slate-500">Straight numbers — no marketing fluff.</p>
        </div>
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-surface text-center"
            >
              <dt className="text-sm font-medium text-slate-500">{s.label}</dt>
              <dd className="mt-2 text-4xl font-bold tabular-nums text-violet-400">{s.value}</dd>
              <dd className="mt-2 text-xs text-slate-600">{s.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
