"use client";

import KhmFooter from "@/components/Footer";
import KhmBottomNav from "@/components/KhmBottomNav";
import KhmNavbar from "@/components/NavBar";



export default function Home() {
  return (
    <>
      <KhmNavbar />

      <main className="min-h-screen bg-[#0B0F14] text-white">
        {(() => {
          const { motion, useInView } = require("framer-motion");
          const {
            ShieldCheck,
            BadgeCheck,
            Leaf,
            HardHat,
            ClipboardCheck,
            HeartPulse,
            Eye,
            AlertTriangle,
            Scale,
            FileText,
            Download,
            ExternalLink,
            ChevronLeft,
          } = require("lucide-react");

          function MotionBlock({
            children,
            className = "",
            delay = 0,
          }: {
            children: any;
            className?: string;
            delay?: number;
          }) {
            const ref = React.useRef(null);
            const inView = useInView(ref, { once: true, margin: "-12% 0px" });

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: "easeOut", delay }}
                className={className}>
                {children}
              </motion.div>
            );
          }

          function Panel({
            children,
            className = "",
          }: {
            children: any;
            className?: string;
          }) {
            return (
              <div
                className={[
                  "rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
                  className,
                ].join(" ")}>
                {children}
              </div>
            );
          }

          function Pill({
            icon,
            label,
            href = "#",
          }: {
            icon: any;
            label: string;
            href?: string;
          }) {
            return (
              <a
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/80 transition hover:bg-white/7">
                <span className="text-[#C49A6C]">{icon}</span>
                {label}
              </a>
            );
          }

          function Badge({
            status,
            tone,
          }: {
            status: string;
            tone: "active" | "verified";
          }) {
            const dot = tone === "active" ? "bg-emerald-400" : "bg-emerald-400"; // both are green in the mock
            const label =
              tone === "active" ? status.toUpperCase() : status.toUpperCase();

            return (
              <div className="flex items-center gap-2">
                <span className={["h-2 w-2 rounded-full", dot].join(" ")} />
                <span className="text-[10px] font-semibold tracking-[0.18em] text-white/70">
                  {label}
                </span>
              </div>
            );
          }

          return (
            <>
              {/* TAB / SEO HEADERS */}
              {/* Copy this into your page file (Next.js App Router) above the component if you prefer:
            export const metadata = { title: "KHM Compliance | Compliance & Standards", description: "..." }
          For now, keeping it here as comments so you can copy quickly.
        */}
              {/*
          export const metadata = {
            title: "KHM Compliance | Compliance & Standards",
            description:
              "Regulatory alignment, safety philosophy, and ethical standards across KHM Minerals operations, including core compliance references and reporting access.",
          };
        */}

              {/* TOP BAR (matches mobile header feel) */}
            

              {/* HERO */}
              <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Generate + place: /public/images/compliance-hero.jpg */}
                  <div className="absolute inset-0 bg-black/55" />
                  <img
                    src="/compliance-hero.png"
                    alt=""
                    className="h-full w-full object-cover opacity-70"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/55 via-[#0B0F14]/65 to-[#0B0F14]" />
                </div>

                <div className="relative mx-auto max-w-6xl px-5 pt-12 pb-10">
                  <MotionBlock>
                    <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight">
                      Compliance & Standards
                    </h1>
                    <p className="mt-3 text-sm text-white/65">
                      Updated Sept 2023 <span className="mx-2">•</span> Ver.
                      4.1.0
                    </p>
                  </MotionBlock>
                </div>
              </section>

              {/* PANEL: Regulatory Alignment */}
              <section className="mx-auto max-w-6xl px-5 -mt-6 pb-10">
                <Panel className="relative overflow-hidden">
                  <div className="absolute inset-0">
                    {/* Optional: reuse /images/standards-blueprint.jpg */}
                    <img
                      src="/standards-blueprint.png"
                      alt=""
                      className="h-full w-full object-cover opacity-18"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A2B4B]/35 via-[#0B0F14]/40 to-[#0B0F14]/60" />
                  </div>

                  <div className="relative px-5 py-8">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/85">
                          REGULATORY ALIGNMENT
                        </div>
                      </div>
                      <Pill
                        icon={<BadgeCheck className="h-4 w-4" />}
                        label="ISO COMPLIANCE"
                      />
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        {
                          icon: <Leaf className="h-5 w-5" />,
                          title: "ISO 14001:2015",
                          sub: "Environmental Management",
                          status: <Badge status="Active" tone="active" />,
                        },
                        {
                          icon: <HardHat className="h-5 w-5" />,
                          title: "MSHA Standards",
                          sub: "Mine Safety & Health Admin",
                          status: <Badge status="Verified" tone="verified" />,
                        },
                        {
                          icon: <HeartPulse className="h-5 w-5" />,
                          title: "ISO 45001",
                          sub: "Occupational Health & Safety",
                          status: <Badge status="Active" tone="active" />,
                        },
                      ].map((row: any, idx: number) => (
                        <MotionBlock key={row.title} delay={0.06 * idx}>
                          <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B0F14]/60 text-[#C49A6C]">
                                {row.icon}
                              </div>
                              <div>
                                <h2 className="text-sm font-semibold leading-tight">
                                  {row.title}
                                </h2>
                                <p className="mt-1 text-xs text-white/60">
                                  {row.sub}
                                </p>
                              </div>
                            </div>

                            <div className="shrink-0">{row.status}</div>
                          </div>
                        </MotionBlock>
                      ))}
                    </div>
                  </div>
                </Panel>
              </section>

              {/* SAFETY PHILOSOPHY */}
              <section className="mx-auto max-w-6xl px-5 pb-10">
                <MotionBlock>
                  <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/85">
                    SAFETY PHILOSOPHY
                  </div>
                </MotionBlock>

                <div className="mt-4">
                  <Panel className="relative overflow-hidden bg-white">
                    {/* White card like mock */}
                    <div className="absolute inset-0 bg-white" />
                    {/* subtle corner accent */}
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[28px] bg-[#F5F5F5]" />

                    <div className="relative px-6 py-7 text-[#0B0F14]">
                      <MotionBlock>
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F5F5] text-[#C49A6C]">
                            <HeartPulse className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="text-xl font-semibold tracking-tight">
                              Zero Harm Initiative
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-[#0B0F14]/75">
                              Our operational core is built on the principle
                              that every employee should return home safely
                              every day. We maintain a proactive risk
                              identification culture across all sites.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">
                              <span className="inline-flex items-center rounded-lg border border-[#E6D3B1] bg-white px-4 py-2 text-[11px] font-semibold tracking-wide text-[#C49A6C]">
                                PROACTIVE MONITORING
                              </span>
                              <span className="inline-flex items-center rounded-lg border border-[#E6D3B1] bg-white px-4 py-2 text-[11px] font-semibold tracking-wide text-[#C49A6C]">
                                RISK MITIGATION
                              </span>
                            </div>
                          </div>
                        </div>
                      </MotionBlock>
                    </div>
                  </Panel>
                </div>
              </section>

              {/* ETHICAL STANDARDS */}
              <section className="mx-auto max-w-6xl px-5 pb-12">
                <MotionBlock>
                  <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/85">
                    ETHICAL STANDARDS
                  </div>
                </MotionBlock>

                <div className="mt-4 grid gap-3">
                  {[
                    {
                      icon: <Scale className="h-5 w-5" />,
                      title: "Corporate Governance",
                      sub: "Transparency and accountability.",
                      href: "#",
                    },
                    {
                      icon: <ClipboardCheck className="h-5 w-5" />,
                      title: "ESG Reporting",
                      sub: "Environmental impact disclosures.",
                      href: "#",
                    },
                  ].map((card: any, idx: number) => (
                    <MotionBlock key={card.title} delay={0.06 * idx}>
                      <a
                        href={card.href}
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white px-5 py-5 text-[#0B0F14] shadow-sm transition hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F5F5] text-[#C49A6C]">
                            {card.icon}
                          </div>
                          <div>
                            <h2 className="text-sm font-semibold">
                              {card.title}
                            </h2>
                            <p className="mt-1 text-xs text-[#0B0F14]/65">
                              {card.sub}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-[#0B0F14]/45 transition group-hover:text-[#0B0F14]/70">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </a>
                    </MotionBlock>
                  ))}
                </div>
              </section>

              {/* DOWNLOAD CTA */}
              <section className="mx-auto max-w-6xl px-5 pb-16">
                <MotionBlock>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[#C49A6C] px-6 py-5 text-base font-semibold text-[#0B0F14] shadow-sm transition hover:opacity-95"
                    aria-label="Download Compliance Report">
                    <Download className="h-5 w-5" />
                    Download Compliance Report
                  </a>

                  <div className="mt-6 text-center text-[10px] tracking-[0.22em] text-white/45">
                    KHM MINERALS REGULATORY OFFICE © 2023
                  </div>
                </MotionBlock>
              </section>
            </>
          );
        })()}
      </main>

      <KhmFooter />
      <KhmBottomNav />
    </>
  );
}
