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
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-8 leading-tight drop-shadow-lg font-display"
            data-testid="text-hero-headline"
          >
            <span className="block tracking-tight">Discover the Best</span>
            <span className="block text-white/95 italic tracking-wide">Stylists Around You</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-semibold font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="text-hero-subheadline"
        >
          Premium beauty services at your fingertips
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black rounded-lg px-4 py-2.5 border border-white/20 hover-elevate"
            data-testid="link-hero-google-play"
            aria-label="Get it on Google Play"
          >
            <svg viewBox="0 0 512 512" className="w-7 h-7">
              <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" fill="#2196F3"/>
              <path d="M345.31 198.78L104.16 59.8a8.33 8.33 0 00-6.88-.57L289 251l56.31-52.22z" fill="#4CAF50"/>
              <path d="M410.23 237.08L355.52 205l-61.58 57.16 61.39 56.94 54.9-31.79a16.07 16.07 0 000-27.87z" fill="#FFC107"/>
              <path d="M289.12 262L97.47 453.58a8 8 0 006.69-.63l241.08-139.28L289.12 262z" fill="#F44336"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/80 uppercase tracking-wide">Get it on</div>
              <div className="text-lg font-semibold text-white -mt-0.5">Google Play</div>
            </div>
          </a>
          <div
            className="inline-flex items-center gap-3 bg-black rounded-lg px-4 py-2.5 border border-white/20 opacity-70 cursor-not-allowed"
            data-testid="link-hero-app-store"
            aria-label="App Store - Coming Soon"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-amber-400 uppercase tracking-wide">Coming Soon</div>
              <div className="text-lg font-semibold text-white -mt-0.5">App Store</div>
            </div>
          </div>
        </motion.div>
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
