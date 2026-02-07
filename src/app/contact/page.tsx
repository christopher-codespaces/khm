"use client";

import KhmFooter from "@/components/Footer";
import KhmBottomNav from "@/components/KhmBottomNav";
import KhmNavbar from "@/components/NavBar";
import Head from "next/head";
import { useRef } from "react";



export default function ContactPage() {
  return (
    <>
      <Head>
        <title>KHM - Reach Us </title>
      </Head>
      <KhmNavbar />

      <main className="min-h-screen bg-[#0B0F14] text-white">
        {(() => {
          const { motion, useInView } = require("framer-motion");
          const {
            ChevronLeft,
            ShieldCheck,
            Lock,
            MapPin,
            ExternalLink,
            Mail,
            Phone,
            Globe,
          } = require("lucide-react");

          function MotionBlock({
            children,
            delay = 0,
          }: {
            children: any;
            delay?: number;
          }) {
const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-10% 0px" });

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease: "easeOut", delay }}>
                {children}
              </motion.div>
            );
          }

          return (
            <>
              {/* SEO / TAB HEADERS (place in layout or page file) */}
              {/*
        export const metadata = {
          title: "KHM Minerals | Secure Inquiry",
          description:
            "Submit a secure inquiry to KHM Minerals through an encrypted communication channel. Contact details and global presence information.",
        };
        */}

              {/* TOP BAR */}
              <section className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0F14]/90 backdrop-blur"></section>

              {/* HERO / INTRO */}
              <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F14] via-[#0A2B4B]/55 to-[#0A2B4B]" />
                <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-8">
                  <MotionBlock>
                    <h1 className="text-3xl font-semibold tracking-tight">
                      Secure Inquiry
                    </h1>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                      Reach our global teams through our secure, encrypted
                      communication channel.
                    </p>
                  </MotionBlock>
                </div>
              </section>

              {/* FORM */}
              <section className="mx-auto max-w-6xl px-5 pb-12">
                <MotionBlock>
                  <form className="grid gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.22em] text-white/70">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B1F33] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-[#C49A6C]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.22em] text-white/70">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        placeholder="email@company.com"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B1F33] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-[#C49A6C]"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.22em] text-white/70">
                        INQUIRY TYPE
                      </label>
                      <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#0B1F33] px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#C49A6C]">
                        <option>Partnership Inquiry</option>
                        <option>Commodity Request</option>
                        <option>Logistics Coordination</option>
                        <option>Compliance & Documentation</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.22em] text-white/70">
                        MESSAGE
                      </label>
                      <textarea
                        placeholder="Describe your inquiry..."
                        rows={4}
                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0B1F33] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-[#C49A6C]"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C49A6C] px-5 py-4 text-sm font-semibold text-[#0B0F14] shadow-sm transition hover:opacity-95">
                      <ShieldCheck className="h-4 w-4" />
                      SEND SECURE MESSAGE
                    </button>

                    {/* Encryption Note */}
                    <div className="flex items-center justify-center gap-2 text-[11px] tracking-[0.22em] text-white/55">
                      <Lock className="h-3.5 w-3.5" />
                      ENCRYPTED 256-BIT CONNECTION
                    </div>
                  </form>
                </MotionBlock>
              </section>

              {/* GLOBAL PRESENCE */}
              <section className="mx-auto max-w-6xl px-5 pb-12">
                <MotionBlock>
                  <div className="text-center text-[11px] font-semibold tracking-[0.32em] text-white/70">
                    GLOBAL PRESENCE
                  </div>
                </MotionBlock>

                {/* Headquarters */}
                {/* <MotionBlock delay={0.05}>
                  <div className="mt-8 border-b border-white/10 pb-6">
                    <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/85">
                      HEADQUARTERS
                    </div>
                    <h2 className="mt-2 text-lg font-semibold">
                      Perth, Australia
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      Level 22, Central Park Tower
                      <br />
                      152-158 St Georges Terrace
                      <br />
                      Perth WA 6000
                    </p>
                    <a
                      href="#"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-[#C49A6C] hover:underline">
                      Get directions <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </MotionBlock> */}

                {/* Regional Office */}
                <MotionBlock delay={0.1}>
                  <div className="pt-6">
                    <div className="text-[10px] tracking-[0.28em] text-[#C49A6C]/85">
                      REGIONAL OFFICE
                    </div>
                    <h2 className="mt-2 text-lg font-semibold">
                      Richards Bay, SA
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      Sandton City Office Towers
                      <br />
                      5th St, Sandton, 2196
                      <br />
                      South Africa
                    </p>
                    <a
                      href="#"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-[#C49A6C] hover:underline">
                      Get directions <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </MotionBlock>
              </section>

              {/* MAP IMAGE SLOT */}
              <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src="/worldmap.png"
                    alt="Global presence map"
                    className="h-48 w-full object-cover opacity-70"
                  />
                </div>
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
