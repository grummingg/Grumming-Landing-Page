import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Location } from "@shared/schema";

import cityDelhi from "../../assets/images/city-delhi.jpg";
import cityMumbai from "../../assets/images/city-mumbai.jpg";
import cityBangalore from "../../assets/images/city-bangalore.jpg";
import cityChennai from "../../assets/images/city-chennai.jpg";
import cityHyderabad from "../../assets/images/city-hyderabad.jpg";
import cityPune from "../../assets/images/city-pune.jpg";
import cityJaipur from "../../assets/images/city-jaipur.jpg";
import cityKolkata from "../../assets/images/city-kolkata.jpg";
import cityAhmedabad from "../../assets/images/city-ahmedabad.jpg";
import cityLucknow from "../../assets/images/city-lucknow.jpg";
import cityChandigarh from "../../assets/images/city-chandigarh.jpg";
import citySurat from "../../assets/images/city-surat.jpg";
import cityKanpur from "../../assets/images/city-kanpur.jpg";
import cityNagpur from "../../assets/images/city-nagpur.jpg";
import cityVisakhapatnam from "../../assets/images/city-visakhapatnam.jpg";
import cityPatna from "../../assets/images/city-patna.jpg";
import cityBhopal from "../../assets/images/city-bhopal.jpg";
import cityIndore from "../../assets/images/city-indore.jpg";
import cityVadodara from "../../assets/images/city-vadodara.jpg";
import cityLudhiana from "../../assets/images/city-ludhiana.jpg";
import cityAgra from "../../assets/images/city-agra.jpg";
import cityVaranasi from "../../assets/images/city-varanasi.jpg";
import cityCoimbatore from "../../assets/images/city-coimbatore.jpg";
import cityKochi from "../../assets/images/city-kochi.jpg";
import cityThiruvananthapuram from "../../assets/images/city-thiruvananthapuram.jpg";
import cityMadurai from "../../assets/images/city-madurai.jpg";
import cityNashik from "../../assets/images/city-nashik.jpg";
import cityRanchi from "../../assets/images/city-ranchi.jpg";
import cityGuwahati from "../../assets/images/city-guwahati.jpg";
import cityBhubaneswar from "../../assets/images/city-bhubaneswar.jpg";
import cityUdaipur from "../../assets/images/city-udaipur.jpg";
import cityAmritsar from "../../assets/images/city-amritsar.jpg";
import cityNoida from "../../assets/images/city-noida.jpg";
import cityGhaziabad from "../../assets/images/city-ghaziabad.jpg";
import cityGurugram from "../../assets/images/city-gurugram.jpg";
import cityFaridabad from "../../assets/images/city-faridabad.jpg";
import cityMysore from "../../assets/images/city-mysore.jpg";
import cityMangalore from "../../assets/images/city-mangalore.jpg";
import cityRaipur from "../../assets/images/city-raipur.jpg";
import cityDehradun from "../../assets/images/city-dehradun.jpg";
import cityPanaji from "../../assets/images/city-panaji.jpg";
import cityThane from "../../assets/images/city-thane.jpg";
import cityNaviMumbai from "../../assets/images/city-navimumbai.jpg";
import cityPrayagraj from "../../assets/images/city-prayagraj.jpg";
import cityMeerut from "../../assets/images/city-meerut.jpg";
import cityJodhpur from "../../assets/images/city-jodhpur.jpg";
import cityRajkot from "../../assets/images/city-rajkot.jpg";
import cityJabalpur from "../../assets/images/city-jabalpur.jpg";
import cityVijayawada from "../../assets/images/city-vijayawada.jpg";
import citySambhajiNagar from "../../assets/images/city-sambhajinagar.jpg";
import cityJamshedpur from "../../assets/images/city-jamshedpur.jpg";
import cityDhanbad from "../../assets/images/city-dhanbad.jpg";
import cityJalandhar from "../../assets/images/city-jalandhar.jpg";
import cityTrichy from "../../assets/images/city-trichy.jpg";
import cityHubliDharwad from "../../assets/images/city-hublidharwad.jpg";
import cityKolhapur from "../../assets/images/city-kolhapur.jpg";
import citySiliguri from "../../assets/images/city-siliguri.jpg";
import cityPondicherry from "../../assets/images/city-pondicherry.jpg";
import cityAjmer from "../../assets/images/city-ajmer.jpg";
import citySrinagar from "../../assets/images/city-srinagar.jpg";

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
  jaipur: cityJaipur,
  kolkata: cityKolkata,
  ahmedabad: cityAhmedabad,
  lucknow: cityLucknow,
  chandigarh: cityChandigarh,
  surat: citySurat,
  kanpur: cityKanpur,
  nagpur: cityNagpur,
  visakhapatnam: cityVisakhapatnam,
  patna: cityPatna,
  bhopal: cityBhopal,
  indore: cityIndore,
  vadodara: cityVadodara,
  ludhiana: cityLudhiana,
  agra: cityAgra,
  varanasi: cityVaranasi,
  coimbatore: cityCoimbatore,
  kochi: cityKochi,
  thiruvananthapuram: cityThiruvananthapuram,
  madurai: cityMadurai,
  nashik: cityNashik,
  ranchi: cityRanchi,
  guwahati: cityGuwahati,
  bhubaneswar: cityBhubaneswar,
  udaipur: cityUdaipur,
  amritsar: cityAmritsar,
  noida: cityNoida,
  ghaziabad: cityGhaziabad,
  gurugram: cityGurugram,
  faridabad: cityFaridabad,
  mysore: cityMysore,
  mangalore: cityMangalore,
  raipur: cityRaipur,
  dehradun: cityDehradun,
  panaji: cityPanaji,
  thane: cityThane,
  navimumbai: cityNaviMumbai,
  prayagraj: cityPrayagraj,
  meerut: cityMeerut,
  jodhpur: cityJodhpur,
  rajkot: cityRajkot,
  jabalpur: cityJabalpur,
  vijayawada: cityVijayawada,
  sambhajinagar: citySambhajiNagar,
  jamshedpur: cityJamshedpur,
  dhanbad: cityDhanbad,
  jalandhar: cityJalandhar,
  trichy: cityTrichy,
  hublidharwad: cityHubliDharwad,
  kolhapur: cityKolhapur,
  siliguri: citySiliguri,
  pondicherry: cityPondicherry,
  ajmer: cityAjmer,
  srinagar: citySrinagar,
};

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Locations({ locations }: LocationsProps) {
  const [shuffledLocations, setShuffledLocations] = useState<Location[]>([]);
  const [largeIds, setLargeIds] = useState<Set<string>>(new Set());
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doShuffle = useCallback(() => {
    if (isPausedRef.current) return;
    const shuffled = shuffleArray(locations);
    setShuffledLocations(shuffled);
    const largeCount = Math.max(3, Math.floor(locations.length / 12));
    const picked = new Set<string>();
    const indices = shuffleArray(Array.from({ length: shuffled.length }, (_, i) => i));
    for (let i = 0; i < Math.min(largeCount, indices.length); i++) {
      picked.add(shuffled[indices[i]].id);
    }
    setLargeIds(picked);
  }, [locations]);

  useEffect(() => {
    doShuffle();
    const timer = setInterval(doShuffle, 3500);
    return () => clearInterval(timer);
  }, [doShuffle]);

  const pauseRotation = () => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const scheduleResume = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 4000);
  };

  return (
    <section id="locations" className="py-20 sm:py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
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

        <div
          className="grid gap-1.5 sm:gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
            gridAutoRows: "70px",
          }}
        >
          {shuffledLocations.map((location) => {
            const image = cityImages[location.image];
            const isLarge = largeIds.has(location.id);
            const colSpan = isLarge ? 2 : 1;
            const rowSpan = isLarge ? 2 : 1;
            const textSize = isLarge
              ? "text-xs sm:text-sm font-bold"
              : "text-[8px] sm:text-[10px] font-semibold";
            return (
              <motion.div
                key={location.id}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
                className="relative cursor-pointer"
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                  zIndex: isLarge ? 5 : 1,
                }}
                onMouseEnter={pauseRotation}
                onMouseLeave={scheduleResume}
              >
                <div
                  className={`relative w-full h-full rounded-lg overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/10 ${
                    isLarge ? "ring-2 ring-primary/40 shadow-lg" : ""
                  }`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-1 sm:p-1.5">
                    <span
                      className={`text-white ${textSize} leading-tight drop-shadow-md truncate block`}
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
    </section>
  );
}
