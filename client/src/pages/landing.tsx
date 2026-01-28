import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Customizer } from "@/components/landing/customizer";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { defaultLandingPageConfig, type LandingPageConfig } from "@shared/schema";

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border h-16 flex items-center px-6">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-5 w-24 ml-2" />
      </div>
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <Skeleton className="h-6 w-64 mx-auto rounded-full" />
          <Skeleton className="h-16 w-full max-w-3xl mx-auto" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          <div className="flex justify-center gap-4 pt-4">
            <Skeleton className="h-12 w-40 rounded-md" />
            <Skeleton className="h-12 w-40 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [localConfig, setLocalConfig] = useState<LandingPageConfig>(defaultLandingPageConfig);
  const { toast } = useToast();

  const { data: savedConfig, isLoading } = useQuery<LandingPageConfig>({
    queryKey: ["/api/config"],
  });

  useEffect(() => {
    if (savedConfig) {
      setLocalConfig(savedConfig);
    }
  }, [savedConfig]);

  const saveMutation = useMutation({
    mutationFn: async (newConfig: LandingPageConfig) => {
      const response = await apiRequest("POST", "/api/config", newConfig);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/config"] });
      toast({
        title: "Changes saved",
        description: "Your landing page has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleConfigChange = (newConfig: LandingPageConfig) => {
    setLocalConfig(newConfig);
  };

  const handleSave = () => {
    saveMutation.mutate(localConfig);
  };

  const handleReset = () => {
    setLocalConfig(defaultLandingPageConfig);
    toast({
      title: "Reset complete",
      description: "All customizations have been reset to defaults.",
    });
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const displayConfig = customizerOpen ? localConfig : (savedConfig || localConfig);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        brandName={displayConfig.brandName}
        onOpenCustomizer={() => {
          setLocalConfig(savedConfig || defaultLandingPageConfig);
          setCustomizerOpen(true);
        }}
      />
      <main>
        <Hero content={displayConfig.hero} />
        <Features features={displayConfig.features} />
        <Testimonials testimonials={displayConfig.testimonials} />
        <Pricing pricing={displayConfig.pricing} />
        <CTA brandName={displayConfig.brandName} />
      </main>
      <Footer
        brandName={displayConfig.brandName}
        brandTagline={displayConfig.brandTagline}
      />
      <Customizer
        open={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        config={localConfig}
        onConfigChange={handleConfigChange}
        onSave={handleSave}
        onReset={handleReset}
        isSaving={saveMutation.isPending}
      />
    </div>
  );
}
