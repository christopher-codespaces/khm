// components/KhmNavbar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Operations", href: "operations" },
  { label: "Commodities", href: "commodities" },
  { label: "Logistics", href: "logistics" },
  { label: "Compliance", href: "compliance" },
  { label: "Contact", href: "contact" },
];

export default function KhmNavbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when menu open (mobile drawer)
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Click outside to close
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[#0B111A]/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4 md:px-6">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 items-center">
              <Image
                src="/khm-logo.svg"
                alt="KHM Minerals"
                width={90}
                height={24}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop links (auto shows at md+) */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-[#C49A6C] px-4 py-2 text-sm font-semibold text-[#0B111A] hover:opacity-90 transition">
              Request Quote
            </Link>

            {/* Mobile hamburger (auto shows below md) */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white hover:bg-white/5 transition">
              {open ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer (only active on mobile) */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          ref={panelRef}
          className={`absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-[#0B111A] border-l border-white/10 transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1622] border border-white/10">
                <span className="text-sm font-bold text-white">◆</span>
              </div>
              <span className="text-base font-semibold text-white">
                KHM<span className="text-[#C49A6C]">.</span>
              </span>
            </div>

            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white hover:bg-white/5 transition">
              <HiX size={22} />
            </button>
          </div>

          <div className="px-4 py-4">
            <div className="space-y-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-white/90 hover:bg-white/5 transition">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#0E1622] border border-white/10 p-4">
              <p className="text-xs tracking-[0.2em] text-white/50">CONTACT</p>
              <p className="mt-2 text-sm text-white/85">Richards Bay, SA</p>
              <p className="mt-1 text-sm text-white/70">info@khmminerals.com</p>
            </div>
          </div>

          {/* Pinned CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-[#0B111A]">
            <Link
              href="#request-quote"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-2xl bg-[#C49A6C] px-4 py-3 text-sm font-semibold text-[#0B111A] hover:opacity-90 transition">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
