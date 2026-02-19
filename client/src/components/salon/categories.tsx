import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import type { Category } from "@shared/schema";
import { HaircutIcon, SpaIcon, SkincareIcon, MakeupIcon, HairColourIcon, NailsIcon } from "./category-icons";

import haircutMale from "../../assets/videos/haircut-male.mp4";
import haircutFemale from "../../assets/videos/haircut-female.mp4";
import spaMale from "../../assets/videos/spa-male.mp4";
import spaFemale from "../../assets/videos/spa-female.mp4";
import skincareMale from "../../assets/videos/skincare-male.mp4";
import skincareFemale from "../../assets/videos/skincare-female.mp4";
import makeupMale from "../../assets/videos/makeup-male.mp4";
import makeupFemale from "../../assets/videos/makeup-female.mp4";
import haircolourMale from "../../assets/videos/haircolour-male.mp4";
import haircolourFemale from "../../assets/videos/haircolour-female.mp4";
import nailsMale from "../../assets/videos/nails-male.mp4";
import nailsFemale from "../../assets/videos/nails-female.mp4";

const serviceVideosByName: Record<string, string[]> = {
  haircut: [haircutMale, haircutFemale],
  spa: [spaMale, spaFemale],
  skincare: [skincareMale, skincareFemale],
  makeup: [makeupMale, makeupFemale],
  "hair colour": [haircolourMale, haircolourFemale],
  nails: [nailsMale, nailsFemale],
};

const allVideos: string[] = Object.values(serviceVideosByName).flat();

const categoryIconComponents: Record<string, ({ className }: { className?: string }) => JSX.Element> = {
  Scissors: HaircutIcon,
  Bath: SpaIcon,
  Sparkles: SkincareIcon,
  Brush: MakeupIcon,
  Palette: HairColourIcon,
  Fingerprint: NailsIcon,
};

const categoryColorsByIcon: Record<string, string> = {
  Scissors: "from-rose-400 to-rose-500",
  Bath: "from-emerald-400 to-emerald-500",
  Sparkles: "from-pink-400 to-pink-500",
  Brush: "from-amber-400 to-amber-500",
  Palette: "from-sky-400 to-sky-500",
  Fingerprint: "from-violet-400 to-violet-500",
};

const categoryPillColors: Record<string, { bg: string; text: string; ring: string }> = {
  Scissors: { bg: "bg-rose-500", text: "text-white", ring: "ring-rose-300" },
  Bath: { bg: "bg-emerald-500", text: "text-white", ring: "ring-emerald-300" },
  Sparkles: { bg: "bg-pink-500", text: "text-white", ring: "ring-pink-300" },
  Brush: { bg: "bg-amber-500", text: "text-white", ring: "ring-amber-300" },
  Palette: { bg: "bg-sky-500", text: "text-white", ring: "ring-sky-300" },
  Fingerprint: { bg: "bg-violet-500", text: "text-white", ring: "ring-violet-300" },
};

const defaultPillColor = { bg: "bg-gray-500", text: "text-white", ring: "ring-gray-300" };

function getRandomVideoForCategory(category: Category): string {
  const nameLower = category.name.toLowerCase();
  let videos: string[] | undefined;
  
  if (serviceVideosByName[nameLower]) {
    videos = serviceVideosByName[nameLower];
  } else {
    for (const key of Object.keys(serviceVideosByName)) {
      if (nameLower.includes(key) || key.includes(nameLower)) {
        videos = serviceVideosByName[key];
        break;
      }
    }
  }
  
  if (videos && videos.length > 0) {
    return videos[Math.floor(Math.random() * videos.length)];
  }
  return allVideos[Math.floor(Math.random() * allVideos.length)];
}

function getRandomVideo(): string {
  return allVideos[Math.floor(Math.random() * allVideos.length)];
}

function getCategoryColor(category: Category): string {
  return categoryColorsByIcon[category.icon] || "from-gray-400 to-gray-500";
}

interface CategoriesProps {
  categories: Category[];
}

function CrossfadeVideoPlayer({ src, testId }: { src: string; testId: string }) {
  const [activeVideo, setActiveVideo] = useState<'A' | 'B'>('A');
  const [videoASrc, setVideoASrc] = useState(src);
  const [videoBSrc, setVideoBSrc] = useState(src);
  const pendingTransitionRef = useRef<'A' | 'B' | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (src === (activeVideo === 'A' ? videoASrc : videoBSrc)) return;
    
    const targetSide = activeVideo === 'A' ? 'B' : 'A';
    pendingTransitionRef.current = targetSide;
    
    if (targetSide === 'A') {
      setVideoASrc(src);
    } else {
      setVideoBSrc(src);
    }
  }, [src, activeVideo, videoASrc, videoBSrc]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const handleVideoReady = useCallback((which: 'A' | 'B') => {
    if (which === pendingTransitionRef.current) {
      pendingTransitionRef.current = null;
      
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      
      transitionTimeoutRef.current = window.setTimeout(() => {
        setActiveVideo(which);
      }, 50);
    }
  }, []);

  return (
    <div className="relative w-full h-full bg-[#0f172a] overflow-hidden">
      <video
        src={videoASrc}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => handleVideoReady('A')}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          activeVideo === 'A' ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
        data-testid={`${testId}-a`}
      />
      <video
        src={videoBSrc}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => handleVideoReady('B')}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          activeVideo === 'B' ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
        data-testid={`${testId}-b`}
      />
    </div>
  );
}

