import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import type { Salon } from "@shared/schema";

interface FeaturedSalonsProps {
  salons: Salon[];
}

export function FeaturedSalons({ salons }: FeaturedSalonsProps) {
  if (!salons.length) return null;

  return (
    <section id="featured-salons" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground" data-testid="text-featured-title">
            Featured Salons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-featured-description">
            Top-rated salons loved by our customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salons.map((salon, index) => (
            <motion.div
              key={salon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group cursor-pointer overflow-hidden hover-elevate transition-all duration-300 h-full"
                data-testid={`card-salon-${salon.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <h3
                        className="font-bold text-lg text-foreground mb-1"
                        data-testid={`text-salon-name-${salon.id}`}
                      >
                        {salon.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span data-testid={`text-salon-location-${salon.id}`}>{salon.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/40 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="font-semibold text-sm text-amber-700 dark:text-amber-400" data-testid={`text-salon-rating-${salon.id}`}>
                        {salon.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {salon.services.slice(0, 3).map((service) => (
                      <Badge
                        key={service}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-salon-service-${salon.id}-${service.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {service}
                      </Badge>
                    ))}
                    {salon.services.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{salon.services.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <p className="font-bold text-lg text-foreground" data-testid={`text-salon-price-${salon.id}`}>
                        ₹{salon.startingPrice}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`text-salon-reviews-${salon.id}`}>
                      {salon.reviewCount} reviews
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
