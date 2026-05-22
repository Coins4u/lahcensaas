import { LegalPage } from "@/components/legal/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="May 20, 2026">
      <h2>Digital access</h2>
      <p>
        I sell instant digital access to my browser-based toolbox. Delivery is immediate
        after payment and access code issuance.
      </p>

      <h2>All sales final after access</h2>
      <p>
        <strong>
          Because these are instant digital tools, all sales are final once you access the
          toolbox
        </strong>{" "}
        — including redeeming your code or using paid utilities. By redeeming, you confirm
        delivery is complete.
      </p>

      <h2>Before redemption</h2>
      <p>
        If you have not redeemed your code, contact me at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> within 14 days with your order
        reference. I review requests case by case.
      </p>

      <h2>Technical issues</h2>
      <p>
        If a verified issue blocks access after purchase, email me with your transaction
        ID and I will help restore access or offer an equivalent remedy.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> · {SITE.creator}, {SITE.location}
      </p>
    </LegalPage>
  );
}
