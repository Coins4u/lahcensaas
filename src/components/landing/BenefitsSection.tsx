import { Gauge, Layers, Mail, RefreshCw } from "lucide-react";
import { SITE } from "@/lib/site";

const benefits = [
  {
    icon: Gauge,
    title: "Built for real workflows",
    body: "I use these tools on client sites, side projects, and content work — not as demos.",
  },
  {
    icon: Layers,
    title: "Tiered by contribution",
    body: "Start small as a supporter or unlock the full suite. You only pay for the depth you need.",
  },
  {
    icon: Mail,
    title: "Direct contact",
    body: `Email me at ${SITE.email}. I handle access codes and questions myself.`,
  },
  {
    icon: RefreshCw,
    title: "Always current",
    body: "No installers. Open the toolbox in a modern browser and you're on the latest version.",
  },
];

export function BenefitsSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Why people use my toolbox</h2>
          <p className="section-sub">
            A focused alternative to cluttered free sites and random browser extensions.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, body }) => (
            <li key={title} className="card-surface flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
