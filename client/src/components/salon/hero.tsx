import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

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
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="text-hero-subheadline"
        >
          Premium beauty services at your fingertips
        </motion.p>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        data-testid="button-scroll-down"
      >
        <span className="text-white/90 text-sm font-medium tracking-wide">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/90" strokeWidth={2} />
          <ChevronDown className="w-5 h-5 text-white/70 -mt-3" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
}
