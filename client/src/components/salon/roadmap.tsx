import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { fadeUp } from "@/lib/animations";

type StepStatus = "done" | "current" | "upcoming";

const steps: { label: string; description: string; status: StepStatus }[] = [
  { label: "Idea & Research", description: "Market research and concept validation", status: "done" },
  { label: "Product Design", description: "UI/UX design and prototyping", status: "done" },
  { label: "Development", description: "Building the core platform", status: "current" },
  { label: "Beta Launch", description: "Invite-only testing with early users", status: "upcoming" },
  { label: "Public Launch", description: "Available to everyone across India", status: "upcoming" },
  { label: "Growth & Scale", description: "Expanding cities and features", status: "upcoming" },
];

function StepNode({ status, index }: { status: StepStatus; index: number }) {
  if (status === "done") {
    return (
      <div
        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 z-10"
        data-testid="icon-step-done"
      >
        <Check className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className="relative shrink-0 z-10" data-testid="icon-step-current">
        <div className="absolute inset-0 w-10 h-10 rounded-full bg-primary/25 animate-ping" />
        <div className="relative w-10 h-10 rounded-full bg-primary border-2 border-primary/30 flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-10 h-10 rounded-full border-2 border-muted-foreground/20 bg-background flex items-center justify-center shrink-0 z-10"
      data-testid="icon-step-upcoming"
    >
      <span className="text-xs font-semibold text-muted-foreground/40">{index + 1}</span>
    </div>
  );
}

export function Roadmap() {
  const doneCount = steps.filter((s) => s.status === "done").length;
  const progressPct = (doneCount / (steps.length - 1)) * 100;

  return (
    <section className="py-16 sm:py-24 bg-muted/30" data-testid="section-roadmap">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Product Roadmap
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
            data-testid="text-roadmap-heading"
          >
            Where We're Headed
          </h2>
        </motion.div>

        <div className="hidden md:block">
          <motion.div {...fadeUp} className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted-foreground/15" aria-hidden="true" />
            <div
              className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-700"
              style={{ width: `${progressPct}%` }}
              aria-hidden="true"
            />

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
                  <StepNode status={step.status} index={i} />
                  <span
                    className={`mt-3 text-xs sm:text-sm font-semibold leading-tight ${
                      step.status === "upcoming" ? "text-muted-foreground/50" : "text-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                  <span className="mt-1 text-[10px] sm:text-xs text-muted-foreground/60 leading-snug hidden sm:block">
                    {step.description}
                  </span>
                  {step.status === "current" && (
                    <span className="mt-2 inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold tracking-wide uppercase">
                      Now
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-muted-foreground/15" aria-hidden="true" />
            <div
              className="absolute left-5 top-0 w-0.5 bg-primary"
              style={{ height: `${progressPct}%` }}
              aria-hidden="true"
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex items-start gap-4 py-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-testid={`roadmap-step-mobile-${step.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="shrink-0">
                  <StepNode status={step.status} index={i} />
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold ${
                        step.status === "upcoming" ? "text-muted-foreground/50" : "text-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                    {step.status === "current" && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold tracking-wide uppercase">
                        Now
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
