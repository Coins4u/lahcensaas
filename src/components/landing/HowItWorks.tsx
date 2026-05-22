import { CreditCard, KeyRound, Wrench } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "Pick an access tier",
    description:
      "Choose a tier on my pricing page. Each is a one-time contribution for 30 days of access — no recurring billing.",
  },
  {
    icon: KeyRound,
    title: "Get your code by email",
    description:
      "After payment I send you a redemption code. Paste it at the top of the toolbox to unlock your tier instantly.",
  },
  {
    icon: Wrench,
    title: "Use tools in the browser",
    description:
      "Everything runs client-side. Open a utility, do your work, copy the result — nothing leaves your machine.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">How access works</h2>
          <p className="section-sub mx-auto max-w-2xl">
            Simple flow I use myself — contribute once, redeem, build.
          </p>
        </div>
        <ol className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="card-surface relative">
              <span className="absolute -top-3 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <step.icon className="h-8 w-8 text-violet-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
