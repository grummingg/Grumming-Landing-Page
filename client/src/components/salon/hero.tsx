import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/hero-background.mp4";

export function SalonHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="video-hero-background"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-purple-400/75 to-purple-500/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg"
            data-testid="text-hero-headline"
          >
            <span className="block tracking-tight">Discover the Best</span>
            <span className="block text-white/95 italic tracking-wide">Stylists Around You</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="text-hero-subheadline"
        >
          Premium beauty services at your fingertips
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
              <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md" data-testid={`text-stat-value-${index}`}>
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
