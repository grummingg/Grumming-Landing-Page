import { motion } from "framer-motion";
import { MapPin, Scissors, Store, Star } from "lucide-react";

const stats = [
  { icon: Store, value: "500+", label: "Partner Businesses", testId: "stat-partners" },
  { icon: MapPin, value: "60+", label: "Cities", testId: "stat-cities" },
  { icon: Scissors, value: "6", label: "Service Categories", testId: "stat-categories" },
  { icon: Star, value: "4.8", label: "Average Rating", testId: "stat-rating" },
];

export function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                data-testid={stat.testId}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
