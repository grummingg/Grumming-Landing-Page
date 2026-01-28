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
  "1": "from-rose-100 to-rose-200",
  "2": "from-emerald-100 to-emerald-200", 
  "3": "from-pink-100 to-pink-200",
  "4": "from-amber-100 to-amber-200",
  "5": "from-blue-100 to-blue-200",
  "6": "from-purple-100 to-purple-200",
};

const categoryIconColors: Record<string, string> = {
  "1": "text-rose-500",
  "2": "text-emerald-500",
  "3": "text-pink-500",
  "4": "text-amber-500",
  "5": "text-blue-500",
  "6": "text-purple-500",
};

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  const leftCategories = categories.slice(0, 3);
  const rightCategories = categories.slice(3, 6);

  return (
    <section id="categories" className="py-20 sm:py-24 bg-gradient-to-b from-rose-50/50 to-background dark:from-rose-950/20 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-categories-title">
            Skip the calls.
            <br />
            <span className="text-primary">Book your stylist instantly.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto" data-testid="text-categories-description">
            Discover top-rated stylists and book your next appointment in just a few taps
          </p>
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
                      className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 w-28"
                      data-testid={`card-category-${category.id}`}
                    >
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3`}>
                          <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                        </div>
                        <span
                          className="text-sm font-medium"
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
              <div className="w-64 h-[480px] bg-foreground dark:bg-card rounded-[3rem] p-3 shadow-2xl relative">
                <div className="w-full h-full bg-gradient-to-br from-card to-muted rounded-[2.5rem] flex items-center justify-center">
                  <Card className="w-32 shadow-lg">
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/30 flex items-center justify-center mb-3">
                        <Calendar className="w-7 h-7 text-accent" />
                      </div>
                      <span className="text-sm font-medium">
                        Book Now
                      </span>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground dark:bg-card rounded-full" />
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
                      className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 w-28"
                      data-testid={`card-category-${category.id}`}
                    >
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3`}>
                          <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                        </div>
                        <span
                          className="text-sm font-medium"
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
                    className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300"
                    data-testid={`card-category-mobile-${category.id}`}
                  >
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3`}>
                        <Icon className={`w-7 h-7 ${categoryIconColors[category.id]}`} />
                      </div>
                      <span className="text-sm font-medium">
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