export function Categories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    categories.length > 0 ? categories[0] : null
  );
  const [currentVideo, setCurrentVideo] = useState<string>(() => getRandomVideo());
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const clearAllTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (categories.length === 0) return;
    intervalRef.current = window.setInterval(() => {
      setSelectedCategory(prev => {
        const currentIndex = prev ? categories.findIndex(c => c.id === prev.id) : -1;
        const nextIndex = (currentIndex + 1) % categories.length;
        const nextCategory = categories[nextIndex];
        if (!nextCategory) return prev;
        setCurrentVideo(getRandomVideoForCategory(nextCategory));
        return nextCategory;
      });
    }, 5000);
  }, [categories]);

  const handleCategoryClick = useCallback((category: Category) => {
    setSelectedCategory(category);
    setCurrentVideo(getRandomVideoForCategory(category));
    
    clearAllTimers();
    
    timeoutRef.current = window.setTimeout(() => {
      startAutoRotate();
    }, 10000);
  }, [clearAllTimers, startAutoRotate]);

  useEffect(() => {
    startAutoRotate();
    return () => {
      clearAllTimers();
    };
  }, [startAutoRotate, clearAllTimers]);
  
  if (!categories.length || !selectedCategory) {
    return null;
  }

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
          <svg
            className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none"
            viewBox="0 0 1200 520"
            preserveAspectRatio="xMidYMid meet"
          >
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
            <div className="flex flex-col gap-5 items-end">
              {leftCategories.map((category, index) => {
                const pillColor = categoryPillColors[category.icon] || defaultPillColor;
                const offsets = [
                  { x: 160, y: -10 },
                  { x: 200, y: 0 },
                  { x: 160, y: 10 },
                ];
                const isSelected = selectedCategory.id === category.id;
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
                      className={`cursor-pointer transition-all duration-300 rounded-full px-5 py-2.5 font-semibold text-sm shadow-md ${isSelected ? `${pillColor.bg} ${pillColor.text} ring-2 ${pillColor.ring} shadow-lg` : 'bg-muted text-muted-foreground dark:bg-white/10 dark:text-white/70'}`}
                      data-testid={`card-category-${category.id}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <span data-testid={`text-category-name-${category.id}`}>
                        {category.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="relative mx-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl rounded-full scale-150" />
              
              <div className="w-72 h-[520px] bg-[#0f172a] rounded-[3rem] p-3 shadow-2xl relative">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <CrossfadeVideoPlayer
                    src={currentVideo}
                    testId="video-salon-services"
                  />
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#0f172a] rounded-full" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-700 rounded-full" />
              </div>
            </motion.div>

            <div className="flex flex-col gap-5 items-start">
              {rightCategories.map((category, index) => {
                const pillColor = categoryPillColors[category.icon] || defaultPillColor;
                const offsets = [
                  { x: -160, y: -10 },
                  { x: -200, y: 0 },
                  { x: -160, y: 10 },
                ];
                const isSelected = selectedCategory.id === category.id;
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
                      className={`cursor-pointer transition-all duration-300 rounded-full px-5 py-2.5 font-semibold text-sm shadow-md ${isSelected ? `${pillColor.bg} ${pillColor.text} ring-2 ${pillColor.ring} shadow-lg` : 'bg-muted text-muted-foreground dark:bg-white/10 dark:text-white/70'}`}
                      data-testid={`card-category-${category.id}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <span data-testid={`text-category-name-${category.id}`}>
                        {category.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:hidden flex flex-col items-center gap-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-56 h-[400px] bg-[#0f172a] rounded-[2.5rem] p-2 shadow-2xl relative">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <CrossfadeVideoPlayer
                    src={currentVideo}
                    testId="video-salon-services-mobile"
                  />
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0f172a] rounded-full" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
              </div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {categories.map((category, index) => {
                const pillColor = categoryPillColors[category.icon] || defaultPillColor;
                const isSelected = selectedCategory.id === category.id;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`cursor-pointer transition-all duration-300 rounded-full px-4 py-2 font-semibold text-xs shadow-md ${isSelected ? `${pillColor.bg} ${pillColor.text} ring-2 ${pillColor.ring} shadow-lg` : 'bg-muted text-muted-foreground dark:bg-white/10 dark:text-white/70'}`}
                      data-testid={`card-category-mobile-${category.id}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.name}
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
