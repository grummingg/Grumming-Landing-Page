import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Heart, Palette, Hand, Gem, type LucideIcon } from "lucide-react";
import type { Category } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Sparkles,
  Heart,
  Palette,
  Hand,
  Gem,
};

interface CategoriesProps {
  categories: Category[];
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <section id="categories" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-categories-title">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-categories-description">
            Explore our wide range of beauty and wellness services
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
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
                  data-testid={`card-category-${category.id}`}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3
                      className="font-semibold text-base"
                      data-testid={`text-category-name-${category.id}`}
                    >
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
