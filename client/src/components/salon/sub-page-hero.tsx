import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { Link } from "wouter";
import { fadeUp } from "@/lib/animations";

interface SubPageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
  maxWidth?: "4xl" | "5xl";
}

const maxWidthClass = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
} as const;

export function SubPageHero({
  label,
  title,
  subtitle,
  children,
  compact = false,
  maxWidth = "5xl",
}: SubPageHeroProps) {
  return (
    <section className="relative bg-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      <div className={`relative ${maxWidthClass[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 py-16 ${compact ? "sm:py-20" : "sm:py-24"}`}>
        <Link href="/">
          <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
            <Scissors className="w-5 h-5" />
            <span className="text-lg font-bold tracking-tight">Grumming</span>
          </span>
        </Link>
        <motion.div {...fadeUp}>
          {compact ? (
            <>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">{label}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">{title}</h1>
              {subtitle && <p className="text-white/60 mt-4 text-lg max-w-2xl">{subtitle}</p>}
            </>
          ) : (
            <>
              <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">{label}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">{title}</h1>
              {subtitle && <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">{subtitle}</p>}
            </>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
