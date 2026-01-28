import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone, Star, Download, Check } from "lucide-react";

export function AppDownload() {
  const features = [
    "Instant booking confirmation",
    "Exclusive app-only discounts",
    "Track your appointment history",
    "Get personalized recommendations",
  ];

  return (
    <section id="download" className="py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 sm:p-12 lg:p-16 relative">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                data-testid="text-download-title"
              >
                Get the App for a
                <br />
                <span className="text-accent">Better Experience</span>
              </h2>
              <p
                className="text-lg text-white/90 mb-8"
                data-testid="text-download-description"
              >
                Download our mobile app for seamless booking, exclusive offers, and a personalized salon experience.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-white/90"
                    data-testid={`text-app-feature-${index}`}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-foreground text-background dark:bg-background dark:text-foreground"
                  data-testid="button-app-store"
                  aria-label="Download from App Store"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-foreground text-background dark:bg-background dark:text-foreground"
                  data-testid="button-play-store"
                  aria-label="Download from Play Store"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  Play Store
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-8 text-white/80">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold text-white">4.8</span>
                  <span>Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span className="font-semibold text-white">100K+</span>
                  <span>Downloads</span>
                </div>
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
                <div className="w-64 h-[500px] bg-foreground dark:bg-background rounded-[3rem] p-3 shadow-2xl relative">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-semibold mb-2">SalonBook App</p>
                      <p className="text-sm opacity-80">Your beauty destination</p>
                    </div>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground dark:bg-background rounded-full" />
                </div>

                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-card rounded-xl shadow-xl p-4 flex flex-col items-center justify-center">
                  <div className="w-full h-full bg-[repeating-linear-gradient(45deg,hsl(var(--foreground))_0,hsl(var(--foreground))_2px,hsl(var(--card))_2px,hsl(var(--card))_10px),repeating-linear-gradient(-45deg,hsl(var(--foreground))_0,hsl(var(--foreground))_2px,hsl(var(--card))_2px,hsl(var(--card))_10px)]" />
                  <p className="text-xs text-center text-muted-foreground mt-2">Scan to download</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
