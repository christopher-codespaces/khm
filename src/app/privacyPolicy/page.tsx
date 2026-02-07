"use client";

import Navbar from "@/components/NavBar";
import KhmFooter from "@/components/Footer";
import KhmBottomNav from "@/components/KhmBottomNav";
import Head from "next/head";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold tracking-tight text-white">
      {children}
    </h2>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-relaxed text-white/75">{children}</p>;
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>KHM - Privacy Policy</title>
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F14] text-white">
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="relative">
              {/* subtle background wash */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A2B4B]/20 via-[#0B0F14]/55 to-[#0B0F14]/85" />

              <div className="relative px-6 py-10">
                <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/80">
                  LEGAL
                </div>

                <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                  Privacy Policy
                </h1>

                <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/70">
                  KHM Minerals (“we”, “us”, or “our”) is committed to protecting
                  the privacy and personal information of visitors, clients,
                  partners, and stakeholders who interact with our website and
                  services. This Privacy Policy explains how we collect, use,
                  store, and protect personal information in accordance with
                  applicable data protection laws, including the Protection of
                  Personal Information Act, 2013 (POPIA) of South Africa.
                </p>

                <div className="mt-8 space-y-8">
                  {/* 1 */}
                  <div className="space-y-3">
                    <SectionTitle>1. Information We Collect</SectionTitle>
                    <BodyText>
                      We may collect and process the following types of personal
                      information:
                    </BodyText>
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-white/75 space-y-2">
                      <li>
                        Contact information, including name, email address,
                        phone number, and company name, when you contact us via
                        forms, email, or direct correspondence
                      </li>
                      <li>
                        Business-related information provided during enquiries,
                        partnership discussions, or service engagements
                      </li>
                      <li>
                        Technical information such as IP address, browser type,
                        and basic usage data when you visit our website
                      </li>
                    </ul>
                    <BodyText>
                      We do not intentionally collect sensitive personal
                      information unless it is lawfully required and voluntarily
                      provided.
                    </BodyText>
                  </div>

                  {/* 2 */}
                  <div className="space-y-3">
                    <SectionTitle>2. How We Use Your Information</SectionTitle>
                    <BodyText>
                      Personal information is collected and used for legitimate
                      business purposes, including:
                    </BodyText>
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-white/75 space-y-2">
                      <li>Responding to enquiries and requests</li>
                      <li>Communicating with clients, partners, and service providers</li>
                      <li>Assessing and managing business relationships</li>
                      <li>Ensuring operational, legal, and regulatory compliance</li>
                      <li>Improving website functionality and user experience</li>
                    </ul>
                    <BodyText>
                      We do not sell, rent, or trade personal information to
                      third parties.
                    </BodyText>
                  </div>

                  {/* 3 */}
                  <div className="space-y-3">
                    <SectionTitle>3. Legal Basis for Processing</SectionTitle>
                    <BodyText>
                      We process personal information on one or more of the
                      following lawful bases:
                    </BodyText>
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-white/75 space-y-2">
                      <li>Consent, where voluntarily provided</li>
                      <li>Performance of a contract or pre-contractual steps</li>
                      <li>Compliance with legal or regulatory obligations</li>
                      <li>
                        Legitimate business interests, provided such interests
                        do not override your rights
                      </li>
                    </ul>
                  </div>

                  {/* 4 */}
                  <div className="space-y-3">
                    <SectionTitle>4. Sharing of Information</SectionTitle>
                    <BodyText>
                      Personal information may be shared only where necessary
                      and appropriate, including with:
                    </BodyText>
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-white/75 space-y-2">
                      <li>
                        Professional advisors, service providers, or logistics
                        partners involved in our operations
                      </li>
                      <li>Regulatory authorities where required by law</li>
                      <li>
                        Technology service providers who support our website or
                        communication systems
                      </li>
                    </ul>
                    <BodyText>
                      All third parties are required to maintain appropriate
                      confidentiality and data protection standards.
                    </BodyText>
                  </div>

                  {/* 5 */}
                  <div className="space-y-3">
                    <SectionTitle>5. Data Storage and Security</SectionTitle>
                    <BodyText>
                      We take reasonable technical and organisational measures to
                      protect personal information against loss, unauthorised
                      access, misuse, or disclosure. Information is retained
                      only for as long as necessary to fulfil the purposes
                      outlined in this policy or to comply with legal
                      requirements.
                    </BodyText>
                  </div>

                  {/* 6 */}
                  <div className="space-y-3">
                    <SectionTitle>6. International Data Transfers</SectionTitle>
                    <BodyText>
                      Where personal information is transferred outside South
                      Africa, we ensure that appropriate safeguards are in place
                      and that such transfers comply with applicable data
                      protection laws.
                    </BodyText>
                  </div>

                  {/* 7 */}
                  <div className="space-y-3">
                    <SectionTitle>7. Your Rights</SectionTitle>
                    <BodyText>You have the right to:</BodyText>
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-white/75 space-y-2">
                      <li>Request access to your personal information</li>
                      <li>
                        Request correction or deletion of inaccurate or outdated
                        information
                      </li>
                      <li>Object to or restrict certain types of processing</li>
                      <li>
                        Withdraw consent where processing is based on consent
                      </li>
                    </ul>
                    <BodyText>
                      Requests can be made using the contact details provided on
                      our Contact page.
                    </BodyText>
                  </div>

                  {/* 8 */}
                  <div className="space-y-3">
                    <SectionTitle>8. Cookies and Website Use</SectionTitle>
                    <BodyText>
                      Our website may use basic cookies or similar technologies
                      to support functionality and performance. These do not
                      collect unnecessary personal information. You may adjust
                      your browser settings to disable cookies if you prefer.
                    </BodyText>
                  </div>

                  {/* 9 */}
                  <div className="space-y-3">
                    <SectionTitle>9. Changes to This Policy</SectionTitle>
                    <BodyText>
                      We may update this Privacy Policy from time to time to
                      reflect operational, legal, or regulatory changes. The
                      latest version will always be published on our website.
                    </BodyText>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-5 text-xs text-white/50">
                  © {new Date().getFullYear()} KHM MINERALS (PTY) LTD.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <KhmFooter />
      <KhmBottomNav />
    </>
  );
}

