import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import type { Salon } from "@shared/schema";

interface FeaturedSalonsProps {
  salons: Salon[];
}

const salonColors = [
  "from-rose-400 to-pink-500",
  "from-blue-400 to-indigo-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-purple-400 to-violet-500",
];

export function FeaturedSalons({ salons }: FeaturedSalonsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="salons" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-end justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" data-testid="text-salons-title">
              Featured Salons
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-salons-description">
              Top-rated salons handpicked for you
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              data-testid="button-scroll-left"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              data-testid="button-scroll-right"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {salons.map((salon, index) => (
            <motion.div
              key={salon.id}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden hover-elevate transition-all duration-300 h-full"
                data-testid={`card-salon-${salon.id}`}
              >
                <div className={`h-48 bg-gradient-to-br ${salonColors[index % salonColors.length]} relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-card text-card-foreground gap-1">
                      <Star className="w-3 h-3 fill-accent text-accent" />
                      {salon.rating}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {salon.services.slice(0, 3).map((service, i) => (
                        <Badge key={i} variant="secondary" className="bg-card/80 text-card-foreground text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3
                    className="font-bold text-lg mb-2"
                    data-testid={`text-salon-name-${salon.id}`}
                  >
                    {salon.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span data-testid={`text-salon-location-${salon.id}`}>
                      {salon.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <div className="font-bold text-lg text-primary" data-testid={`text-salon-price-${salon.id}`}>
                        ₹{salon.startingPrice}
                      </div>
                    </div>
                    <Button data-testid={`button-book-salon-${salon.id}`}>
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg" data-testid="button-view-all-salons">
            View All Salons
          </Button>
        </div>
      </div>
    </section>
  );
}
