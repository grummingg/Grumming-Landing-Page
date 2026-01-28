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

      {/* Dark Teal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5F5D]/85 via-[#2D5F5D]/75 to-[#1a3a39]/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a39]/60 to-transparent" />

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
    </section>
  );
}
