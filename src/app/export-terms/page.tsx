import Link from "next/link";

export const metadata = {
  title: "Export Terms & Conditions | KHM Minerals",
  description:
    "Export terms and conditions governing mineral exports, logistics, compliance, and international trade engagements with KHM Minerals.",
};

export default function ExportTermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,rgba(196,154,108,0.18)_0%,rgba(11,15,20,0.92)_60%,rgba(11,15,20,1)_100%)]" />

      <div className="relative mx-auto max-w-4xl px-6 py-20">
        {/* back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.06]">
          ← Return to Home
        </Link>

        {/* card */}
        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          <div className="text-[11px] tracking-[0.28em] text-[#C49A6C]/80">
            LEGAL
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Export Terms and Conditions
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            These Export Terms and Conditions (“Export Terms”) apply to all
            export-related engagements, enquiries, and transactions involving
            KHM Minerals (“the Company”, “we”, “us”, or “our”). They outline the
            general principles governing the export of mineral resources and
            related logistics services.
          </p>

          <section className="mt-8 space-y-6 text-sm leading-relaxed text-white/70">
            <div>
              <h2 className="font-semibold text-white">
                1. Scope of Export Activities
              </h2>
              <p className="mt-2">
                KHM Minerals is engaged in the sourcing, handling, and export of
                mineral resources in accordance with applicable laws,
                regulations, and international trade standards. Export
                arrangements may involve third-party logistics providers, port
                operators, shipping agents, and regulatory authorities.
              </p>
              <p className="mt-2">
                All export transactions are subject to availability, regulatory
                approval, and contractual agreement.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">
                2. Regulatory Compliance
              </h2>
              <p className="mt-2">
                All exports are conducted in compliance with applicable South
                African laws, international trade regulations, customs
                requirements, and port authority rules. This may include export
                permits, customs declarations, inspections, health and safety
                requirements, and sanctions compliance.
              </p>
              <p className="mt-2">
                The Company reserves the right to delay, suspend, or cancel
                exports where compliance requirements cannot be met.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">3. Documentation</h2>
              <p className="mt-2">
                Export documentation may include commercial invoices, packing
                lists, certificates of origin, export permits, customs
                documentation, and shipping or transport documentation.
              </p>
              <p className="mt-2">
                Documentation requirements may vary depending on destination,
                cargo type, and regulatory conditions.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">
                4. Risk and Responsibility
              </h2>
              <p className="mt-2">
                Unless otherwise agreed in writing, risk associated with exported
                goods transfers in accordance with the applicable commercial
                terms agreed between the parties. Specific delivery terms and
                responsibilities are defined in individual agreements.
              </p>
              <p className="mt-2">
                No shipment is deemed confirmed until formally agreed and
                documented.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">
                5. Logistics and Delivery
              </h2>
              <p className="mt-2">
                Export logistics may involve multiple parties and stages,
                including inland transport, port handling, shipping, and
                destination clearance. Delivery timelines are indicative only
                and may be affected by factors beyond the Company’s control.
              </p>
              <p className="mt-2">
                KHM Minerals does not guarantee delivery timelines unless
                expressly agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">
                6. Pricing and Commercial Terms
              </h2>
              <p className="mt-2">
                Pricing, quantities, payment terms, and delivery arrangements
                are determined on a transaction-by-transaction basis and
                confirmed through formal agreements or written confirmations.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">7. Force Majeure</h2>
              <p className="mt-2">
                KHM Minerals shall not be liable for failure or delay caused by
                events beyond its reasonable control, including natural
                disasters, strikes, port disruptions, regulatory changes, or
                global supply chain interruptions.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">
                8. Limitation of Liability
              </h2>
              <p className="mt-2">
                To the extent permitted by law, KHM Minerals shall not be liable
                for indirect, consequential, or incidental losses arising from
                export delays, regulatory actions, or third-party service
                failures.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">9. Governing Law</h2>
              <p className="mt-2">
                These Export Terms are governed by the laws of the Republic of
                South Africa, unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">10. Amendments</h2>
              <p className="mt-2">
                KHM Minerals reserves the right to update or amend these Export
                Terms at any time. The most current version will be made
                available through official communication channels or the
                Company’s website.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

