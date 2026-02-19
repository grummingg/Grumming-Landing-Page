import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Location } from "@shared/schema";

interface LocationsProps {
  locations: Location[];
}

const cityColors: Record<string, { bg: string; icon: string; accent: string }> = {
  delhi: { bg: "bg-white dark:bg-[#1e293b]", icon: "text-rose-500", accent: "bg-rose-500" },
  mumbai: { bg: "bg-white dark:bg-[#1e293b]", icon: "text-blue-500", accent: "bg-blue-500" },
  bangalore: { bg: "bg-white dark:bg-[#1e293b]", icon: "text-emerald-500", accent: "bg-emerald-500" },
  chennai: { bg: "bg-white dark:bg-[#1e293b]", icon: "text-violet-500", accent: "bg-violet-500" },
  hyderabad: { bg: "bg-white dark:bg-[#1e293b]", icon: "text-amber-500", accent: "bg-amber-500" },
  pune: { bg: "bg-white dark:bg-[#1e293b]", icon: "text-cyan-500", accent: "bg-cyan-500" },
};

export function Locations({ locations }: LocationsProps) {
  return (
    <section id="locations" className="py-20 sm:py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground" data-testid="text-locations-title">
            Popular Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-locations-description">
            Find the best services in your city
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {locations.map((location, index) => {
            const colors = cityColors[location.image] || { bg: "bg-white dark:bg-[#1e293b]", icon: "text-gray-500", accent: "bg-gray-500" };
            return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card
                  className={`group cursor-pointer overflow-hidden hover-elevate transition-all duration-300 border-0 shadow-sm ${colors.bg}`}
                  data-testid={`card-location-${location.id}`}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <MapPin className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h3
                      className="font-bold text-lg text-foreground"
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
