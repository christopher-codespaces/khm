// components/KhmBottomNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiOfficeBuilding,
  HiTruck,
  HiShieldCheck,
  HiDotsHorizontal,
  HiPlus,
} from "react-icons/hi";

const NAV = [
  { label: "Home", href: "/", icon: HiHome },
  { label: "Operations", href: "/operations", icon: HiOfficeBuilding },
  { label: "Logistics", href: "/logistics", icon: HiTruck },
  { label: "Compliance", href: "/compliance", icon: HiShieldCheck },
];

const MORE = [
  { label: "Commodities", href: "/commodities" },
  { label: "Contact", href: "/contact" },
];

export default function KhmBottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <div className="md:hidden">
      {/* Spacer so content/footer doesn't sit under the fixed bar */}
      <div className="h-[92px]" />

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t bg-[#0B111A] text-white border-t border-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-[520px] px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2">
          <div className="relative grid grid-cols-5 items-end gap-2">
            {/* Home */}
            <NavItem
              href={NAV[0].href}
              label={NAV[0].label}
              Icon={NAV[0].icon}
              active={isActive(NAV[0].href)}
            />

            {/* Operations */}
            <NavItem
              href={NAV[1].href}
              label={NAV[1].label}
              Icon={NAV[1].icon}
              active={isActive(NAV[1].href)}
            />

            {/* Center primary action */}
            <div className="flex flex-col items-center">
              <Link
                href="/contact"
                aria-label="Primary action"
                className="relative -mt-7 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#C49A6C] text-[#0B111A] shadow-[0_10px_30px_rgba(0,0,0,0.45)] border border-black/10 active:scale-[0.98] transition"
              >
                <HiPlus size={24} />
              </Link>
              <span className="mt-2 text-[11px] text-white/50">Request Qoute</span>
            </div>

            {/* Logistics */}
            <NavItem
              href={NAV[2].href}
              label={NAV[2].label}
              Icon={NAV[2].icon}
              active={isActive(NAV[2].href)}
            />

            {/* More */}
            <MoreMenu active={MORE.some((m) => isActive(m.href))} />
          </div>
        </div>
      </nav>
    </div>
  );
}

/* ----------------------------- Sub components ----------------------------- */

function NavItem({
  href,
  label,
  Icon,
  active,
}: {
  href: string;
  label: string;
  Icon: any;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center justify-center gap-1 py-2"
      aria-current={active ? "page" : undefined}>
      <div
        className={[
          "flex h-10 w-10 items-center justify-center rounded-2xl border transition",
          active
            ? "border-[#C49A6C]/40 bg-white/5 text-[#C49A6C]"
            : "border-white/10 bg-[#0E1622] text-white/65 group-active:scale-[0.98]",
        ].join(" ")}>
        <Icon size={20} />
      </div>
      <span
        className={
          active ? "text-[11px] text-white" : "text-[11px] text-white/55"
        }>
        {label}
      </span>
    </Link>
  );
}

function MoreMenu({ active }: { active: boolean }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="flex w-full flex-col items-center justify-center gap-1 py-2"
        aria-label="More menu">
        <div
          className={[
            "flex h-10 w-10 items-center justify-center rounded-2xl border transition",
            active
              ? "border-[#C49A6C]/40 bg-white/5 text-[#C49A6C]"
              : "border-white/10 bg-[#0E1622] text-white/65 group-active:scale-[0.98]",
          ].join(" ")}>
          <HiDotsHorizontal size={20} />
        </div>
        <span
          className={
            active ? "text-[11px] text-white" : "text-[11px] text-white/55"
          }>
          More
        </span>
      </button>

      {/* Popover */}
      <div className="pointer-events-none absolute bottom-[70px] right-0 w-[190px] opacity-0 transition group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="rounded-2xl border border-white/10 bg-[#0B111A] shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
          {MORE.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-sm text-white/85 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
