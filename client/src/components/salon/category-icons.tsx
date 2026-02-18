interface IconProps {
  className?: string;
}

export function HaircutIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 12C20 12 24 20 32 28M44 12C44 12 40 20 32 28M32 28V44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="48" r="8" stroke="currentColor" strokeWidth="3"/>
      <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="3"/>
      <path d="M23.5 43.5L32 36L40.5 43.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SpaIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M32 8C32 8 20 24 20 36C20 42.627 25.373 48 32 48C38.627 48 44 42.627 44 36C44 24 32 8 32 8Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 48V56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M24 56H40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M28 28C28 28 30 32 32 32C34 32 36 28 36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SkincareIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="18" y="20" width="28" height="36" rx="6" stroke="currentColor" strokeWidth="3"/>
      <path d="M26 20V14C26 11.791 27.791 10 30 10H34C36.209 10 38 11.791 38 14V20" stroke="currentColor" strokeWidth="3"/>
      <circle cx="32" cy="36" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M32 33V39" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M29 36H35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MakeupIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 52L28 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M28 20L32 8L36 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 20L48 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M22 36H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 48H46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="42" r="3" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

export function HairColourIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 8L20 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M14 32H26V38C26 41.314 23.314 44 20 44C16.686 44 14 41.314 14 38V32Z" stroke="currentColor" strokeWidth="3"/>
      <path d="M20 44V56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="44" cy="20" r="10" stroke="currentColor" strokeWidth="3"/>
      <path d="M44 14V20H50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M38 36L50 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M50 36L38 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function NailsIcon({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 52V20C24 14.477 27.582 10 32 10C36.418 10 40 14.477 40 20V52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M24 28H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20 52H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M28 18C28 18 30 16 32 16C34 16 36 18 36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="38" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
