import { SITE } from "@/lib/site";

const faqs = [
  {
    q: "Does my data leave my browser?",
    a: "The utilities process input locally. I don't upload your pasted text, JSON, or images for tool operations. Payment and email use standard providers as described in my Privacy Policy.",
  },
  {
    q: "What is an access tier?",
    a: "A one-time contribution that unlocks a set of tools for 30 days from when you redeem your code. No automatic renewals.",
  },
  {
    q: "How do I get my access code?",
    a: "After payment you'll receive a code by email. Enter it at the top of my toolbox to unlock your tier right away.",
  },
  {
    q: "Can I use this for client work?",
    a: "Yes — many freelancers do. Pick a tier that covers the utilities you need and read the Terms for acceptable use.",
  },
  {
    q: "I need an invoice before paying",
    a: "On the access page, tap Get tier and fill in your name and email. I'll send you an invoice with a secure payment link.",
  },
];

export function FAQSection() {
  return (
    <section className="border-t border-[var(--border)] py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">FAQ</h2>
          <p className="section-sub">Straight answers before you contribute.</p>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] open:border-violet-500/30 open:bg-[var(--surface-elevated)]"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-white after:float-right after:text-slate-500 after:content-['+'] open:after:content-['−']">
                {item.q}
              </summary>
              <div className="border-t border-[var(--border)] px-5 pb-4 pt-2 text-sm leading-relaxed text-slate-500">
                {item.a}
              </div>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-600">
          Still unsure?{" "}
          <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:underline">
            Email me
          </a>
        </p>
      </div>
    </section>
  );
}
