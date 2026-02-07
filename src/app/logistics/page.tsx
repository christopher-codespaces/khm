"use client";

import Head from "next/head";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Train, AlertTriangle, Cloud, Package, Route } from "lucide-react";

import KhmFooter from "@/components/Footer";
import KhmBottomNav from "@/components/KhmBottomNav";
import KhmNavbar from "@/components/NavBar";

type Tone = "moderate" | "elevated";

function MotionBlock({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}>
      {children}
    </motion.div>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {children}
    </div>
  );
}

function RiskBadge({ tone, text }: { tone: Tone; text: string }) {
  const cls =
    tone === "elevated" ? "bg-red-500 text-white" : "bg-red-500/90 text-white";

  return (
    <span className={`rounded-lg px-3 py-1 text-xs font-semibold ${cls}`}>
      {text}
    </span>
  );
}

type Mode = "STANDARD" | "ACCELERATED" | "CONTINGENCY";

function ModeTab({
  label,
  active,
  onClick,
}: {
  label: Mode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex-1 rounded-xl px-4 py-3 text-xs font-semibold tracking-[0.22em] transition",
        active
          ? "bg-[#0A2B4B] text-[#C49A6C] shadow-sm"
          : "text-white/60 hover:text-white/80",
      ].join(" ")}>
      {label}
    </button>
  );
}

const MODES: Mode[] = ["STANDARD", "ACCELERATED", "CONTINGENCY"];

const contentByMode: Record<
  Mode,
  {
    modeLabel: string;
    transitTitle: string;
    statusPill: string;
    progressPct: number;
    stageLabel: string;
    stagePctText: string;
    portTitle: string;
    portSub: string;
    efficiencyPct: string;
    queueLabel: string;
    queueValue: string;
    loadLabel: string;
    loadValue: string;
    partnerNote: string;
    riskPill: { text: string; tone: Tone };
    riskText: string;
    cta: string;
  }
> = {
  STANDARD: {
    modeLabel: "STANDARD",
    transitTitle: "Mine-to-Port Transit",
    statusPill: "IN PROGRESS",
    progressPct: 75,
    stageLabel: "CURRENT STAGE: RAIL TRANSPORT",
    stagePctText: "75%",
    portTitle: "Port Handling",
    portSub: "TERMINAL 04-A STATUS",
    efficiencyPct: "92%",
    queueLabel: "QUEUE TIME",
    queueValue: "4.2h",
    loadLabel: "DAILY LOAD",
    loadValue: "14.5kT",
    partnerNote:
      "Coordination: GGA (routing & corridor), Vuox Resources (processing visibility).",
    riskPill: { text: "MODERATE RISK", tone: "moderate" },
    riskText:
      "Weather forecast near the terminal may affect berthing schedules within 48h.",
    cta: "VIEW Risk APPROACH",
  },

  ACCELERATED: {
    modeLabel: "ACCELERATED",
    transitTitle: "Mine-to-Port Transit",
    statusPill: "IN PROGRESS",
    progressPct: 75,
    stageLabel: "CURRENT STAGE: RAIL TRANSPORT",
    stagePctText: "75%",
    portTitle: "Port Handling",
    portSub: "PRIORITY WINDOW REQUESTED",
    efficiencyPct: "—",
    queueLabel: "QUEUE TIME",
    queueValue: "Under review",
    loadLabel: "DAILY LOAD",
    loadValue: "Under review",
    partnerNote:
      "Acceleration requests are subject to slot availability and terminal confirmation. Coordination with GGA for routing updates.",
    riskPill: { text: "MONITORING", tone: "moderate" },
    riskText:
      "Priority handling has been requested. Timing depends on rail slot confirmation and berth availability. Next review in 12h.",
    cta: "VIEW STATUS CONTEXT",
  },

  CONTINGENCY: {
    modeLabel: "CONTINGENCY",
    transitTitle: "Mine-to-Port Transit",
    statusPill: "MONITORING",
    progressPct: 75,
    stageLabel: "CURRENT STAGE: RAIL TRANSPORT",
    stagePctText: "75%",
    portTitle: "Port Handling",
    portSub: "ALTERNATE STAGING REVIEW",
    efficiencyPct: "—",
    queueLabel: "QUEUE TIME",
    queueValue: "Variable",
    loadLabel: "DAILY LOAD",
    loadValue: "Variable",
    partnerNote:
      "Contingency planning focuses on route flexibility, documentation readiness, and staging options. GGA supports alternate routing coordination.",
    riskPill: { text: "ELEVATED RISK", tone: "elevated" },
    riskText:
      "Weather-related disruption is possible within 48h. Alternative routing and staging options are being assessed. Update on next review cycle.",
    cta: "OPEN CONTINGENCY APPROACH",
  },
};

