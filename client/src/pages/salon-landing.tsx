import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { SalonHero } from "@/components/salon/hero";
import { Categories } from "@/components/salon/categories";
import { Locations } from "@/components/salon/locations";
import { HowItWorks } from "@/components/salon/how-it-works";
import { ContactForm } from "@/components/salon/contact-form";
import { AppDownload } from "@/components/salon/app-download";
import { SalonFooter } from "@/components/salon/footer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { defaultSalonConfig, type SalonConfig } from "@shared/schema";

function ShimmerSkeleton({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md bg-muted ${className || ""}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <ShimmerSkeleton className="h-14 sm:h-16 w-full max-w-lg mx-auto !bg-white/10" />
          <ShimmerSkeleton className="h-10 sm:h-12 w-full max-w-sm mx-auto !bg-white/10" />
          <ShimmerSkeleton className="h-6 w-full max-w-md mx-auto !bg-white/8" />
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <ShimmerSkeleton className="h-14 w-44 rounded-lg !bg-white/10" />
            <ShimmerSkeleton className="h-14 w-44 rounded-lg !bg-white/10" />
          </div>
        </div>
      </motion.section>

      {/* Categories skeleton */}
      <motion.section
        className="py-20 sm:py-24 bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <ShimmerSkeleton className="h-9 w-72 mx-auto" />
            <ShimmerSkeleton className="h-9 w-56 mx-auto" />
          </div>
          <div className="flex items-center justify-center gap-12">
            <div className="hidden lg:flex flex-col gap-8 items-end">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <ShimmerSkeleton className="w-16 h-16 !rounded-[1.25rem]" />
                  <ShimmerSkeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
            <ShimmerSkeleton className="w-56 lg:w-72 h-[400px] lg:h-[520px] !rounded-[2.5rem] lg:!rounded-[3rem]" />
            <div className="hidden lg:flex flex-col gap-8 items-start">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <ShimmerSkeleton className="w-16 h-16 !rounded-[1.25rem]" />
                  <ShimmerSkeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden grid grid-cols-3 gap-4 mt-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <ShimmerSkeleton className="w-12 h-12 !rounded-xl" />
                <ShimmerSkeleton className="h-3 w-14" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Locations skeleton */}
      <motion.section
        className="py-20 sm:py-24 bg-muted/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <ShimmerSkeleton className="h-9 w-64 mx-auto" />
            <ShimmerSkeleton className="h-5 w-48 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="rounded-md bg-muted/60 p-6 flex flex-col items-center gap-4">
                <ShimmerSkeleton className="w-14 h-14 !rounded-2xl" />
                <ShimmerSkeleton className="h-5 w-20" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works skeleton */}
      <motion.section
        className="py-20 sm:py-24 bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <ShimmerSkeleton className="h-9 w-48 mx-auto" />
            <ShimmerSkeleton className="h-5 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-3xl bg-muted/40 p-8 flex flex-col items-center gap-4">
                <ShimmerSkeleton className="w-16 h-16 !rounded-2xl" />
                <ShimmerSkeleton className="h-6 w-24" />
                <ShimmerSkeleton className="h-4 w-full max-w-[200px]" />
                <ShimmerSkeleton className="h-4 w-full max-w-[160px]" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default function SalonLanding() {
  const { data: config, isLoading, isError, error } = useQuery<SalonConfig>({
    queryKey: ["/api/salon-config"],
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const salonData = config || defaultSalonConfig;
  const usingFallback = !config && !isLoading;

  return (
    <div className="min-h-screen bg-background">
      {(isError || usingFallback) && (
        <Alert variant="destructive" className="rounded-none border-x-0 border-t-0" data-testid="alert-api-error">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            {isError 
              ? `Unable to load latest data: ${error?.message || 'Please try again later.'}`
              : 'Showing default data. Live data could not be loaded.'
            }
          </AlertDescription>
        </Alert>
      )}
      <main>
        <SalonHero />
        <Categories categories={salonData.categories} />
        <Locations locations={salonData.locations} />
        <HowItWorks />
        <ContactForm />
        <AppDownload />
      </main>
      <SalonFooter />
    </div>
  );
}
