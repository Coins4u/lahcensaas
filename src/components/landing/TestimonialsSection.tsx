import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Feels like a developer actually built this — clean workspace, no ads, tools that work.",
    role: "Frontend dev",
    org: "Remote contractor",
  },
  {
    text: "I bought the Builder tier for JSON and SEO meta work. Worth it for the time saved on client sites.",
    role: "Freelancer",
    org: "Morocco / EU clients",
  },
  {
    text: "Local-first processing was the selling point for me. I know my paste never hits a server.",
    role: "Indie maker",
    org: "Side projects",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-heading">What users say</h2>
          <p className="mt-3 text-sm text-slate-600">
            Feedback from people who supported the project. Individual experience may vary.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <li key={q.role} className="card-surface relative">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-violet-900/50" />
              <p className="relative text-sm leading-relaxed text-slate-400">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-6 border-t border-[var(--border)] pt-4">
                <p className="text-sm font-semibold text-white">{q.role}</p>
                <p className="text-xs text-slate-600">{q.org}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
