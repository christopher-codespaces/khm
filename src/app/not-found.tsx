import Link from "next/link";
import { ArrowLeft, Phone, Mail, FileText, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "404 | KHM Minerals",
  description:
    "This page could not be found. Return to KHM Minerals navigation or contact the team.",
};

const CONTACT = {
  phonePrimary: "+27 60 982 3980",
  email: "admin@khmminerals.com",
  location: "South Africa",
  website: "https://www.khmminerals.com",
};


export default function NotFound() {
  return (
    <main className="min-h-[100svh] bg-[#0B0F14] text-white">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,rgba(196,154,108,0.20)_0%,rgba(11,15,20,0.92)_60%,rgba(11,15,20,1)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col px-6 py-16">
        {/* top */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80 hover:bg-white/[0.06]">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>

          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/70 md:inline-flex">
            <ShieldCheck className="h-4 w-4 text-[#C49A6C]" />
            Secure session • Navigation fallback
          </div>
        </div>

        {/* hero card */}
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                ROUTE NOT VERIFIED
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
                404. Page not found.
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                Either the link is outdated, or this route was never cleared for
                deployment. No stress — the system is fine. The page isn’t.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/operations"
                  className="inline-flex items-center justify-center rounded-xl bg-[#C49A6C] px-4 py-2 text-sm font-semibold text-[#0B0F14] hover:opacity-90">
                  View Operations
                </Link>

                <Link
                  href="/logistics"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]">
                  Logistics & Export
                </Link>

                <Link
                  href="/compliance"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]">
                  Compliance
                </Link>

                <Link
                  href="/commodities"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]">
                  Commodities
                </Link>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="text-[11px] tracking-[0.22em] text-white/55">
                  QUICK DIAGNOSTIC
                </div>
                <div className="mt-2 grid gap-2 text-sm text-white/75">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Status</span>
                    <span className="text-white/85">Not Found</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Action</span>
                    <span className="text-white/85">
                      Return to verified route
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Humour</span>
                    <span className="text-white/85">
                      Minimal • As requested
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* contact card */}
          <div className="md:col-span-2">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <div className="text-[11px] tracking-[0.24em] text-white/60">
                NEED HELP
              </div>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Contact KHM
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                If this was supposed to be a real page, send the route and we’ll
                verify it.
              </p>

              <div className="mt-5 space-y-3">
                <a
                 
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 hover:bg-black/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0E1622]">
                    <Phone className="h-5 w-5 text-[#C49A6C]" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs tracking-[0.18em] text-white/55">
                      PHONE
                    </div>
                    <div className="truncate text-sm text-white/85">
                      {CONTACT.phonePrimary}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 hover:bg-black/30">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0E1622]">
                    <Mail className="h-5 w-5 text-[#C49A6C]" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs tracking-[0.18em] text-white/55">
                      EMAIL
                    </div>
                    <div className="truncate text-sm text-white/85">
                      {CONTACT.email}
                    </div>
                  </div>
                </a>

                <Link
                  href="/contact"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 p-4 hover:bg-black/30">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0E1622]">
                      <FileText className="h-5 w-5 text-[#C49A6C]" />
                    </span>
                    <div>
                      <div className="text-xs tracking-[0.18em] text-white/55">
                        FORM
                      </div>
                      <div className="text-sm text-white/85">
                        Secure Inquiry
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-white/60">→</span>
                </Link>
              </div>

              {/* optional 2nd number */}
              {/* {CONTACT.phoneAlt !== "+27 XX XXX XXXX" && (
                <div className="mt-4 text-xs text-white/55">
                  Alternate:{" "}
                  <a
                    className="text-white/80 hover:text-white"
                    href={`tel:${CONTACT.phoneAlt.replace(/\s/g, "")}`}>
                    
                  </a>
                </div>
              )} */}

              <div className="mt-6 text-[11px] tracking-[0.22em] text-white/45">
                KHM MINERALS • ROUTE RECOVERY
              </div>
            </div>
          </div>
        </div>

        {/* tiny footer */}
        <div className="mt-10 text-center text-xs text-white/40">
          If you were looking for something specific, try{" "}
          <Link href="/operations" className="text-white/70 hover:text-white">
            Operations
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-white/70 hover:text-white">
            Secure Inquiry
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
