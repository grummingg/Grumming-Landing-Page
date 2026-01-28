import { motion } from "framer-motion";

export function SalonHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/90 via-purple-300/85 to-purple-400/80" />

      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight"
            data-testid="text-hero-headline"
          >
            <span className="block tracking-tight">Discover the Best</span>
            <span className="block text-white/95 italic tracking-wide">Stylists Around You</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="text-hero-subheadline"
        >
          Book appointments with top-rated stylists for haircuts, spa treatments, facials, makeup, and more
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "5000+", label: "Stylists" },
            { value: "50K+", label: "Happy Customers" },
            { value: "20+", label: "Cities" },
            { value: "4.8", label: "Avg Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm text-white/80" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
