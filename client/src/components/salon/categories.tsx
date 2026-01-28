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
  "1": "from-primary/10 to-primary/20",
  "2": "from-accent/10 to-accent/20", 
  "3": "from-primary/10 to-primary/20",
  "4": "from-accent/10 to-accent/20",
  "5": "from-primary/10 to-primary/20",
  "6": "from-accent/10 to-accent/20",
};

const categoryIconColors: Record<string, string> = {
  "1": "text-primary",
  "2": "text-accent",
  "3": "text-primary",
  "4": "text-accent",
  "5": "text-primary",
  "6": "text-accent",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground" data-testid="text-categories-title">
            Skip the calls.
            <br />
            <span className="text-accent">Book your stylist instantly.</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed" data-testid="text-categories-description">
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
                      className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 w-32 border-0 shadow-md"
                      data-testid={`card-category-${category.id}`}
                    >
                      <CardContent className="p-5 flex flex-col items-center text-center">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3`}>
                          <Icon className={`w-6 h-6 ${categoryIconColors[category.id]}`} />
                        </div>
                        <span
                          className="text-sm font-medium text-foreground"
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
                  <Card className="w-36 shadow-lg border-0">
                    <CardContent className="p-5 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center mb-3">
                        <Calendar className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        Book Now
                      </span>
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
                      className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 w-32 border-0 shadow-md"
                      data-testid={`card-category-${category.id}`}
                    >
                      <CardContent className="p-5 flex flex-col items-center text-center">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3`}>
                          <Icon className={`w-6 h-6 ${categoryIconColors[category.id]}`} />
                        </div>
                        <span
                          className="text-sm font-medium text-foreground"
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
                    className="group cursor-pointer hover-elevate overflow-visible transition-all duration-300 border-0 shadow-md"
                    data-testid={`card-category-mobile-${category.id}`}
                  >
                    <CardContent className="p-5 flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${categoryColors[category.id]} flex items-center justify-center mb-3`}>
                        <Icon className={`w-6 h-6 ${categoryIconColors[category.id]}`} />
                      </div>
                      <span className="text-sm font-medium text-foreground">
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
