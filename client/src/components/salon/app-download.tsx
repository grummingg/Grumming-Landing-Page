import { motion } from "framer-motion";

export function AppDownload() {
  return (
    <section id="download" className="py-16 sm:py-20 bg-white dark:bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 leading-tight tracking-tight"
              data-testid="text-download-title"
            >
              Download the app now!
            </h2>

            <p className="text-base text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Experience seamless booking only on the Grumming app
            </p>

            <div className="flex flex-wrap gap-3">
              <div
                className="inline-flex items-center gap-3 bg-[#0f172a] dark:border dark:border-white/20 rounded-xl px-5 py-3 opacity-70 cursor-not-allowed shadow-sm"
                data-testid="button-play-store"
                aria-label="Google Play - Coming Soon"
              >
                <svg viewBox="0 0 512 512" className="w-6 h-6">
                  <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" fill="#2196F3"/>
                  <path d="M345.31 198.78L104.16 59.8a8.33 8.33 0 00-6.88-.57L289 251l56.31-52.22z" fill="#4CAF50"/>
                  <path d="M410.23 237.08L355.52 205l-61.58 57.16 61.39 56.94 54.9-31.79a16.07 16.07 0 000-27.87z" fill="#FFC107"/>
                  <path d="M289.12 262L97.47 453.58a8 8 0 006.69-.63l241.08-139.28L289.12 262z" fill="#F44336"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-amber-400 uppercase tracking-wider font-medium">Coming Soon</div>
                  <div className="text-sm font-semibold text-white -mt-0.5">Google Play</div>
                </div>
              </div>
              <div
                className="inline-flex items-center gap-3 bg-[#0f172a] dark:border dark:border-white/20 rounded-xl px-5 py-3 opacity-70 cursor-not-allowed shadow-sm"
                data-testid="button-app-store"
                aria-label="App Store - Coming Soon"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-amber-400 uppercase tracking-wider font-medium">Coming Soon</div>
                  <div className="text-sm font-semibold text-white -mt-0.5">App Store</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              {/* Phone mockup - sleek silver/white design */}
              <div className="w-44 h-[340px] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-[2rem] p-1.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] relative border border-gray-300/50 dark:border-gray-600/50">
                {/* Phone screen */}
                <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-[1.75rem] flex flex-col items-center justify-center px-4 py-6 relative">
                  {/* Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-gray-800 dark:bg-black rounded-full" />
                  
                  <div className="flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0f172a] dark:bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <p className="text-foreground dark:text-white text-xs font-semibold">
                      Coming Soon
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] leading-relaxed">
                      We're building<br />something amazing
                    </p>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
