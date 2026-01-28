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
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8"
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
            className="inline-flex items-center gap-3 bg-black rounded-lg px-4 py-2.5 border border-white/20 hover:bg-black/80 transition-colors"
            data-testid="link-hero-google-play"
            aria-label="Get it on Google Play"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#00D7FE"/>
              <path d="M14.499 12.707l2.302 2.302-10.937 6.333 8.635-8.635z" fill="#FF3A44"/>
              <path d="M17.698 9.509l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491z" fill="#FFCE00"/>
              <path d="M5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" fill="#00F076"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/80 uppercase tracking-wide">Get it on</div>
              <div className="text-lg font-semibold text-white -mt-0.5">Google Play</div>
            </div>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black rounded-lg px-4 py-2.5 border border-white/20 hover:bg-black/80 transition-colors"
            data-testid="link-hero-app-store"
            aria-label="Download on the App Store"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-white/80 uppercase tracking-wide">Download on the</div>
              <div className="text-lg font-semibold text-white -mt-0.5">App Store</div>
            </div>
          </a>
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