export default function LogisticsPage() {
  const initialMode: Mode = MODES[0];
  const [mode, setMode] = useState<Mode>(initialMode);

  const data = contentByMode[mode];

  return (
    <>
      <Head>
        <title>KHM Minerals | Logistics</title>
        <meta
          name="description"
          content="KHM Minerals logistics control view across transit, port handling, and risk monitoring."
        />
      </Head>

      <KhmNavbar />

      <main className="min-h-screen bg-[#0B0F14] text-white">
        {/* (optional) keep top bar minimal */}
        <section className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur" />

        {/* ROUTE / MAP */}
        <section className="mx-auto max-w-6xl px-5 pt-6">
          <Panel>
            <div className="relative overflow-hidden rounded-[26px]">
              <img
                src="/logistics-route-map.jpg"
                alt="Active logistics route"
                className="h-56 w-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0F14]/65" />

              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[11px] font-semibold tracking-[0.18em]">
                  <span className="h-2 w-2 rounded-full bg-[#C49A6C]" />
                  ROUTE MONITORING ACTIVE
                </span>
              </div>
            </div>
          </Panel>
        </section>

        {/* MODE TABS */}
        <section className="mx-auto max-w-6xl px-5 pt-4">
          <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
            {MODES.map((m) => (
              <ModeTab
                key={m}
                label={m}
                active={mode === m}
                onClick={() => setMode(m)}
              />
            ))}
          </div>
        </section>

        {/* LOGISTICS CONTROL */}
        <section className="mx-auto max-w-6xl px-5 pt-6">
          <MotionBlock>
            <Panel>
              <div className="px-5 py-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">Logistics Control</h2>
                  <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/70">
                    {data.modeLabel}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-base font-semibold">
                    {data.transitTitle}
                  </div>
                  <span className="rounded-lg bg-[#C49A6C] px-3 py-1 text-xs font-semibold text-[#0B0F14]">
                    {data.statusPill}
                  </span>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-[#C49A6C]"
                      style={{
                        width: `${Math.max(0, Math.min(100, data.progressPct))}%`,
                      }}
                    />
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-xs tracking-[0.22em] text-white/65">
                    <Train className="h-4 w-4" />
                    {data.stageLabel} · {data.stagePctText}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#C49A6C]">
                        <Package className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="font-semibold">{data.portTitle}</div>
                        <div className="text-xs text-white/55">
                          {data.portSub}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-semibold text-[#C49A6C]">
                        {data.efficiencyPct}
                      </div>
                      <div className="text-xs text-white/55">EFFICIENCY</div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                      <div className="text-xs tracking-[0.22em] text-white/55">
                        {data.queueLabel}
                      </div>
                      <div className="mt-1 text-xl font-semibold">
                        {data.queueValue}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                      <div className="text-xs tracking-[0.22em] text-white/55">
                        {data.loadLabel}
                      </div>
                      <div className="mt-1 text-xl font-semibold">
                        {data.loadValue}
                      </div>
                    </div>
                  </div>

                  {/* Quiet partner note */}
                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-xs leading-relaxed text-white/60">
                    <Route className="mt-0.5 h-4 w-4 text-[#C49A6C]" />
                    <span>{data.partnerNote}</span>
                  </div>
                </div>
              </div>
            </Panel>
          </MotionBlock>
        </section>

        {/* RISK MITIGATION */}
        <section className="mx-auto max-w-6xl px-5 pt-6 pb-24">
          <MotionBlock delay={0.05}>
            <Panel>
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div className="font-semibold">Risk Mitigation</div>
                  </div>

                  <RiskBadge
                    tone={data.riskPill.tone}
                    text={data.riskPill.text}
                  />
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75">
                  <div className="flex items-start gap-3">
                    <Cloud className="mt-0.5 h-5 w-5 text-[#C49A6C]" />
                    <p>{data.riskText}</p>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-xl bg-[#C49A6C] px-5 py-4 text-sm font-semibold text-[#0B0F14]">
                  {data.cta}
                </button>
              </div>
            </Panel>
          </MotionBlock>
        </section>
      </main>

      <KhmFooter />
      <KhmBottomNav />
    </>
  );
}
