import { useDocumentTitle } from "@/hooks/use-document-title";
import { SalonHero } from "@/components/salon/hero";
import { Categories } from "@/components/salon/categories";
import { Stats } from "@/components/salon/stats";
import { Locations } from "@/components/salon/locations";

import { AppDownload } from "@/components/salon/app-download";
import { SalonFooter } from "@/components/salon/footer";
import { defaultSalonConfig } from "@shared/schema";

export default function SalonLanding() {
  useDocumentTitle("Grumming - Find & Book the Best Salons Near You");
  return (
    <div className="min-h-screen bg-background">
      <main>
        <SalonHero />
        <Categories categories={defaultSalonConfig.categories} />
        <Stats />
        <Locations locations={defaultSalonConfig.locations} />
        <AppDownload />
      </main>
      <SalonFooter />
    </div>
  );
}
