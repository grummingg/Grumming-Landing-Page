import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const LAUNCH_DATE = new Date("2026-04-01T19:00:00+05:30");

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background" data-testid="section-countdown">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp} className="flex flex-col items-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-white/70 dark:bg-white/10 text-xs font-semibold tracking-widest uppercase mb-4">
            Launching Soon
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-2"
            data-testid="text-countdown-heading"
          >
            Going Live On April 1
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-10">
            Mark your calendar — Grumming launches at 7:00 PM IST
          </p>

          <div className="flex items-start justify-center gap-4 sm:gap-8" data-testid="countdown-timer">
            {units.map(({ label, value }, i) => (
              <div key={label} className="flex items-start gap-4 sm:gap-8">
                <div className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-primary to-accent dark:from-white/15 dark:to-white/5 dark:shadow-none"
                  >
                    <span
                      className="text-2xl sm:text-4xl font-bold text-white tabular-nums"
                      data-testid={`countdown-${label.toLowerCase()}`}
                    >
                      {Pad(value)}
                    </span>
                  </div>
                  <span className="mt-2 text-[10px] sm:text-xs text-muted-foreground font-medium tracking-widest uppercase">
                    {label}
                  </span>
                </div>
                {i < units.length - 1 && (
                  <span className="text-2xl sm:text-4xl font-bold text-muted-foreground/30 mt-3 sm:mt-5 select-none">
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
