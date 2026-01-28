import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Heart, Palette, Hand, Gem, Calendar, type LucideIcon } from "lucide-react";
import type { Category } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Sparkles,
  Heart,
  Palette,
  Hand,
  Gem,
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
                    <Card
                      className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 w-36 border-0 shadow-lg hover:shadow-xl"
                      data-testid={`card-category-${category.id}`}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-4 shadow-md`}>
                          <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                        </div>
                        <span
                          className="text-sm font-semibold text-foreground"
                          data-testid={`text-category-name-${category.id}`}
                        >
                          {category.name}
                        </span>
                      </CardContent>
                    </Card>
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
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-[2.5rem] flex items-center justify-center">
                  <Card className="w-48 shadow-2xl border-0">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-base font-bold text-foreground mb-1">
                        Book Now
                      </span>
                      <span className="text-xs text-muted-foreground mb-4">
                        Quick & Easy
                      </span>
                      <div className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white text-sm font-semibold shadow-md">
                        Get Started
                      </div>
                    </CardContent>
                  </Card>
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
                    <Card
                      className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 w-36 border-0 shadow-lg hover:shadow-xl"
                      data-testid={`card-category-${category.id}`}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-4 shadow-md`}>
                          <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                        </div>
                        <span
                          className="text-sm font-semibold text-foreground"
                          data-testid={`text-category-name-${category.id}`}
                        >
                          {category.name}
                        </span>
                      </CardContent>
                    </Card>
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
                  <Card
                    className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 border-0 shadow-lg hover:shadow-xl"
                    data-testid={`card-category-mobile-${category.id}`}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-4 shadow-md`}>
                        <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {category.name}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
