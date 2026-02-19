import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Location } from "@shared/schema";

import cityDelhi from "../../assets/images/city-delhi.jpg";
import cityMumbai from "../../assets/images/city-mumbai.jpg";
import cityBangalore from "../../assets/images/city-bangalore.jpg";
import cityChennai from "../../assets/images/city-chennai.jpg";
import cityHyderabad from "../../assets/images/city-hyderabad.jpg";
import cityPune from "../../assets/images/city-pune.jpg";

interface LocationsProps {
  locations: Location[];
}

const cityImages: Record<string, string> = {
  delhi: cityDelhi,
  mumbai: cityMumbai,
  bangalore: cityBangalore,
  chennai: cityChennai,
  hyderabad: cityHyderabad,
  pune: cityPune,
};

export function Locations({ locations }: LocationsProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedLocation = locations.find((l) => l.id === selectedId);
  const selectedImage = selectedLocation ? cityImages[selectedLocation.image] : null;

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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {locations.map((location, index) => {
            const image = cityImages[location.image];
            return (
              <motion.div
                key={location.id}
                layoutId={`location-card-${location.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedId(location.id)}
              >
                <div
                  className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md ring-1 ring-black/5 dark:ring-white/10"
                  data-testid={`card-location-${location.id}`}
                >
                  {image && (
                    <img
                      src={image}
                      alt={location.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <span
                      className="inline-block px-3 py-1 rounded-md bg-white/20 backdrop-blur-md text-white font-semibold text-sm sm:text-base tracking-wide"
                      data-testid={`text-location-name-${location.id}`}
                    >
                      {location.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedId !== null && selectedLocation && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              data-testid="overlay-location-expanded"
            />
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 pointer-events-none">
              <motion.div
                layoutId={`location-card-${selectedId}`}
                className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl aspect-[4/3] pointer-events-auto"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt={selectedLocation.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <button
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white"
                  onClick={() => setSelectedId(null)}
                  data-testid="button-close-location"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-block px-4 py-1.5 rounded-md bg-white/20 backdrop-blur-md text-white font-bold text-xl sm:text-2xl tracking-wide">
                    {selectedLocation.name}
                  </span>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
