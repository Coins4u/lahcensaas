import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = { title: "DMCA Policy" };

export default function DmcaPage() {
  return (
    <LegalPage title="DMCA & Copyright Policy" lastUpdated="May 20, 2026">
      <h2>1. Overview</h2>
      <p>
        I respect intellectual property rights. This policy explains how copyright owners can
        report alleged infringement related to {SITE.name}, operated by {SITE.creator} (
        {SITE.location}).
      </p>

      <h2>2. What this site contains</h2>
      <p>
        The toolbox is original software I built. User-generated content processed in tools
        (text, JSON, images) stays in the user&apos;s browser and is not stored by me for
        tool operation. I do not host third-party media submitted through utilities.
      </p>

      <h2>3. Filing a DMCA notice</h2>
      <p>
        If you believe content on this site infringes your copyright, send a written notice to:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>
          <strong>Subject line:</strong> DMCA Notice — {SITE.name}
        </li>
      </ul>
      <p>Your notice should include:</p>
      <ol>
        <li>Identification of the copyrighted work you claim is infringed</li>
        <li>Identification of the material you claim is infringing (URL or description)</li>
        <li>Your contact information (name, address, phone, email)</li>
        <li>
          A statement that you have a good-faith belief the use is not authorized by the
          copyright owner, its agent, or the law
        </li>
        <li>
          A statement, under penalty of perjury, that the information in the notice is accurate
          and that you are the copyright owner or authorized to act on their behalf
        </li>
        <li>Your physical or electronic signature</li>
      </ol>

      <h2>4. Counter-notification</h2>
      <p>
        If you believe material was removed in error, you may submit a counter-notification to
        the same email with the information required under applicable law, including your
        consent to jurisdiction of the courts in your district.
      </p>

      <h2>5. Repeat infringers</h2>
      <p>
        I may terminate access for users who are repeat infringers where applicable and
        technically feasible.
      </p>

      <h2>6. Response time</h2>
      <p>
        I review valid notices promptly and aim to respond within a reasonable timeframe,
        typically within 5–10 business days.
      </p>

      <h2>7. Contact</h2>
      <p>
        DMCA agent: {SITE.creator} ·{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.location}
      </p>
    </LegalPage>
  );
}
