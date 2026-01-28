import { useQuery } from "@tanstack/react-query";
import { SalonHero } from "@/components/salon/hero";
import { Categories } from "@/components/salon/categories";
import { Locations } from "@/components/salon/locations";
import { FeaturedSalons } from "@/components/salon/featured-salons";
import { HowItWorks } from "@/components/salon/how-it-works";
import { AppDownload } from "@/components/salon/app-download";
import { SalonFooter } from "@/components/salon/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { defaultSalonConfig, type SalonConfig } from "@shared/schema";

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <Skeleton className="h-16 w-full max-w-3xl mx-auto bg-white/20" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto bg-white/20" />
          <div className="bg-white rounded-xl p-6 max-w-3xl mx-auto">
            <div className="flex gap-4">
              <Skeleton className="h-12 flex-1" />
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SalonLanding() {
  const { data: config, isLoading } = useQuery<SalonConfig>({
    queryKey: ["/api/salon-config"],
  });

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const salonData = config || defaultSalonConfig;

  return (
    <div className="min-h-screen bg-background">
      <main>
        <SalonHero />
        <Categories categories={salonData.categories} />
        <Locations locations={salonData.locations} />
        <FeaturedSalons salons={salonData.featuredSalons} />
        <HowItWorks />
        <AppDownload />
      </main>
      <SalonFooter />
    </div>
  );
}
