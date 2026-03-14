import { motion } from "framer-motion";
import { Check, Wrench, Clock } from "lucide-react";
import { fadeUp } from "@/lib/animations";

type StepStatus = "done" | "current" | "upcoming";

const steps: { label: string; status: StepStatus }[] = [
  { label: "Idea & Research", status: "done" },
  { label: "Product Design", status: "done" },
  { label: "Development", status: "current" },
  { label: "Beta Launch", status: "upcoming" },
  { label: "Public Launch", status: "upcoming" },
  { label: "Growth & Expansion", status: "upcoming" },
];

function StepIcon({ status }: { status: StepStatus }) {
  if (status === "done") {
    return (
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center shrink-0" data-testid="icon-step-done">
        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className="relative shrink-0">
        <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/30 animate-ping" />
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent flex items-center justify-center" data-testid="icon-step-current">
          <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center shrink-0" data-testid="icon-step-upcoming">
      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground/50" />
    </div>
  );
}

export function Roadmap() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3" data-testid="text-roadmap-label">Our Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-roadmap-heading">Where We're Headed</h2>
        </motion.div>

        <div className="hidden md:block">
          <motion.div {...fadeUp} className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted-foreground/15" aria-hidden="true" />

            <div className="relative grid grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.label}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  data-testid={`roadmap-step-${step.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <StepIcon status={step.status} />
                  <span className={`mt-3 text-xs sm:text-sm font-medium leading-tight ${
                    step.status === "done" ? "text-primary" :
                    step.status === "current" ? "text-accent" :
                    "text-muted-foreground"
                  }`}>
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:hidden">
          <div className="relative pl-10">
            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-muted-foreground/15" aria-hidden="true" />

            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="relative flex items-center gap-4 py-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-testid={`roadmap-step-mobile-${step.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="absolute left-[-24px]">
                  <StepIcon status={step.status} />
                </div>
                <span className={`text-sm font-medium ${
                  step.status === "done" ? "text-primary" :
                  step.status === "current" ? "text-accent" :
                  "text-muted-foreground"
                }`}>
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
