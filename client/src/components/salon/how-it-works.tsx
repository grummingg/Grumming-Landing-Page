import { motion } from "framer-motion";
import { Search, CalendarCheck, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search",
      description: "Find top-rated spots near you by service, location, or name",
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50 dark:bg-blue-950/40",
    },
    {
      icon: CalendarCheck,
      title: "Book",
      description: "Choose your preferred time slot and confirm your appointment",
      gradient: "from-emerald-500 to-emerald-600",
      lightBg: "bg-emerald-50 dark:bg-emerald-950/40",
    },
    {
      icon: Sparkles,
      title: "Enjoy",
      description: "Visit and enjoy premium beauty & grooming services",
      gradient: "from-amber-500 to-orange-500",
      lightBg: "bg-amber-50 dark:bg-amber-950/40",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground" data-testid="text-howitworks-title">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-howitworks-description">
            Book your favourite spot in 3 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={`${step.lightBg} rounded-3xl p-8 text-center h-full relative overflow-visible group hover-elevate transition-shadow duration-300`}>
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} text-white font-bold text-sm shadow-md`}>
                    {index + 1}
                  </span>
                </div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                
                <h3
                  className="text-xl font-bold mb-3 text-foreground"
                  data-testid={`text-step-title-${index}`}
                >
                  {step.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-testid={`text-step-description-${index}`}
                >
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-gray-300 dark:border-gray-600 transform rotate-45"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
