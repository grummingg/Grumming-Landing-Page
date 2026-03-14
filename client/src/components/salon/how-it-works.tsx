import { motion } from "framer-motion";
import { Search, CalendarCheck, Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

const steps: { number: string; icon: LucideIcon; title: string; description: string }[] = [
  {
    number: "1",
    icon: Search,
    title: "Search",
    description: "Find salons, spas, and studios near you by service, location, or rating.",
  },
  {
    number: "2",
    icon: CalendarCheck,
    title: "Book",
    description: "Pick a service, choose a time slot, and confirm your appointment instantly.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Enjoy",
    description: "Show up, get pampered, and rate your experience to help others discover great spots.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-how-it-works-heading">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                data-testid={`how-it-works-step-${step.number}`}
              >
                <div className="relative mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1.5" data-testid={`text-step-title-${step.number}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
