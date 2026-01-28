import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Location } from "@shared/schema";

interface LocationsProps {
  locations: Location[];
}

const cityGradients: Record<string, string> = {
  delhi: "from-rose-500 to-orange-500",
  mumbai: "from-blue-500 to-cyan-500",
  bangalore: "from-green-500 to-emerald-500",
  chennai: "from-purple-500 to-pink-500",
  hyderabad: "from-amber-500 to-yellow-500",
  pune: "from-teal-500 to-green-500",
};

export function Locations({ locations }: LocationsProps) {
  return (
    <section id="locations" className="py-20 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-locations-title">
            Popular Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-locations-description">
            Find the best salons in your city
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {locations.map((location, index) => {
            const gradient = cityGradients[location.image] || "from-gray-500 to-gray-600";
            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden hover-elevate transition-all duration-300"
                  data-testid={`card-location-${location.id}`}
                >
                  <CardContent className="p-0">
                    <div className={`h-32 sm:h-40 bg-gradient-to-br ${gradient} relative`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <MapPin className="w-6 h-6 mb-2 opacity-80" />
                        <h3
                          className="font-bold text-lg"
                          data-testid={`text-location-name-${location.id}`}
                        >
                          {location.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <Badge variant="secondary" data-testid={`badge-location-count-${location.id}`}>
                        {location.salonCount}+ Salons
                      </Badge>
                    </div>
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
