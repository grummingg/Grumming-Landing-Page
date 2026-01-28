import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import type { Salon } from "@shared/schema";

interface FeaturedSalonsProps {
  salons: Salon[];
}

const salonGradients: Record<string, string> = {
  salon1: "from-rose-400 to-pink-500",
  salon2: "from-purple-400 to-indigo-500",
  salon3: "from-emerald-400 to-teal-500",
  salon4: "from-amber-400 to-orange-500",
  salon5: "from-sky-400 to-blue-500",
};

export function FeaturedSalons({ salons }: FeaturedSalonsProps) {
  return (
    <section id="featured" className="py-20 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-featured-title">
            Featured Salons
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-featured-description">
            Top-rated salons handpicked for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salons.slice(0, 6).map((salon, index) => {
            const gradient = salonGradients[salon.image] || "from-gray-400 to-gray-500";
            return (
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
                  <CardContent className="p-0">
                    <div className={`h-40 bg-gradient-to-br ${gradient} relative`}>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 text-foreground gap-1">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {salon.rating}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3
                          className="font-bold text-lg text-white drop-shadow-md"
                          data-testid={`text-salon-name-${salon.id}`}
                        >
                          {salon.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span data-testid={`text-salon-location-${salon.id}`}>{salon.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
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
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span className="text-muted-foreground text-sm">Starting from</span>
                          <p className="font-bold text-lg" data-testid={`text-salon-price-${salon.id}`}>
                            ₹{salon.startingPrice}
                          </p>
                        </div>
                        <Button size="sm" className="gap-1" data-testid={`button-book-salon-${salon.id}`}>
                          Book Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {salon.reviewCount} reviews
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-salons">
            View All Salons
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
