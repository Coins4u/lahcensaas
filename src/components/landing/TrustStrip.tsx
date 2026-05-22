import { Lock, ServerOff, Heart, FileCheck } from "lucide-react";

const items = [
  { icon: Lock, label: "Local-first", sub: "Tools run in your browser" },
  { icon: ServerOff, label: "No uploads", sub: "Your input stays on-device" },
  { icon: Heart, label: "Indie project", sub: "Built & maintained by me" },
  { icon: FileCheck, label: "Clear terms", sub: "Privacy & refund policy" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map(({ icon: Icon, label, sub }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
