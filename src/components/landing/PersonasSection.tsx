import { Code2, PenLine, Laptop } from "lucide-react";

const personas = [
  {
    icon: Code2,
    title: "If you write code",
    points: [
      "Format JSON from APIs and logs",
      "Test regex before shipping",
      "Encode URLs and Base64 in one place",
    ],
  },
  {
    icon: PenLine,
    title: "If you publish content",
    points: [
      "SEO meta tags without a plugin maze",
      "Word counts and reading time",
      "Markdown preview before go-live",
    ],
  },
  {
    icon: Laptop,
    title: "If you freelance",
    points: [
      "One toolbox for the whole project",
      "Clear 30-day access per contribution",
      "Invoice link by email when you need it",
    ],
  },
];

export function PersonasSection() {
  return (
    <section className="border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">Who this is for</h2>
          <p className="section-sub">Same people I had in mind when I built each utility.</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {personas.map(({ icon: Icon, title, points }) => (
            <div key={title} className="card-surface">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
