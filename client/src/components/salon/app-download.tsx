import { motion } from "framer-motion";

export function AppDownload() {
  return (
    <section id="download" className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
              data-testid="text-download-title"
            >
              Download the app now!
            </h2>

            <p className="text-base text-gray-600 mb-8 max-w-sm leading-relaxed">
              Experience seamless booking only on the SalonBook app
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-gray-900 rounded-lg px-4 py-2.5 hover-elevate"
                data-testid="button-play-store"
                aria-label="Get it on Google Play"
              >
                <svg viewBox="0 0 512 512" className="w-6 h-6">
                  <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" fill="#2196F3"/>
                  <path d="M345.31 198.78L104.16 59.8a8.33 8.33 0 00-6.88-.57L289 251l56.31-52.22z" fill="#4CAF50"/>
                  <path d="M410.23 237.08L355.52 205l-61.58 57.16 61.39 56.94 54.9-31.79a16.07 16.07 0 000-27.87z" fill="#FFC107"/>
                  <path d="M289.12 262L97.47 453.58a8 8 0 006.69-.63l241.08-139.28L289.12 262z" fill="#F44336"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-white/70 uppercase tracking-wider font-medium">Get it on</div>
                  <div className="text-sm font-semibold text-white -mt-0.5">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-gray-900 rounded-lg px-4 py-2.5 hover-elevate"
                data-testid="button-app-store"
                aria-label="Download on the App Store"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[9px] text-white/70 uppercase tracking-wider font-medium">Download on the</div>
                  <div className="text-sm font-semibold text-white -mt-0.5">App Store</div>
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
              {/* Phone mockup */}
              <div className="w-52 h-[400px] bg-white rounded-[2.5rem] p-2 shadow-lg border border-gray-200 relative">
                {/* Phone screen with QR code */}
                <div className="w-full h-full bg-gray-50 rounded-[2rem] flex flex-col items-center justify-center p-5">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full" />
                  
                  <p className="text-gray-600 text-center text-xs mb-5 font-medium mt-6">
                    Scan the QR code to<br />download the app
                  </p>
                  
                  {/* QR Code */}
                  <div className="w-36 h-36 bg-white">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <rect x="0" y="0" width="100" height="100" fill="white"/>
                      
                      {/* Corner squares */}
                      <rect x="5" y="5" width="25" height="25" fill="black"/>
                      <rect x="8" y="8" width="19" height="19" fill="white"/>
                      <rect x="11" y="11" width="13" height="13" fill="black"/>
                      
                      <rect x="70" y="5" width="25" height="25" fill="black"/>
                      <rect x="73" y="8" width="19" height="19" fill="white"/>
                      <rect x="76" y="11" width="13" height="13" fill="black"/>
                      
                      <rect x="5" y="70" width="25" height="25" fill="black"/>
                      <rect x="8" y="73" width="19" height="19" fill="white"/>
                      <rect x="11" y="76" width="13" height="13" fill="black"/>
                      
                      {/* Data modules */}
                      <rect x="35" y="5" width="5" height="5" fill="black"/>
                      <rect x="45" y="5" width="5" height="5" fill="black"/>
                      <rect x="55" y="5" width="5" height="5" fill="black"/>
                      <rect x="35" y="15" width="5" height="5" fill="black"/>
                      <rect x="50" y="15" width="5" height="5" fill="black"/>
                      <rect x="60" y="15" width="5" height="5" fill="black"/>
                      <rect x="40" y="25" width="5" height="5" fill="black"/>
                      <rect x="55" y="25" width="5" height="5" fill="black"/>
                      
                      <rect x="5" y="35" width="5" height="5" fill="black"/>
                      <rect x="15" y="35" width="5" height="5" fill="black"/>
                      <rect x="25" y="35" width="5" height="5" fill="black"/>
                      <rect x="40" y="35" width="5" height="5" fill="black"/>
                      <rect x="50" y="35" width="5" height="5" fill="black"/>
                      <rect x="65" y="35" width="5" height="5" fill="black"/>
                      <rect x="80" y="35" width="5" height="5" fill="black"/>
                      <rect x="90" y="35" width="5" height="5" fill="black"/>
                      
                      <rect x="5" y="45" width="5" height="5" fill="black"/>
                      <rect x="20" y="45" width="5" height="5" fill="black"/>
                      <rect x="35" y="45" width="5" height="5" fill="black"/>
                      <rect x="45" y="45" width="5" height="5" fill="black"/>
                      <rect x="55" y="45" width="5" height="5" fill="black"/>
                      <rect x="70" y="45" width="5" height="5" fill="black"/>
                      <rect x="85" y="45" width="5" height="5" fill="black"/>
                      
                      <rect x="10" y="55" width="5" height="5" fill="black"/>
                      <rect x="25" y="55" width="5" height="5" fill="black"/>
                      <rect x="40" y="55" width="5" height="5" fill="black"/>
                      <rect x="60" y="55" width="5" height="5" fill="black"/>
                      <rect x="75" y="55" width="5" height="5" fill="black"/>
                      <rect x="90" y="55" width="5" height="5" fill="black"/>
                      
                      <rect x="35" y="65" width="5" height="5" fill="black"/>
                      <rect x="50" y="65" width="5" height="5" fill="black"/>
                      <rect x="60" y="65" width="5" height="5" fill="black"/>
                      <rect x="80" y="65" width="5" height="5" fill="black"/>
                      
                      <rect x="35" y="75" width="5" height="5" fill="black"/>
                      <rect x="45" y="75" width="5" height="5" fill="black"/>
                      <rect x="55" y="75" width="5" height="5" fill="black"/>
                      <rect x="70" y="75" width="5" height="5" fill="black"/>
                      <rect x="85" y="75" width="5" height="5" fill="black"/>
                      
                      <rect x="40" y="85" width="5" height="5" fill="black"/>
                      <rect x="55" y="85" width="5" height="5" fill="black"/>
                      <rect x="65" y="85" width="5" height="5" fill="black"/>
                      <rect x="80" y="85" width="5" height="5" fill="black"/>
                      <rect x="90" y="85" width="5" height="5" fill="black"/>
                      
                      <rect x="35" y="90" width="5" height="5" fill="black"/>
                      <rect x="50" y="90" width="5" height="5" fill="black"/>
                      <rect x="70" y="90" width="5" height="5" fill="black"/>
                      
                      {/* Accent square */}
                      <rect x="70" y="70" width="10" height="10" fill="#E11D48" rx="1"/>
                    </svg>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
