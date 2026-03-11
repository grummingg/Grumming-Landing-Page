import { motion } from "framer-motion";
import { AppStoreButtons } from "./app-store-buttons";

export function AppDownload() {
  return (
    <section id="download" className="py-10 sm:py-16 bg-white dark:bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pr-8 order-1"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 lg:mb-6 leading-tight tracking-tight text-center lg:text-left"
              data-testid="text-download-title"
            >
              Download the app now!
            </h2>

            <AppStoreButtons variant="section" className="hidden lg:flex" />
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <div className="w-44 h-[340px] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-[2rem] p-1.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] relative border border-gray-300/50 dark:border-gray-600/50">
                <div className="w-full h-full bg-white dark:bg-hero rounded-[1.75rem] flex flex-col items-center justify-center px-4 py-6 relative">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-gray-800 dark:bg-black rounded-full" aria-hidden="true" />
                  
                  <div className="flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-hero dark:bg-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <p className="text-foreground dark:text-white text-xs font-semibold">
                      Coming Soon
                    </p>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">
                      We're building<br />something amazing
                    </p>
                  </div>
                </div>
                
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" aria-hidden="true" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex lg:hidden order-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AppStoreButtons variant="section" className="justify-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
