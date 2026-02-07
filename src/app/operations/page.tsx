"use client";

import Head from "next/head";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Pickaxe, Factory, FlaskConical } from "lucide-react";

import KhmFooter from "@/components/Footer";
import KhmBottomNav from "@/components/KhmBottomNav";
import KhmNavbar from "@/components/NavBar";

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
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}>
      {children}
    </motion.div>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[26px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden",
        className,
      ].join(" ")}>
      {children}
    </div>
  );
}

function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-emerald-400">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {label}
    </span>
  );
}

function PhaseHeader({
  icon,
  label,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#C49A6C]">
          {icon}
        </div>
        <div className="text-sm font-semibold tracking-tight">{label}</div>
      </div>

      {badge ? (
        <span className="rounded-lg bg-[#C49A6C] px-3 py-1 text-xs font-semibold text-[#0B0F14]">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

function Metric({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[10px] tracking-[0.22em] text-white/55">{label}</div>
      <div className="mt-1 text-xl font-semibold">
        {value} {suffix ? <span className="text-sm">{suffix}</span> : null}
      </div>
    </div>
  );
}

export default function OperationsPage() {
  return (
    <>
      <Head>
        <title>KHM Minerals | Operations Dashboard</title>
        <meta
          name="description"
          content="Operational capability overview including extraction, processing, and quality control."
        />
      </Head>

      <KhmNavbar />

      <main className="min-h-screen bg-[#0B0F14] text-white">
        {/* TOP BAR */}
        <section className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur" />

        {/* HUB OVERVIEW */}
        <section className="mx-auto max-w-6xl px-5 pt-6">
          <Panel>
            <div className="relative">
              <img
                src="/operations-hub.jpg"
                alt="Operational hub overview"
                className="h-48 w-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0F14]/70" />

              <div className="absolute left-4 top-4">
                <StatusPill label="SYSTEM STATUS: OPTIMAL" />
              </div>
            </div>

            <div className="px-5 py-5">
              <h1 className="text-xl font-semibold tracking-tight">
                North Sector Main Hub
              </h1>
              <p className="mt-1 text-xs tracking-[0.22em] text-white/55">
                ID: KHM-4409 — OPERATIONAL DASHBOARD V4.2
              </p>
            </div>
          </Panel>
        </section>

        {/* OPERATIONAL CAPABILITY */}
        <section className="mx-auto max-w-6xl px-5 pt-8 pb-24">
          <MotionBlock>
            <div className="text-[11px] font-semibold tracking-[0.32em] text-white/70">
              INFRASTRUCTURE
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-tight">
              Operational Capability
            </h2>
          </MotionBlock>

          {/* EXTRACTION */}
          <MotionBlock delay={0.05}>
            <Panel className="mt-6">
              <img
                src="/extraction-pit.jpg"
                alt="Extraction phase live feed"
                className="h-48 w-full object-cover opacity-90"
                loading="lazy"
              />

              <div className="px-5 py-6">
                <PhaseHeader
                  icon={<Pickaxe className="h-5 w-5" />}
                  label="High-Volume Extraction"
                  badge="94% LOAD"
                />

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Metric label="DAILY OUTPUT" value="12,500" suffix="t" />
                  <Metric label="ACTIVE UNITS" value="42" suffix="DRV" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Infrastructure status is currently optimal. Primary pit depth
                  reaching Layer 4 stabilization zones.
                </p>

                {/* <button className="mt-5 w-full rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-black/40">
                  VIEW TECHNICAL METRICS
                </button> */}
              </div>
            </Panel>
          </MotionBlock>

          {/* PROCESSING */}
          <MotionBlock delay={0.1}>
            <Panel className="mt-6">
              <img
                src="/processing-plant.jpg"
                alt="Processing phase"
                className="h-48 w-full object-cover opacity-90"
                loading="lazy"
              />

              <div className="px-5 py-6">
                <PhaseHeader
                  icon={<Factory className="h-5 w-5" />}
                  label="Refined Processing"
                  badge="ACTIVE"
                />

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/65">EFFICIENCY INDEX</span>
                    <span className="font-semibold text-[#C49A6C]">98.2%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-[98%] rounded-full bg-[#C49A6C]" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Conveyor systems fully operational. Facility throughput
                  maintaining maximum capacity.
                </p>

                {/* <button className="mt-5 w-full rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-black/40">
                  VIEW TECHNICAL METRICS
                </button> */}
              </div>
            </Panel>
          </MotionBlock>

          {/* QUALITY CONTROL */}
          <MotionBlock delay={0.15}>
            <Panel className="mt-6">
              <img
                src="/quality-lab.jpg"
                alt="Quality control laboratory"
                className="h-48 w-full object-cover opacity-90"
                loading="lazy"
              />

              <div className="px-5 py-6">
                <PhaseHeader
                  icon={<FlaskConical className="h-5 w-5" />}
                  label="Purity Verification"
                  badge="STRICT"
                />

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Spectrometric analysis in progress. Lab environment stabilized
                  for high-precision grading.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Metric label="Fe GRADING" value="64.5%" />
                  <Metric label="IMPURITY" value="<0.1%" />
                </div>

                {/*<button className="mt-5 w-full rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white/80 hover:bg-black/40">
                  VIEW TECHNICAL METRICS
                </button> */}
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
