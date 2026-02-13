import { useQuery } from "@tanstack/react-query";
import { SalonHero } from "@/components/salon/hero";
import { Categories } from "@/components/salon/categories";
import { Locations } from "@/components/salon/locations";
import { HowItWorks } from "@/components/salon/how-it-works";
import { ContactForm } from "@/components/salon/contact-form";
import { AppDownload } from "@/components/salon/app-download";
import { SalonFooter } from "@/components/salon/footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
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
