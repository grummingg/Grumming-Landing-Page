import { motion } from "framer-motion";
import { Search, CalendarCheck, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Find salons near you by service, location, or name",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      icon: CalendarCheck,
      title: "Book",
      description: "Choose your preferred time slot and confirm your appointment",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Sparkles,
      title: "Enjoy",
      description: "Visit the salon and enjoy premium beauty services",
      color: "bg-[#D4A574]/20 text-[#D4A574]",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-howitworks-title">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-howitworks-description">
            Book your favorite salon in 3 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-border" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="inline-flex flex-col items-center">
                <div
                  className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-6 relative z-10 bg-background border-4 border-background`}
                >
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm z-20">
                  {index + 1}
                </div>
              </div>
              <h3
                className="text-xl font-bold mb-3"
                data-testid={`text-step-title-${index}`}
              >
                {step.title}
              </h3>
              <p
                className="text-muted-foreground max-w-xs mx-auto"
                data-testid={`text-step-description-${index}`}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
