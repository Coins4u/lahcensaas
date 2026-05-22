import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="May 20, 2026">
      <h2>1. Agreement</h2>
      <p>
        These Terms govern your use of {SITE.name}, operated by {SITE.creator} (
        {SITE.location}). By accessing this site or purchasing access, you agree to these
        Terms.
      </p>

      <h2>2. What I offer</h2>
      <p>
        I provide instant digital access to a browser-based utility toolbox. Access is
        granted through tiered 30-day contributions as described on my pricing page.
      </p>

      <h2>3. Access tiers &amp; codes</h2>
      <p>
        Paid access is a one-time contribution for 30 days from code redemption. After
        payment you receive a code by email to unlock utilities in the toolbox.
      </p>

      <h2>4. Acceptable use</h2>
      <p>
        You agree not to misuse the site, attempt unauthorized access, or use the tools
        for unlawful purposes. You are responsible for content you process.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The toolbox, branding, and code are my work. You receive a limited, non-transferable
        license to use the utilities during your active access period.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        Utilities are provided &quot;as is&quot; without warranties. I do not guarantee
        uninterrupted availability.
      </p>

      <h2>7. Contact</h2>
      <p>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.location}
      </p>
    </LegalPage>
  );
}
