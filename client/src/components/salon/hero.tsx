import { motion } from "framer-motion";
import heroVideo from "../../assets/videos/hero-background.mp4";
import { AppStoreButtons } from "./app-store-buttons";

export function SalonHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="video-hero-background"
        aria-label="Background video showcasing beauty and grooming services"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-8 leading-tight drop-shadow-lg font-display"
            data-testid="text-hero-headline"
          >
            <span className="block tracking-tight">Discover the Best</span>
            <span className="block text-white/95 italic tracking-wide">Stylists Around You</span>
          </h1>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AppStoreButtons variant="hero" className="justify-center" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }); } }}
        role="button"
        tabIndex={0}
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/80"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
