"use client";
import KhmFooter from "@/components/Footer";
import KhmBottomNav from "@/components/KhmBottomNav";
import KhmNavbar from "@/components/NavBar";
import Head from "next/head";
import React, { useRef } from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <Head>
        <title>KHM - Our Commodities </title>
      </Head>
      <KhmNavbar />

      <main className="min-h-screen bg-[#0B0F14] text-white">
        {(() => {
          const { motion, useInView } = require("framer-motion");
          const {
            Menu,
            Search,
            ChevronDown,
            MapPin,
            Truck,
            FileText,
            BadgeCheck,
            Layers,
            Package,
            Zap,
            Grid3X3,
            LineChart,
            ClipboardList,
            User,
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
            const inView = useInView(ref, { once: true, margin: "-10% 0px" });

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

          function TopIconButton({
            icon,
            ariaLabel,
            href = "#",
          }: {
            icon: any;
            ariaLabel: string;
            href?: string;
          }) {
            return (
              <a
                href={href}
                aria-label={ariaLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/80 hover:bg-white/10">
                {icon}
              </a>
            );
          }

          function FilterPill({
            label,
            active = false,
            rightIcon,
            href = "#",
          }: {
            label: string;
            active?: boolean;
            rightIcon?: any;
            href?: string;
          }) {
            return (
              <a
                href={href}
                className={[
                  "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold transition",
                  active
                    ? "border-[#C49A6C]/40 bg-[#C49A6C] text-[#0B0F14]"
                    : "border-white/10 bg-[#0A2B4B]/45 text-white/80 hover:bg-[#0A2B4B]/65",
                ].join(" ")}>
                {label}
                {rightIcon ? (
                  <span className="opacity-90">{rightIcon}</span>
                ) : null}
              </a>
            );
          }

          function Chip({
            label,
            tone = "neutral",
          }: {
            label: string;
            tone?: "neutral" | "stock" | "grade" | "strategic";
          }) {
            const map: any = {
              neutral: "border-white/10 bg-black/35 text-white/75",
              stock: "border-white/10 bg-black/35 text-white/75",
              grade: "border-white/10 bg-black/35 text-white/75",
              strategic: "border-white/10 bg-black/35 text-white/75",
            };
            return (
              <span
                className={[
                  "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.18em]",
                  map[tone],
                ].join(" ")}>
                {label}
              </span>
            );
          }

          function CommodityCard({
            imageSrc,
            chip,
            categoryLabel,
            categoryValue,
            rightLabel,
            rightValue,
            bullets,
            ctaLabel = "REQUEST QUOTE",
            iconLeft,
          }: {
            imageSrc: string;
            chip: string;
            categoryLabel: string;
            categoryValue: string;
            rightLabel: string;
            rightValue: string;
            bullets: { icon: any; text: string }[];
            ctaLabel?: string;
            iconLeft?: any;
          }) {
            return (
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden">
                {/* Image */}
                <div className="relative h-56">
                  <img
                    src={imageSrc}
                    alt={categoryValue}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* gradient overlay like the mock */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-[#0A2B4B]/85" />
                  <div className="absolute right-4 top-4">
                    <Chip label={chip} tone="stock" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 pb-5 pt-4 bg-gradient-to-b from-[#0A2B4B]/85 to-[#0A2B4B]/95">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[10px] tracking-[0.28em] text-white/55">
                        {categoryLabel}
                      </div>
                      <h2 className="mt-1 text-2xl font-semibold leading-tight tracking-tight">
                        {categoryValue}
                      </h2>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] tracking-[0.28em] text-white/55">
                        {rightLabel}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-[#C49A6C]">
                        {rightValue}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {bullets.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-white/80">
                        <div className="mt-0.5 text-[#C49A6C]">{b.icon}</div>
                        <div className="text-sm leading-relaxed">{b.text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C49A6C] px-5 py-3 text-sm font-semibold text-[#0B0F14] shadow-sm transition hover:opacity-95">
                      {iconLeft ? (
                        <span className="text-[#0B0F14]">{iconLeft}</span>
                      ) : null}
                      {ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            );
          }

          function BottomNavItem({
            icon,
            label,
            active = false,
            href = "#",
          }: {
            icon: any;
            label: string;
            active?: boolean;
            href?: string;
          }) {
            return (
              <a
                href={href}
                className={[
                  "flex flex-col items-center justify-center gap-1 py-3 text-[10px] tracking-[0.18em]",
                  active
                    ? "text-[#C49A6C]"
                    : "text-white/55 hover:text-white/75",
                ].join(" ")}>
                {icon}
                <span className="font-semibold">{label}</span>
              </a>
            );
          }

          return (
            <>
              {/* TOP BAR */}
              <section className="sticky top-0 z-20 border-b border-white/10 bg-[#0B0F14]/85 backdrop-blur">
                {/* FILTERS (currently disabled) */}
              </section>

              {/* CONTENT */}
              <section className="mx-auto max-w-6xl px-5 pb-24 pt-6">
                <div className="grid gap-6">
                  {/* ORIGINAL CARDS */}
                  <MotionBlock>
                    <CommodityCard
                      imageSrc="/commodities-iron-ore.png"
                      chip="IN STOCK"
                      categoryLabel="METALLIC CATEGORY"
                      categoryValue="Iron Ore"
                      rightLabel="PURITY GRADE"
                      rightValue="62% Fe+"
                      bullets={[
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Direct shipping ore, high-purity content.",
                        },
                        {
                          icon: <MapPin className="h-4 w-4" />,
                          text: "Australia / Brazil origins.",
                        },
                      ]}
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>

                  <MotionBlock delay={0.06}>
                    <CommodityCard
                      imageSrc="commodities-copper-cathodes.jpg"
                      chip="LME GRADE"
                      categoryLabel="NON-FERROUS"
                      categoryValue="Copper Cathodes"
                      rightLabel="STANDARD"
                      rightValue="99.99%"
                      bullets={[
                        {
                          icon: <BadgeCheck className="h-4 w-4" />,
                          text: "Grade A electrolytic copper.",
                        },
                        {
                          icon: <Package className="h-4 w-4" />,
                          text: "Bundles: 2.5MT +/-.",
                        },
                      ]}
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>

                  <MotionBlock delay={0.12}>
                    <CommodityCard
                      imageSrc="/commodities-lithium-spodumene.jpg"
                      chip="STRATEGIC"
                      categoryLabel="RARE EARTHS"
                      categoryValue="Lithium Spodumene"
                      rightLabel="LI2O CONTENT"
                      rightValue="SC 6.0"
                      bullets={[
                        {
                          icon: <Zap className="h-4 w-4" />,
                          text: "Battery-grade processing concentrate.",
                        },
                        {
                          icon: <Layers className="h-4 w-4" />,
                          text: "Bulk shipment / big bags.",
                        },
                      ]}
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>

                  {/* KHM COMMODITY CARDS */}

                  {/* Coal */}
                  <MotionBlock delay={0.18}>
                    <CommodityCard
                      imageSrc="/commodities-coal.jpg"
                      chip="EXPORT READY"
                      categoryLabel="METALLIC CATEGORY"
                      categoryValue="Coal"
                      rightLabel="CATEGORY"
                      rightValue="Bulk Commodity"
                      bullets={[
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Thermal and industrial grade",
                        },
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Bulk vessel loading compatible",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Export-aligned documentation",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Not specified in source",
                        },
                      ]}
                      ctaLabel="REQUEST QUOTE"
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>

                  {/* Chrome Ore */}
                  <MotionBlock delay={0.24}>
                    <CommodityCard
                      imageSrc="/commodities-chrome-ore.jpg"
                      chip="METALLURGICAL"
                      categoryLabel="METALLIC CATEGORY"
                      categoryValue="Chrome Ore"
                      rightLabel="CATEGORY"
                      rightValue="Ferro Alloy"
                      bullets={[
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Smelting-grade material",
                        },
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Export prepared",
                        },
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Bulk and break-bulk handling",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Not specified in source",
                        },
                      ]}
                      ctaLabel="REQUEST QUOTE"
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>

                  {/* Gold */}
                  <MotionBlock delay={0.30}>
                    <CommodityCard
                      imageSrc="/commodities-gold.jpg"
                      chip="TRADE GRADE"
                      categoryLabel="METALLIC CATEGORY"
                      categoryValue="Gold"
                      rightLabel="CATEGORY"
                      rightValue="Precious Metal"
                      bullets={[
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Regulatory compliant handling",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Export documentation aligned",
                        },
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Secure logistics coordination",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Not specified in source",
                        },
                      ]}
                      ctaLabel="REQUEST QUOTE"
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>

                  {/* Silver */}
                  <MotionBlock delay={0.36}>
                    <CommodityCard
                      imageSrc="/commodities-silver.jpg"
                      chip="STANDARD"
                      categoryLabel="METALLIC CATEGORY"
                      categoryValue="Silver"
                      rightLabel="CATEGORY"
                      rightValue="Precious Metal"
                      bullets={[
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Trade-grade supply",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Export compliant",
                        },
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Secure handling",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Not specified in source",
                        },
                      ]}
                      ctaLabel="REQUEST QUOTE"
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>

                  {/* Graphite */}
                  <MotionBlock delay={0.42}>
                    <CommodityCard
                      imageSrc="/commodities-graphite.jpg"
                      chip="INDUSTRIAL"
                      categoryLabel="METALLIC CATEGORY"
                      categoryValue="Graphite"
                      rightLabel="CATEGORY"
                      rightValue="Industrial Mineral"
                      bullets={[
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Manufacturing grade",
                        },
                        {
                          icon: <Zap className="h-4 w-4" />,
                          text: "Energy and metallurgical use",
                        },
                        {
                          icon: <Truck className="h-4 w-4" />,
                          text: "Bulk export capable",
                        },
                        {
                          icon: <FileText className="h-4 w-4" />,
                          text: "Not specified in source",
                        },
                      ]}
                      ctaLabel="REQUEST QUOTE"
                      iconLeft={<FileText className="h-4 w-4" />}
                    />
                  </MotionBlock>
                </div>
              </section>

              {/* REQUEST QUOTE anchor */}
              <div id="request-quote" />
            </>
          );
        })()}
      </main>

      <KhmBottomNav />
      <KhmFooter />
    </>
  );
}

export default page;
