import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Location } from "@shared/schema";

interface LocationsProps {
  locations: Location[];
}

const cityGradients: Record<string, string> = {
  delhi: "from-slate-700 to-slate-800",
  mumbai: "from-indigo-700 to-indigo-800",
  bangalore: "from-emerald-700 to-emerald-800",
  chennai: "from-violet-700 to-violet-800",
  hyderabad: "from-cyan-700 to-cyan-800",
  pune: "from-teal-700 to-teal-800",
};

export function Locations({ locations }: LocationsProps) {
  return (
    <section id="locations" className="py-20 sm:py-24 bg-white dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900" data-testid="text-locations-title">
            Popular Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-locations-description">
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
                  className="group cursor-pointer overflow-hidden hover-elevate transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md"
                  data-testid={`card-location-${location.id}`}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="font-semibold text-lg text-gray-900 mb-2"
                      data-testid={`text-location-name-${location.id}`}
                    >
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500" data-testid={`badge-location-count-${location.id}`}>
                      {location.salonCount}+ Salons
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
