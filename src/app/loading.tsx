export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] grid place-items-center text-white
      bg-[radial-gradient(120%_80%_at_50%_35%,rgba(196,154,108,0.55)_0%,rgba(11,15,20,0.92)_62%,rgba(11,15,20,1)_100%)]">
      {/* gold fog / vignette */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(70%_55%_at_50%_30%,rgba(196,154,108,0.28)_0%,rgba(196,154,108,0.10)_38%,rgba(11,15,20,0.92)_78%)]"
      />

      {/* subtle scan */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="khm-scan absolute inset-x-0 top-0 h-40" />
      </div>

      {/* particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="khm-particle absolute h-[2px] w-[2px] rounded-full bg-white/30"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 19) % 100}%`,
              animationDelay: `${(i % 9) * 0.18}s`,
            }}
          />
        ))}
      </div>

      {/* card */}
      <div className="relative w-full max-w-sm px-6">
        <div
          className="mx-auto rounded-[26px] border border-white/10 bg-white/[0.04] p-6
          shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          {/* header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl
                border border-white/10 bg-[#0E1622] overflow-hidden">
                <span className="khm-shimmer absolute inset-0" />
                <span className="relative text-sm font-bold">◆</span>
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">
                  KHM<span className="text-[#C49A6C]">.</span>
                </div>
                <div className="text-[11px] tracking-[0.26em] text-white/70">
                  SECURE LOAD
                </div>
              </div>
            </div>

            <div className="text-[11px] font-semibold tracking-[0.22em] text-[#C49A6C]">
              VERIFIED
            </div>
          </div>

          {/* core ring */}
          <div className="mt-6 grid place-items-center">
            <div className="relative h-28 w-28">
              <div className="khm-ring absolute inset-0 rounded-full" />
              <div className="absolute inset-[10px] rounded-full border border-white/10 bg-black/30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-[10px] tracking-[0.28em] text-white/60">
                  SYSTEM CHECK
                </div>
              </div>
            </div>
          </div>

          {/* progress bars */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between text-[11px] text-white/55">
              <span className="tracking-[0.22em]">MODULES</span>
              <span className="tracking-[0.18em] text-white/40">SYNC</span>
            </div>

            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="khm-bar h-full w-[45%] rounded-full bg-[#C49A6C]" />
            </div>

            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="khm-bar2 h-full w-[62%] rounded-full bg-[#C49A6C]/90" />
            </div>

            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="khm-bar3 h-full w-[38%] rounded-full bg-[#C49A6C]/80" />
            </div>
          </div>

          {/* footer */}
          <div className="mt-5 flex items-center gap-2 text-[11px] text-white/45">
            <span className="inline-block h-2 w-2 rounded-full bg-[#C49A6C]" />
            <span className="tracking-[0.18em]">ENCRYPTED SESSION</span>
          </div>
        </div>
      </div>
    </div>
  );
}
