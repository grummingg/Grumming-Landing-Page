import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const steps: { number: string; title: string; description: string }[] = [
  {
    number: "1",
    title: "Search",
    description: "Find salons, spas, and studios near you by service, location, or rating.",
  },
  {
    number: "2",
    title: "Book",
    description: "Pick a service, choose a time slot, and confirm your appointment instantly.",
  },
  {
    number: "3",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              data-testid={`how-it-works-step-${step.number}`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-1.5" data-testid={`text-step-title-${step.number}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
