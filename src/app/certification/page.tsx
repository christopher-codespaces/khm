import Link from "next/link";

export const metadata = {
  title: "Certifications & Compliance | KHM Minerals",
  description:
    "Certifications and compliance principles governing KHM Minerals operations across regulated industrial and logistics environments.",
};

export default function CertificationPage() {
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
            Certifications and Compliance
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            KHM Minerals operates within regulated industrial and logistics
            environments and is committed to conducting its activities in
            accordance with applicable legal, regulatory, and industry
            requirements.
          </p>

          <section className="mt-8 space-y-6 text-sm leading-relaxed text-white/70">
            <div>
              <h2 className="font-semibold text-white">1. Regulatory Compliance</h2>
              <p className="mt-2">
                The Company complies with relevant South African laws and
                regulations governing mining, mineral handling, environmental
                management, occupational health and safety, and export
                activities. Compliance obligations may include permitting,
                inspections, reporting, and adherence to operational standards
                imposed by regulatory authorities.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">2. Industry Standards</h2>
              <p className="mt-2">
                Where applicable, KHM Minerals aligns its internal processes
                with recognised industry standards and best practices relating
                to:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-2">
                <li>Safety and risk management</li>
                <li>Environmental responsibility</li>
                <li>Operational control and quality assurance</li>
                <li>Export and logistics compliance</li>
              </ul>
              <p className="mt-2">
                Alignment with such standards does not necessarily imply formal
                certification unless expressly stated.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">3. Certifications</h2>
              <p className="mt-2">
                KHM Minerals may hold, pursue, or operate in accordance with
                certain certifications, approvals, or registrations relevant to
                its operations. Any certifications formally held by the Company
                will be disclosed upon request or specified in contractual
                documentation where required.
              </p>
              <p className="mt-2">
                No certification, accreditation, or standard should be inferred
                unless explicitly confirmed in writing by the Company.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">
                4. Third-Party Operators and Partners
              </h2>
              <p className="mt-2">
                Certain operational activities may involve third-party service
                providers, logistics partners, or port operators who maintain
                their own certifications, licences, or regulatory approvals.
                Such certifications apply to those parties’ operations and do
                not automatically extend to KHM Minerals unless contractually
                stated.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">5. Continuous Improvement</h2>
              <p className="mt-2">
                KHM Minerals is committed to ongoing review and improvement of
                its operational, safety, and compliance practices in line with
                regulatory developments and industry expectations.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-white">6. Verification</h2>
              <p className="mt-2">
                Verification of certifications, licences, or compliance status
                may be provided where legally required or contractually agreed.
                Public statements regarding compliance should not be interpreted
                as guarantees beyond applicable legal obligations.
              </p>
            </div>
          </section>

          <div className="mt-8 border-t border-white/10 pt-4 text-xs text-white/45">
            For enquiries relating to compliance documentation, please use the{" "}
            <Link href="/contact" className="text-white/70 hover:text-white">
              Contact
            </Link>{" "}
            page.
          </div>
        </div>
      </div>
    </main>
  );
}


