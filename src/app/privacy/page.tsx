import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="May 20, 2026">
      <h2>1. Overview</h2>
      <p>
        I respect your privacy. My utilities run primarily in your browser — I do not
        upload your tool inputs to my servers for processing.
      </p>

      <h2>2. Data I collect</h2>
      <ul>
        <li>
          <strong>Access state:</strong> Your tier may be stored in your browser
          (localStorage).
        </li>
        <li>
          <strong>Purchases:</strong> Name and email when you request an invoice or pay
          via my checkout provider.
        </li>
        <li>
          <strong>Email:</strong> I use email to send invoices, access codes, and replies
          to your messages.
        </li>
      </ul>

      <h2>3. Local processing</h2>
      <p>
        Text, JSON, and images you use in tools are processed on your device unless stated
        otherwise.
      </p>

      <h2>4. Contact</h2>
      <p>
        Questions: <a href="/contact">contact me</a> or{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </LegalPage>
  );
}
