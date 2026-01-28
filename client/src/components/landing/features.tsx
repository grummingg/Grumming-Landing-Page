import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Sparkles,
  Globe,
  Palette,
  Code,
  type LucideIcon,
} from "lucide-react";
import type { Feature } from "@shared/schema";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  Sparkles,
  Globe,
  Palette,
  Code,
};

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-testid="text-features-title"
          >
            Everything you need to succeed
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-features-description"
          >
            Powerful features designed to help you build, launch, and scale your
            product faster than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover-elevate transition-all duration-300 overflow-visible"
                  data-testid={`card-feature-${feature.id}`}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      data-testid={`text-feature-title-${feature.id}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-muted-foreground"
                      data-testid={`text-feature-description-${feature.id}`}
                    >
                      {feature.description}
                    </p>
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
