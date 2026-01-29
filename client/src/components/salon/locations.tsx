import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Location } from "@shared/schema";

interface LocationsProps {
  locations: Location[];
}

const cityColors: Record<string, { bg: string; icon: string; accent: string }> = {
  delhi: { bg: "bg-gradient-to-br from-rose-50 to-rose-100", icon: "text-rose-500", accent: "bg-rose-500" },
  mumbai: { bg: "bg-gradient-to-br from-blue-50 to-blue-100", icon: "text-blue-500", accent: "bg-blue-500" },
  bangalore: { bg: "bg-gradient-to-br from-emerald-50 to-emerald-100", icon: "text-emerald-500", accent: "bg-emerald-500" },
  chennai: { bg: "bg-gradient-to-br from-violet-50 to-violet-100", icon: "text-violet-500", accent: "bg-violet-500" },
  hyderabad: { bg: "bg-gradient-to-br from-amber-50 to-amber-100", icon: "text-amber-500", accent: "bg-amber-500" },
  pune: { bg: "bg-gradient-to-br from-cyan-50 to-cyan-100", icon: "text-cyan-500", accent: "bg-cyan-500" },
};

export function Locations({ locations }: LocationsProps) {
  return (
    <section id="locations" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {locations.map((location, index) => {
            const colors = cityColors[location.image] || { bg: "bg-gradient-to-br from-gray-50 to-gray-100", icon: "text-gray-500", accent: "bg-gray-500" };
            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card
                  className={`group cursor-pointer overflow-hidden hover-elevate transition-all duration-300 border-0 shadow-sm hover:shadow-lg ${colors.bg}`}
                  data-testid={`card-location-${location.id}`}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <MapPin className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h3
                      className="font-bold text-lg text-gray-900"
                      data-testid={`text-location-name-${location.id}`}
                    >
                      {location.name}
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
