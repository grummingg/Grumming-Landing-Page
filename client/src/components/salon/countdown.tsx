import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const IS_LIVE = false;

function Pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const units = [
    { label: "Days", value: 0 },
    { label: "Hours", value: 0 },
    { label: "Minutes", value: 0 },
    { label: "Seconds", value: 0 },
  ];

  if (IS_LIVE) {
    return (
      <section className="py-16 sm:py-24 bg-background" data-testid="section-countdown">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-4" data-testid="badge-live">
              We&apos;re Live!
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2"
              data-testid="text-countdown-heading"
            >
              Grumming is now live
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6" data-testid="text-launched-description">
              Download the app and book your first appointment today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm transition-colors"
                data-testid="button-get-app"
              >
                Get the App
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-background" data-testid="section-countdown">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp} className="flex flex-col items-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase mb-4">
            Launching Soon
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2"
            data-testid="text-countdown-heading"
          >
            Launching Soon
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-10">
            We&apos;re putting the finishing touches on Grumming — stay tuned for the official launch date.
          </p>

          <div className="flex items-start justify-center gap-2 sm:gap-8" data-testid="countdown-timer">
            {units.map(({ label, value }, i) => (
              <div key={label} className="flex items-start gap-2 sm:gap-8">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md bg-[#0f172a]"
                  >
                    <span
                      className="text-lg sm:text-4xl font-bold text-white tabular-nums"
                      data-testid={`countdown-${label.toLowerCase()}`}
                    >
                      {Pad(value)}
                    </span>
                  </div>
                  <span className="mt-1.5 text-[9px] sm:text-xs text-muted-foreground font-medium tracking-widest uppercase">
                    {label}
                  </span>
                </div>
                {i < units.length - 1 && (
                  <span className="text-lg sm:text-4xl font-bold text-muted-foreground/30 mt-2 sm:mt-5 select-none">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
