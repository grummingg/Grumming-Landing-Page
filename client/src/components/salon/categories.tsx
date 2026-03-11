import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import type { Category } from "@shared/schema";

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
    <div className="relative w-full h-full bg-hero overflow-hidden">
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
        aria-label="Service category preview video"
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
        aria-label="Service category preview video"
      />
    </div>
  );
}

export function Categories({ categories }: CategoriesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState<string>(() =>
    categories.length > 0 ? getRandomVideoForCategory(categories[0]) : allVideos[0]
  );
  const intervalRef = useRef<number | null>(null);

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (categories.length === 0) return;
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIdx = (prev + 1) % categories.length;
        const nextCategory = categories[nextIdx];
        if (nextCategory) {
          setCurrentVideo(getRandomVideoForCategory(nextCategory));
        }
        return nextIdx;
      });
    }, 5000);
  }, [categories]);

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoRotate]);
  
  if (!categories.length) {
    return null;
  }

  return (
    <section id="categories" className="py-10 sm:py-16 bg-background">
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

        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl rounded-full scale-150" />
            
            <div className="w-56 sm:w-72 h-[400px] sm:h-[520px] bg-hero rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl relative">
              <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                <CrossfadeVideoPlayer
                  src={currentVideo}
                  testId="video-salon-services"
                />
              </div>
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 sm:h-7 bg-hero rounded-full" aria-hidden="true" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-1 bg-gray-700 rounded-full" aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            data-testid="category-labels"
          >
            {categories.map((cat, idx) => (
              <span
                key={cat.name}
                className={`text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex
                    ? "bg-accent/15 text-accent"
                    : "text-muted-foreground"
                }`}
                data-testid={`category-label-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
