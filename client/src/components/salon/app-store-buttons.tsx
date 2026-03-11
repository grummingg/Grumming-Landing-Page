interface AppStoreButtonsProps {
  variant?: "hero" | "section";
  className?: string;
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" fill="#2196F3"/>
      <path d="M345.31 198.78L104.16 59.8a8.33 8.33 0 00-6.88-.57L289 251l56.31-52.22z" fill="#4CAF50"/>
      <path d="M410.23 237.08L355.52 205l-61.58 57.16 61.39 56.94 54.9-31.79a16.07 16.07 0 000-27.87z" fill="#FFC107"/>
      <path d="M289.12 262L97.47 453.58a8 8 0 006.69-.63l241.08-139.28L289.12 262z" fill="#F44336"/>
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="white">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

export function AppStoreButtons({ variant = "section", className = "" }: AppStoreButtonsProps) {
  const isHero = variant === "hero";
  const iconSize = isHero ? "w-7 h-7" : "w-6 h-6";
  const labelSize = isHero ? "text-lg" : "text-sm";
  const comingSoonSize = isHero ? "text-[10px]" : "text-[9px]";
  const padding = isHero ? "px-4 py-2.5" : "px-5 py-3";
  const rounded = isHero ? "rounded-lg" : "rounded-xl";
  const border = isHero ? "border border-white/20" : "dark:border dark:border-white/20";
  const shadow = isHero ? "" : "shadow-sm";

  const buttonBase = `inline-flex items-center gap-3 bg-hero ${rounded} ${padding} ${border} opacity-70 cursor-not-allowed ${shadow}`;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`} data-testid="app-store-buttons">
      <button
        type="button"
        disabled
        className={buttonBase}
        data-testid={`button-play-store${isHero ? "-hero" : ""}`}
        aria-label="Google Play - Coming Soon"
        aria-disabled="true"
      >
        <GooglePlayIcon className={iconSize} />
        <div className="text-left">
          <div className={`${comingSoonSize} text-amber-400 uppercase tracking-wider font-medium`}>Coming Soon</div>
          <div className={`${labelSize} font-semibold text-white -mt-0.5`}>Google Play</div>
        </div>
      </button>
      <button
        type="button"
        disabled
        className={buttonBase}
        data-testid={`button-app-store${isHero ? "-hero" : ""}`}
        aria-label="App Store - Coming Soon"
        aria-disabled="true"
      >
        <AppleIcon className={iconSize} />
        <div className="text-left">
          <div className={`${comingSoonSize} text-amber-400 uppercase tracking-wider font-medium`}>Coming Soon</div>
          <div className={`${labelSize} font-semibold text-white -mt-0.5`}>App Store</div>
        </div>
      </button>
    </div>
  );
}
