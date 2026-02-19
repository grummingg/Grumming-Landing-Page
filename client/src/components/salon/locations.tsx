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

type CardSize = "1x1" | "1x2" | "2x1" | "2x2";
const SPECIAL_SIZES: CardSize[] = ["1x2", "2x1", "2x2"];

function getSpan(size: CardSize): { col: number; row: number } {
  switch (size) {
    case "1x2": return { col: 2, row: 1 };
    case "2x1": return { col: 1, row: 2 };
    case "2x2": return { col: 2, row: 2 };
    default: return { col: 1, row: 1 };
  }
}

function getTextSize(size: CardSize): string {
  switch (size) {
    case "2x2": return "text-sm sm:text-base font-bold";
    case "1x2": return "text-[10px] sm:text-xs font-bold";
    case "2x1": return "text-[10px] sm:text-xs font-bold";
    default: return "text-[8px] sm:text-[10px] font-semibold";
  }
}

const MAX_SPECIAL = 5;
const MAX_GRID_CELLS_EXTRA = 12;

const LONG_PRESS_MS = 1000;
const MOBILE_BREAKPOINT = 640;

export function Locations({ locations }: LocationsProps) {
  const [order, setOrder] = useState<Location[]>([]);
  const [sizeMap, setSizeMap] = useState<Map<string, CardSize>>(new Map());
  const [isMobile, setIsMobile] = useState(false);
  const hoverPausedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const locationsRef = useRef<Location[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [dragActiveId, setDragActiveId] = useState<string | null>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pressStartIdRef = useRef<string | null>(null);
  const lastSwapRef = useRef<string | null>(null);
  const pressStartPos = useRef<{ x: number; y: number } | null>(null);

  const shouldAnimate = () => isVisibleRef.current && !hoverPausedRef.current;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (locations.length === 0) return;
    const initial = [...locations].sort(() => Math.random() - 0.5);
    setOrder(initial);
    locationsRef.current = initial;
    const map = new Map<string, CardSize>();
    const shuffledInit = [...initial].sort(() => Math.random() - 0.5);
    let extraCells = 0;
    for (let i = 0; i < shuffledInit.length && map.size < MAX_SPECIAL; i++) {
      const sz = SPECIAL_SIZES[Math.floor(Math.random() * SPECIAL_SIZES.length)];
      const { col, row } = getSpan(sz);
      const cellsUsed = col * row - 1;
      if (extraCells + cellsUsed <= MAX_GRID_CELLS_EXTRA) {
        map.set(shuffledInit[i].id, sz);
        extraCells += cellsUsed;
      }
    }
    setSizeMap(map);
  }, [locations]);

  useEffect(() => {
    if (order.length > 0) locationsRef.current = order;
  }, [order]);

  useEffect(() => {
    if (locations.length === 0) return;

    const scheduleSwap = () => {
      const delay = 100 + Math.random() * 1900;
      swapTimerRef.current = setTimeout(() => {
        if (shouldAnimate()) {
          setOrder(prev => {
            const arr = [...prev];
            const i = Math.floor(Math.random() * arr.length);
            let j = Math.floor(Math.random() * arr.length);
            while (j === i && arr.length > 1) j = Math.floor(Math.random() * arr.length);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            return arr;
          });
        }
        scheduleSwap();
      }, delay);
    };

    const scheduleSize = () => {
      const delay = 200 + Math.random() * 2300;
      sizeTimerRef.current = setTimeout(() => {
        if (shouldAnimate()) {
          const currentOrder = locationsRef.current;
          if (currentOrder.length > 0) {
            setSizeMap(prev => {
              const next = new Map(prev);
              const specialIds = Array.from(next.keys());
              if (specialIds.length > 0) {
                const removeId = specialIds[Math.floor(Math.random() * specialIds.length)];
                next.delete(removeId);
              }
              let extraCells = 0;
              next.forEach((sz) => {
                const { col, row } = getSpan(sz);
                extraCells += col * row - 1;
              });
              if (next.size < MAX_SPECIAL) {
                const available = currentOrder.filter(l => !next.has(l.id));
                if (available.length > 0) {
                  const addLoc = available[Math.floor(Math.random() * available.length)];
                  const newSize = SPECIAL_SIZES[Math.floor(Math.random() * SPECIAL_SIZES.length)];
                  const { col, row } = getSpan(newSize);
                  const newExtra = col * row - 1;
                  if (extraCells + newExtra <= MAX_GRID_CELLS_EXTRA) {
                    next.set(addLoc.id, newSize);
                  }
                }
              }
              return next;
            });
          }
        }
        scheduleSize();
      }, delay);
    };

    scheduleSwap();
    scheduleSize();

    return () => {
      if (swapTimerRef.current) clearTimeout(swapTimerRef.current);
      if (sizeTimerRef.current) clearTimeout(sizeTimerRef.current);
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [locations.length]);

  const pauseRotation = () => {
    hoverPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const scheduleResume = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    const resumeDelay = 100 + Math.random() * 1900;
    resumeTimerRef.current = setTimeout(() => {
      hoverPausedRef.current = false;
    }, resumeDelay);
  };

  const cancelLongPress = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    pressStartIdRef.current = null;
  }, []);

  const endDrag = useCallback(() => {
    cancelLongPress();
    setDragActiveId(null);
    lastSwapRef.current = null;
    scheduleResume();
  }, [cancelLongPress]);

  const findCardIdAtPoint = useCallback((x: number, y: number): string | null => {
    const grid = gridRef.current;
    if (!grid) return null;
    const els = Array.from(grid.querySelectorAll<HTMLElement>("[data-loc-id]"));
    for (const el of els) {
      const rect = el.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        return el.getAttribute("data-loc-id");
      }
    }
    return null;
  }, []);

  const handlePointerDown = useCallback((locationId: string, x: number, y: number) => {
    cancelLongPress();
    pressStartIdRef.current = locationId;
    pressStartPos.current = { x, y };
    pauseRotation();
    longPressTimerRef.current = setTimeout(() => {
      setDragActiveId(locationId);
      lastSwapRef.current = null;
    }, LONG_PRESS_MS);
  }, [cancelLongPress]);

  const handlePointerMoveRaw = useCallback((clientX: number, clientY: number) => {
    if (!dragActiveId && pressStartPos.current && longPressTimerRef.current) {
      const dx = clientX - pressStartPos.current.x;
      const dy = clientY - pressStartPos.current.y;
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        cancelLongPress();
        return;
      }
    }
    if (!dragActiveId) return;
    const targetId = findCardIdAtPoint(clientX, clientY);
    if (targetId && targetId !== dragActiveId && targetId !== lastSwapRef.current) {
      lastSwapRef.current = targetId;
      setOrder(prev => {
        const arr = [...prev];
        const fromIdx = arr.findIndex(l => l.id === dragActiveId);
        const toIdx = arr.findIndex(l => l.id === targetId);
        if (fromIdx !== -1 && toIdx !== -1) {
          [arr[fromIdx], arr[toIdx]] = [arr[toIdx], arr[fromIdx]];
        }
        return arr;
      });
    }
  }, [dragActiveId, findCardIdAtPoint, cancelLongPress]);

  const handlePointerUp = useCallback(() => {
    if (dragActiveId) {
      endDrag();
    } else {
      cancelLongPress();
      scheduleResume();
    }
  }, [dragActiveId, endDrag, cancelLongPress]);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      handlePointerMoveRaw(e.clientX, e.clientY);
    };
    const onUp = () => {
      if (dragActiveId) {
        endDrag();
      } else {
        cancelLongPress();
        scheduleResume();
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (dragActiveId) {
        e.preventDefault();
        const touch = e.touches[0];
        if (touch) handlePointerMoveRaw(touch.clientX, touch.clientY);
      }
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [dragActiveId, endDrag, cancelLongPress, handlePointerMoveRaw]);

  return (
    <section ref={sectionRef} id="locations" className="py-20 sm:py-24 bg-white dark:bg-background">
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
        </motion.div>

        <div
          ref={gridRef}
          className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1.5 sm:gap-2"
          style={{
            gridAutoRows: isMobile ? "65px" : "70px",
            gridAutoFlow: "dense",
            touchAction: dragActiveId ? "none" : "auto",
          }}
        >
          {order.map((location) => {
            const image = cityImages[location.image];
            const size: CardSize = isMobile ? "1x1" : (sizeMap.get(location.id) || "1x1");
            const { col, row } = getSpan(size);
            const isSpecial = size !== "1x1";
            const textSize = getTextSize(size);
            const isDragging = dragActiveId === location.id;
            return (
              <motion.div
                key={location.id}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.8 }}
                className={`relative select-none ${dragActiveId ? "cursor-grabbing" : "cursor-pointer"}`}
                style={{
                  gridColumn: `span ${col}`,
                  gridRow: `span ${row}`,
                  zIndex: isDragging ? 50 : isSpecial ? 5 : 1,
                }}
                data-loc-id={location.id}
                onPointerDown={(e) => {
                  if (e.pointerType === "touch") {
                    e.preventDefault();
                  }
                  handlePointerDown(location.id, e.clientX, e.clientY);
                }}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => endDrag()}
                onMouseEnter={() => { if (!dragActiveId) pauseRotation(); }}
                onMouseLeave={() => { if (!dragActiveId) scheduleResume(); }}
              >
                <div
                  className={`relative w-full h-full rounded-lg overflow-hidden shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-shadow duration-300 ${
                    isSpecial ? "ring-2 ring-primary/40 shadow-lg" : ""
                  } ${isDragging ? "ring-2 ring-amber-400 shadow-xl shadow-amber-400/30" : ""}`}
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
                  {isDragging && (
                    <div className="absolute inset-0 bg-amber-400/10 animate-pulse pointer-events-none" />
                  )}
                  <div className={`absolute bottom-0 left-0 right-0 ${isSpecial ? "p-1.5 sm:p-2" : "p-1 sm:p-1.5"}`}>
                    <span
                      className={`text-white ${textSize} leading-tight drop-shadow-md block ${isSpecial ? "" : "truncate"}`}
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
