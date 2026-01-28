import { motion } from "framer-motion";
import { Scissors, Bath, Sparkles, Brush, Heart, Fingerprint, type LucideIcon } from "lucide-react";
import type { Category } from "@shared/schema";
import salonVideo from "../assets/videos/salon-services.mp4";

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

        <div className="relative flex items-center justify-center min-h-[500px]">
          <div className="hidden lg:flex items-center justify-between w-full max-w-6xl">
            <div className="flex flex-col gap-6 items-end">
              {leftCategories.map((category, index) => {
                const Icon = iconMap[category.icon] || Scissors;
                const offsets = [
                  { x: 0, y: -40 },
                  { x: 40, y: 0 },
                  { x: 0, y: 40 },
                ];
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ transform: `translateX(${offsets[index].x}px) translateY(${offsets[index].y}px)` }}
                  >
                    <div
                      className="group cursor-pointer transition-all duration-300 w-36 p-6 flex flex-col items-center text-center"
                      data-testid={`card-category-${category.id}`}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                        <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                      </div>
                      <span
                        className="text-sm font-semibold text-foreground"
                        data-testid={`text-category-name-${category.id}`}
                      >
                        {category.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="relative mx-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-64 h-[480px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl relative">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <video
                    src={salonVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    data-testid="video-salon-services"
                  />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
              </div>
            </motion.div>

            <div className="flex flex-col gap-6 items-start">
              {rightCategories.map((category, index) => {
                const Icon = iconMap[category.icon] || Scissors;
                const offsets = [
                  { x: 0, y: -40 },
                  { x: -40, y: 0 },
                  { x: 0, y: 40 },
                ];
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ transform: `translateX(${offsets[index].x}px) translateY(${offsets[index].y}px)` }}
                  >
                    <div
                      className="group cursor-pointer transition-all duration-300 w-36 p-6 flex flex-col items-center text-center"
                      data-testid={`card-category-${category.id}`}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                        <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                      </div>
                      <span
                        className="text-sm font-semibold text-foreground"
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

          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                    className="group cursor-pointer transition-all duration-300 p-6 flex flex-col items-center text-center"
                    data-testid={`card-category-mobile-${category.id}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                      <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {category.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
