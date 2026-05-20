import { motion } from "framer-motion";

export function BackedByBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 w-full border-b border-white/10 bg-[#0a0f1c] dark:bg-[#0a0f1c]"
      data-testid="bar-backed-by"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2.5 sm:py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-white/70">
          <span className="uppercase tracking-[0.18em]">Backed by</span>
          <span
            aria-hidden="true"
            className="hidden sm:inline h-3 w-px bg-white/20"
          />
          <span
            className="flex items-center gap-1.5"
            aria-label="Microsoft for Startups"
          >
            <span
              className="grid grid-cols-2 grid-rows-2 gap-[1.5px]"
              aria-hidden="true"
            >
              <span className="block h-1.5 w-1.5 bg-[#F25022]" />
              <span className="block h-1.5 w-1.5 bg-[#7FBA00]" />
              <span className="block h-1.5 w-1.5 bg-[#00A4EF]" />
              <span className="block h-1.5 w-1.5 bg-[#FFB900]" />
            </span>
            <span className="font-medium text-white/90">
              Microsoft for Startups
            </span>
          </span>
          <span aria-hidden="true" className="text-white/30">
            ·
          </span>
          <span
            className="flex items-center gap-1.5"
            aria-label="Deel Ventures"
          >
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-gradient-to-br from-[#1A1F36] to-[#0B5FFF] text-[9px] font-bold leading-none text-white"
            >
              D
            </span>
            <span className="font-medium text-white/90">Deel Ventures</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
