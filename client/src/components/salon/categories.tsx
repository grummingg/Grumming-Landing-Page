import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Bath, Sparkles, Brush, Heart, Fingerprint, type LucideIcon } from "lucide-react";
import type { Category } from "@shared/schema";
import haircutVideo from "../../assets/videos/service-haircut.mp4";
import spaVideo from "../../assets/videos/service-spa.mp4";
import skincareVideo from "../../assets/videos/service-skincare.mp4";
import makeupVideo from "../../assets/videos/service-makeup.mp4";
import wellnessVideo from "../../assets/videos/service-wellness.mp4";
import nailsVideo from "../../assets/videos/service-nails.mp4";

const serviceVideos: Record<string, string> = {
  "1": haircutVideo,
  "2": spaVideo,
  "3": skincareVideo,
  "4": makeupVideo,
  "5": wellnessVideo,
  "6": nailsVideo,
};

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Bath,
  Sparkles,
  Brush,
  Heart,
  Fingerprint,
};

const categoryColors: Record<string, string> = {
  "1": "from-rose-400 to-rose-500",
  "2": "from-emerald-400 to-emerald-500", 
  "3": "from-pink-400 to-pink-500",
  "4": "from-amber-400 to-amber-500",
  "5": "from-sky-400 to-sky-500",
  "6": "from-violet-400 to-violet-500",
};

const categoryIconColors: Record<string, string> = {
  "1": "text-white",
  "2": "text-white",
  "3": "text-white",
  "4": "text-white",
  "5": "text-white",
  "6": "text-white",
};

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState("1");
  const leftCategories = categories.slice(0, 3);
  const rightCategories = categories.slice(3, 6);

  return (
    <section id="categories" className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-categories-title">
            Skip the calls.
            <br />
            <span className="text-accent">Book your stylist instantly.</span>
          </h2>
        </motion.div>

        <div className="relative flex items-center justify-center min-h-[520px]">
          {/* Decorative connecting lines - SVG */}
          <svg
            className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none"
            viewBox="0 0 1200 520"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Left side curved lines */}
            <motion.path
              d="M 320 100 Q 450 100 520 200"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.path
              d="M 350 260 Q 450 260 520 260"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.path
              d="M 320 420 Q 450 420 520 320"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* Right side curved lines */}
            <motion.path
              d="M 880 100 Q 750 100 680 200"
              stroke="url(#gradient4)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.path
              d="M 850 260 Q 750 260 680 260"
              stroke="url(#gradient5)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.path
              d="M 880 420 Q 750 420 680 320"
              stroke="url(#gradient6)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* Small decorative dots along lines */}
            <motion.circle
              cx="400"
              cy="100"
              r="4"
              fill="#f472b6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.circle
              cx="420"
              cy="260"
              r="4"
              fill="#34d399"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            />
            <motion.circle
              cx="400"
              cy="420"
              r="4"
              fill="#ec4899"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            />
            <motion.circle
              cx="800"
              cy="100"
              r="4"
              fill="#fbbf24"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.circle
              cx="780"
              cy="260"
              r="4"
              fill="#38bdf8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            />
            <motion.circle
              cx="800"
              cy="420"
              r="4"
              fill="#a78bfa"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="gradient4" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="gradient5" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="gradient6" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>

          <div className="hidden lg:flex items-center justify-between w-full max-w-6xl relative z-10">
            {/* Left Categories */}
            <div className="flex flex-col gap-8 items-end">
              {leftCategories.map((category, index) => {
                const Icon = iconMap[category.icon] || Scissors;
                const offsets = [
                  { x: 160, y: -10 },
                  { x: 200, y: 0 },
                  { x: 160, y: 10 },
                ];
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    style={{ transform: `translateX(${offsets[index].x}px) translateY(${offsets[index].y}px)` }}
                  >
                    <div
                      className={`group cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${selectedCategory === category.id ? 'scale-110' : ''}`}
                      data-testid={`card-category-${category.id}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.15)] group-hover:shadow-[0_12px_40px_-6px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-all duration-300 ${selectedCategory === category.id ? 'ring-4 ring-primary/30 shadow-[0_12px_40px_-6px_rgba(0,0,0,0.3)]' : ''}`}>
                        <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} strokeWidth={2} />
                      </div>
                      <span
                        className={`text-sm font-semibold transition-colors ${selectedCategory === category.id ? 'text-primary' : 'text-foreground'}`}
                        data-testid={`text-category-name-${category.id}`}
                      >
                        {category.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Phone Mockup */}
            <motion.div
              className="relative mx-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl rounded-full scale-150" />
              
              <div className="w-72 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl relative">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <video
                    key={selectedCategory}
                    src={serviceVideos[selectedCategory]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    data-testid="video-salon-services"
                  />
                </div>
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-gray-900 rounded-full" />
                {/* Phone button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-700 rounded-full" />
              </div>
            </motion.div>

            {/* Right Categories */}
            <div className="flex flex-col gap-8 items-start">
              {rightCategories.map((category, index) => {
                const Icon = iconMap[category.icon] || Scissors;
                const offsets = [
                  { x: -160, y: -10 },
                  { x: -200, y: 0 },
                  { x: -160, y: 10 },
                ];
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    style={{ transform: `translateX(${offsets[index].x}px) translateY(${offsets[index].y}px)` }}
                  >
                    <div
                      className={`group cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${selectedCategory === category.id ? 'scale-110' : ''}`}
                      data-testid={`card-category-${category.id}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.15)] group-hover:shadow-[0_12px_40px_-6px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-all duration-300 ${selectedCategory === category.id ? 'ring-4 ring-primary/30 shadow-[0_12px_40px_-6px_rgba(0,0,0,0.3)]' : ''}`}>
                        <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} strokeWidth={2} />
                      </div>
                      <span
                        className={`text-sm font-semibold transition-colors ${selectedCategory === category.id ? 'text-primary' : 'text-foreground'}`}
                        data-testid={`text-category-name-${category.id}`}
                      >
                        {category.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Grid with Phone */}
          <div className="lg:hidden flex flex-col items-center gap-8">
            {/* Mobile Phone Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-56 h-[400px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl relative">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <video
                    key={`mobile-${selectedCategory}`}
                    src={serviceVideos[selectedCategory]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    data-testid="video-salon-services-mobile"
                  />
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
              </div>
            </motion.div>

            {/* Mobile Categories Grid */}
            <div className="grid grid-cols-3 gap-4">
              {categories.map((category, index) => {
                const Icon = iconMap[category.icon] || Scissors;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`group cursor-pointer transition-all duration-300 p-3 flex flex-col items-center text-center ${selectedCategory === category.id ? 'scale-110' : ''}`}
                      data-testid={`card-category-mobile-${category.id}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <div className={`w-14 h-14 rounded-[1rem] bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-2 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.15)] group-hover:shadow-[0_12px_40px_-6px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-all duration-300 ${selectedCategory === category.id ? 'ring-4 ring-primary/30' : ''}`}>
                        <Icon className={`w-6 h-6 ${categoryIconColors[category.id]}`} strokeWidth={2} />
                      </div>
                      <span className={`text-xs font-semibold transition-colors ${selectedCategory === category.id ? 'text-primary' : 'text-foreground'}`}>
                        {category.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
