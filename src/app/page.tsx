"use client";

import Navbar from "../components/NavBar";
import KhmFooter from "../components/Footer";
import KhmBottomNav from "../components/KhmBottomNav";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B0F14] text-white">
        {(() => {
          const { motion, useInView } = require("framer-motion");
          const {
            Pickaxe,
            Factory,
            Truck,
            Ship,
            ShieldCheck,
            HardHat,
            Globe,
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
const ref = useRef(null);
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

          // Panel shell = what was missing in your highlights
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

          function StandardCard({
            title,
            children,
          }: {
            title: string;
            children: React.ReactNode;
          }) {
            return (
              <div className="rounded-2xl border border-white/10 bg-[#0B0F14]/55 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl border border-[#C49A6C]/35 bg-white/5" />
                  <h3 className="text-[12px] font-semibold tracking-[0.18em] text-[#C49A6C]">
                    {title.toUpperCase()}
                  </h3>
                </div>
          
                <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc pl-5">
                  {children}
                </ul>
              </div>
            );
          }

          return (
            <>
              {/* HERO */}
              <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-black/55" />
                  <img
                    src="/home-hero.png"
                    alt="Mineral operations and heavy equipment in the field"
                    className="h-full w-full object-cover opacity-80"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/70 via-[#0B0F14]/55 to-[#0B0F14]" />
                </div>

                <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.28em] text-white/70">
                    GLOBAL OPERATIONS
                  </div>

                  <div className="mt-6 max-w-xl">
                    <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight">
                      Strength from the ground.
                      <span className="block text-[#C49A6C]">
                        Precision to the world.
                      </span>
                    </h1>

                    <p className="mt-4 text-sm leading-relaxed text-white/75">
                      KHM Minerals operates across mineral extraction,
                      processing, and export logistics, supporting global supply
                      chains through disciplined operations and regulatory
                      alignment.
                    </p>

                    <div className="mt-6">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#C49A6C] px-5 py-3 text-sm font-medium text-[#0B0F14] shadow-sm transition hover:opacity-95">
                        REQUEST QUOTE <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* spacing between hero and first panel (matches your red highlight separation) */}
              <div className="mx-auto max-w-6xl px-5">
                <div className="h-8" />
              </div>

              {/* PANEL 1: Integrated Value Chain (this was missed) */}
              <section className="mx-auto max-w-6xl px-5">
                <Panel className="overflow-hidden">
                  {/* subtle panel background */}
                  <div className="relative">
                    <div className="absolute inset-0">
                      <img
                        src="/panel-texture.png"
                        alt=""
                        className="h-full w-full object-cover opacity-35"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/40 via-[#0B0F14]/55 to-[#0B0F14]/70" />
                    </div>

                    <div className="relative px-5 py-10">
                      <MotionBlock>
                        <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/80">
                          OPERATIONAL REALITY
                        </div>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                          Integrated Value Chain
                        </h2>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                          Focused on physical infrastructure for extraction and
                          systematic process control, ensuring continuity from
                          source through processing to delivery.
                        </p>
                      </MotionBlock>

                      <div className="mt-8 grid gap-3">
                        {[
                          {
                            icon: <Pickaxe className="h-5 w-5" />,
                            title: "Mining",
                            sub: "Mineral extraction",
                          },
                          {
                            icon: <Factory className="h-5 w-5" />,
                            title: "Processing",
                            sub: "Material refining",
                          },
                          {
                            icon: <Truck className="h-5 w-5" />,
                            title: "Logistics",
                            sub: "Transport management",
                          },
                          {
                            icon: <Ship className="h-5 w-5" />,
                            title: "Delivery",
                            sub: "Global distribution",
                          },
                        ].map((item: any, idx: number) => (
                          <MotionBlock key={item.title} delay={0.06 * idx}>
                            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2B4B]/50 text-[#C49A6C]">
                                {item.icon}
                              </div>
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-xs text-white/60">
                                  {item.sub}
                                </div>
                              </div>
                            </div>
                          </MotionBlock>
                        ))}
                      </div>
                    </div>
                  </div>
                </Panel>
              </section>

              {/* gap between panels */}
              <div className="mx-auto max-w-6xl px-5">
                <div className="h-8" />
              </div>

              {/* PANEL 2: Strategic Partners (this was missed as a shell) */}
              <section className="mx-auto max-w-6xl px-5">
                <Panel className="overflow-hidden">
                  <div className="relative">
                    <div className="absolute inset-0">
                      <img
                        src="/partners-grid.png"
                        alt=""
                        className="h-full w-full object-cover opacity-55"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/40 via-[#0A2B4B]/40 to-[#0B0F14]/70" />
                    </div>

                    <div className="relative px-5 py-10">
                      <MotionBlock>
                        <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/80">
                          NETWORK
                        </div>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                          Strategic Partners
                        </h2>
                        <div className="mt-1 text-[10px] tracking-[0.22em] text-white/55">
                          ALIGNMENT PARTNERS
                        </div>
                      </MotionBlock>

                      <div className="mt-8 grid gap-3">
                        <MotionBlock delay={0.05}>
                          <div className="rounded-2xl border border-white/10 bg-[#0B0F14]/55 p-4">
                            <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#C49A6C]">
                                <span className="text-sm font-semibold">V</span>
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-sm font-semibold">
                                  Vuyox Resources
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-white/70">
                                  Strategic marketing and processing partner
                                  supporting market positioning, commercial
                                  clarity, and how processing capability is
                                  presented to the market.
                                </p>
                              </div>
                            </div>
                          </div>
                        </MotionBlock>

                        <MotionBlock delay={0.12}>
                          <div className="rounded-2xl border border-white/10 bg-[#0B0F14]/55 p-4">
                            <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#C49A6C]">
                                <span className="text-sm font-semibold">
                                  GGA
                                </span>
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-sm font-semibold">
                                  Global Group Agencies
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-white/70">
                                  Cross-border logistics and trade facilitation
                                  network with strong international presence,
                                  supporting export routing, corridor
                                  coordination, and partner access across
                                  regions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </MotionBlock>
                      </div>
                    </div>
                  </div>
                </Panel>
              </section>

                {/* gap between panels */}
              <div className="mx-auto max-w-6xl px-5">
                <div className="h-8" />
              </div>

              {/* PANEL: Trade & Port Network (GGA Detail) */}
              <section className="mx-auto max-w-6xl px-5">
                <Panel className="overflow-hidden">
                  <div className="relative">
                    {/* Background texture */}
                    <div className="absolute inset-0">
                      <img
                        src="/partners-grid.png"
                        alt=""
                        className="h-full w-full object-cover opacity-40"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/55 via-[#0B0F14]/65 to-[#0B0F14]/85" />
                    </div>
              
                    <div className="relative px-6 py-10">
                      <MotionBlock>
                        {/* Section label */}
                        <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/80">
                          TRADE & PORT NETWORK
                        </div>
              
                        {/* Heading */}
                        <div className="mt-4 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C49A6C]/40 bg-white/5 text-[#C49A6C] text-sm font-semibold">
                            GGA
                          </div>
                          <h2 className="text-xl font-semibold tracking-tight">
                            Global Group Agencies
                          </h2>
                        </div>
                      </MotionBlock>
              
                      <div className="mt-6 max-w-3xl space-y-4">
                        <MotionBlock delay={0.05}>
                          <p className="text-sm leading-relaxed text-white/75">
                            Global Group Agencies (GGA) is a long-established trade and
                            port-side partner with a strong operational footprint in Richards
                            Bay, South Africa, a key bulk-commodity export gateway.
                          </p>
                        </MotionBlock>
              
                        <MotionBlock delay={0.1}>
                          <p className="text-sm leading-relaxed text-white/70">
                            The partnership with GGA strengthens KHM Minerals’ ability to
                            operate within complex port environments by providing continuity
                            between on-site port activity, shipping stakeholders, and
                            international trade processes. GGA’s proximity to port
                            infrastructure and familiarity with high-volume export conditions
                            supports reliable coordination at critical handover points within
                            the mineral export lifecycle.
                          </p>
                        </MotionBlock>
              
                        <MotionBlock delay={0.15}>
                          <p className="text-sm leading-relaxed text-white/70">
                            Beyond local presence, GGA operates within broader international
                            trade networks, enabling alignment between regional port
                            operations and cross-border commercial requirements. This
                            relationship enhances KHM Minerals’ export readiness by
                            reinforcing procedural discipline, regulatory awareness, and
                            practical execution in port-centric trade environments.
                          </p>
                        </MotionBlock>
                      </div>
                    </div>
                  </div>
                </Panel>
              </section>

              <div className="mx-auto max-w-6xl px-5">
                <div className="h-8" />
              </div>

              {/* PANEL: Trade & Port Agency Standards */}
              <section className="mx-auto max-w-6xl px-5">
                <Panel className="overflow-hidden">
                  <div className="relative">
                    {/* Background texture */}
                    <div className="absolute inset-0">
                      <img
                        src="/partners-grid.png"
                        alt=""
                        className="h-full w-full object-cover opacity-35"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14]/55 via-[#0B0F14]/70 to-[#0B0F14]/85" />
                    </div>
              
                    <div className="relative px-6 py-10">
                      <MotionBlock>
                        <h2 className="text-xl font-semibold tracking-tight text-[#C49A6C]">
                          Trade &amp; Port Agency Standards
                        </h2>
              
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70">
                          Global Group Agencies operates within structured port, trade, and
                          regulatory frameworks to support compliant vessel operations, cargo
                          clearance, and export coordination.
                        </p>
                      </MotionBlock>
              
                      <div className="mt-7 grid gap-4 md:grid-cols-2">
                        <MotionBlock delay={0.05}>
                          <StandardCard title="Port &amp; Ships Agency">
                            <li>Vessel nomination</li>
                            <li>Port call coordination</li>
                            <li>Liaison with port authorities</li>
                          </StandardCard>
                        </MotionBlock>
              
                        <MotionBlock delay={0.1}>
                          <StandardCard title="Clearing &amp; Forwarding Alignment">
                            <li>Customs process coordination</li>
                            <li>Cross-border clearance support</li>
                            <li>Regulatory compliance alignment</li>
                          </StandardCard>
                        </MotionBlock>
              
                        <MotionBlock delay={0.15}>
                          <StandardCard title="Export Documentation">
                            <li>Bills of lading coordination</li>
                            <li>Port release documentation</li>
                          </StandardCard>
                        </MotionBlock>
              
                        <MotionBlock delay={0.2}>
                          <StandardCard title="Trade &amp; Corridor Facilitation">
                            <li>Bulk commodity routing</li>
                            <li>Port-to-market coordination</li>
                            <li>Regional trade access</li>
                          </StandardCard>
                        </MotionBlock>
                      </div>
                    </div>
                  </div>
                </Panel>
              </section>

              {/* gap between panels */}
              <div className="mx-auto max-w-6xl px-5">
                <div className="h-8" />
              </div>

              {/* PANEL 3: Standards + Metrics (this was missed as a shell) */}
              <section className="mx-auto max-w-6xl px-5">
                <Panel className="overflow-hidden">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A2B4B]/30 via-[#0B0F14]/40 to-[#0B0F14]/70" />
                    <div className="relative px-5 py-10">
                      <MotionBlock>
                        <h2 className="text-xl font-semibold tracking-tight">
                          Operational Standards
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          KHM Minerals operates within defined regulatory and
                          operational requirements, supporting safe execution
                          and international alignment across the value chain.
                        </p>
                      </MotionBlock>

                      <div className="mt-8 grid grid-cols-3 gap-3">
                        {[
                          {
                            icon: <ShieldCheck className="h-5 w-5" />,
                            label: "REGULATORY\nFRAMEWORKS",
                          },
                          {
                            icon: <HardHat className="h-5 w-5" />,
                            label: "SAFETY\nPROTOCOLS",
                          },
                          {
                            icon: <Globe className="h-5 w-5" />,
                            label: "INTERNATIONAL\nSTANDARDS",
                          },
                        ].map((it: any, i: number) => (
                          <MotionBlock key={i} delay={0.05 * i}>
                            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center">
                              <div className="text-[#C49A6C]">{it.icon}</div>
                              <div className="whitespace-pre-line text-[10px] font-semibold tracking-[0.22em] text-white/70">
                                {it.label}
                              </div>
                            </div>
                          </MotionBlock>
                        ))}
                      </div>

                      <div className="mt-8 grid grid-cols-2 gap-3">
                        <MotionBlock delay={0.05}>
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                            <div className="text-2xl font-semibold text-[#C49A6C]">
                              24+
                            </div>
                            <div className="mt-1 text-[10px] tracking-[0.22em] text-white/60">
                              EXPORT NODES
                            </div>
                          </div>
                        </MotionBlock>

                        <MotionBlock delay={0.12}>
                          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                            <div className="text-2xl font-semibold text-[#C49A6C]">
                              15M
                            </div>
                            <div className="mt-1 text-[10px] tracking-[0.22em] text-white/60">
                              METRIC TONS
                            </div>
                          </div>
                        </MotionBlock>
                      </div>
                    </div>
                  </div>
                </Panel>
              </section>

              {/* Bottom CTA (outside panels, like your screenshot) */}
              <section
                id="request-quote"
                className="mx-auto max-w-6xl px-5 py-10 pb-16">
                <MotionBlock>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h2 className="text-base font-semibold tracking-tight">
                          Request a Quote
                        </h2>
                        <p className="mt-1 text-xs leading-relaxed text-white/65">
                          Share your commodity, volume, origin, and destination.
                          We’ll respond with a clear execution pathway.
                        </p>
                      </div>
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#C49A6C] px-5 py-3 text-sm font-medium text-[#0B0F14] shadow-sm transition hover:opacity-95">
                        REQUEST QUOTE <span className="ml-2">→</span>
                      </a>
                    </div>
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
