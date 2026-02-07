"use client";

import Link from "next/link";
import { HiPhone, HiMail, HiClock, HiLocationMarker } from "react-icons/hi";

export default function KhmFooter() {
  return (
    // ✅ Footer exists only on md+ (tablet + web)
    <footer className="hidden md:block bg-[#0B111A] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1180px] px-6 py-12">
        <div className="grid grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold">KHM.</h3>
            <p className="mt-3 text-sm text-white/70">
              KHM Minerals operates across extraction, processing, and export
              logistics, supporting global supply chains through disciplined
              operations and regulatory alignment.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <StatCard value="24+" label="Export Nodes" />
              <StatCard value="15M" label="Metric Tons" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/operations">Operations</Link>
              </li>
              <li>
                <Link href="/commodities">Commodities</Link>
              </li>
              <li>
                <Link href="/logistics">Logistics</Link>
              </li>
              <li>
                <Link href="/compliance">Compliance</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/export-terms">Export Terms</Link>
              </li>
              <li>
                <Link href="/certification">Certification</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <HiPhone /> +27 60 982 3980
              </li>
              <li className="flex items-center gap-2">
                <HiMail /> admin@khmminerals.com
              </li>
              <li className="flex items-center gap-2">
                <HiClock /> Mon–Fri: 08:00 – 17:00
              </li>
              <li className="flex items-center gap-2">
                <HiLocationMarker /> Richards Bay, South Africa
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#C49A6C] px-5 py-2 text-sm font-semibold text-[#0B111A] hover:opacity-90 transition">
              Request Quote
            </Link>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 border-t border-white/10 pt-4 text-center text-xs text-white/50">
          © 2026 KHM MINERALS (PTY) LTD.
        </div>
      </div>
    </footer>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0E1622] p-4">
      <p className="text-xl font-semibold text-[#C49A6C]">{value}</p>
      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
