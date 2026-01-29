import { motion } from "framer-motion";

export function AppDownload() {
  return (
    <section id="download" className="py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle decorative curves */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M400,0 Q300,200 400,400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-rose-200 dark:text-rose-800"
              />
              <path
                d="M350,0 Q250,200 350,400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-rose-200 dark:text-rose-800"
              />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-foreground mb-4"
                data-testid="text-download-title"
              >
                Download the app now!
              </h2>

              <p className="text-lg text-gray-600 dark:text-muted-foreground mb-8 max-w-md">
                Experience seamless booking only on the SalonBook app
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black rounded-lg px-4 py-2.5 hover-elevate"
                  data-testid="button-play-store"
                  aria-label="Get it on Google Play"
                >
                  <svg viewBox="0 0 512 512" className="w-7 h-7">
                    <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" fill="#2196F3"/>
                    <path d="M345.31 198.78L104.16 59.8a8.33 8.33 0 00-6.88-.57L289 251l56.31-52.22z" fill="#4CAF50"/>
                    <path d="M410.23 237.08L355.52 205l-61.58 57.16 61.39 56.94 54.9-31.79a16.07 16.07 0 000-27.87z" fill="#FFC107"/>
                    <path d="M289.12 262L97.47 453.58a8 8 0 006.69-.63l241.08-139.28L289.12 262z" fill="#F44336"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/80 uppercase tracking-wide">Get it on</div>
                    <div className="text-lg font-semibold text-white -mt-0.5">Google Play</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black rounded-lg px-4 py-2.5 hover-elevate"
                  data-testid="button-app-store"
                  aria-label="Download on the App Store"
                >
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/80 uppercase tracking-wide">Download on the</div>
                    <div className="text-lg font-semibold text-white -mt-0.5">App Store</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Phone mockup - Professional iPhone style */}
                <div className="w-72 h-[560px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3.5rem] p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] relative border border-gray-700/50">
                  {/* Side buttons */}
                  <div className="absolute -left-0.5 top-28 w-1 h-8 bg-gray-700 rounded-l-sm" />
                  <div className="absolute -left-0.5 top-44 w-1 h-12 bg-gray-700 rounded-l-sm" />
                  <div className="absolute -left-0.5 top-60 w-1 h-12 bg-gray-700 rounded-l-sm" />
                  <div className="absolute -right-0.5 top-36 w-1 h-16 bg-gray-700 rounded-r-sm" />
                  
                  {/* Phone screen */}
                  <div className="w-full h-full bg-white rounded-[2.75rem] flex flex-col items-center justify-center p-8 relative overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gray-800 border border-gray-700 mr-4" />
                    </div>
                    
                    <p className="text-gray-600 text-center text-base mb-8 font-medium tracking-wide mt-8">
                      Scan the QR code to<br />download the app
                    </p>
                    
                    {/* QR Code - Clean professional design */}
                    <div className="w-48 h-48 bg-white p-2 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="0" y="0" width="100" height="100" fill="white"/>
                        
                        {/* Position detection patterns - corners */}
                        <rect x="4" y="4" width="22" height="22" fill="#1a1a1a"/>
                        <rect x="7" y="7" width="16" height="16" fill="white"/>
                        <rect x="10" y="10" width="10" height="10" fill="#1a1a1a"/>
                        
                        <rect x="74" y="4" width="22" height="22" fill="#1a1a1a"/>
                        <rect x="77" y="7" width="16" height="16" fill="white"/>
                        <rect x="80" y="10" width="10" height="10" fill="#1a1a1a"/>
                        
                        <rect x="4" y="74" width="22" height="22" fill="#1a1a1a"/>
                        <rect x="7" y="77" width="16" height="16" fill="white"/>
                        <rect x="10" y="80" width="10" height="10" fill="#1a1a1a"/>
                        
                        {/* Timing patterns */}
                        <rect x="30" y="10" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="38" y="10" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="46" y="10" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="54" y="10" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="62" y="10" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="10" y="30" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="10" y="38" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="10" y="46" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="10" y="54" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="10" y="62" width="4" height="4" fill="#1a1a1a"/>
                        
                        {/* Data modules - professional pattern */}
                        <rect x="30" y="30" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="38" y="30" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="50" y="30" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="62" y="30" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="74" y="30" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="86" y="30" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="30" y="38" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="42" y="38" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="54" y="38" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="66" y="38" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="78" y="38" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="90" y="38" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="30" y="46" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="38" y="46" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="46" y="46" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="58" y="46" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="70" y="46" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="82" y="46" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="30" y="54" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="46" y="54" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="54" y="54" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="62" y="54" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="74" y="54" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="86" y="54" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="30" y="62" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="42" y="62" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="50" y="62" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="66" y="62" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="78" y="62" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="90" y="62" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="30" y="74" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="38" y="74" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="54" y="74" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="62" y="74" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="70" y="74" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="86" y="74" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="30" y="82" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="46" y="82" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="58" y="82" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="74" y="82" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="82" y="82" width="4" height="4" fill="#1a1a1a"/>
                        
                        <rect x="30" y="90" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="42" y="90" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="50" y="90" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="66" y="90" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="78" y="90" width="4" height="4" fill="#1a1a1a"/>
                        <rect x="90" y="90" width="4" height="4" fill="#1a1a1a"/>
                        
                        {/* Brand accent - small colored square */}
                        <rect x="74" y="74" width="8" height="8" rx="1" fill="hsl(177, 35%, 27%)"/>
                      </svg>
                    </div>
                    
                    {/* Home indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
