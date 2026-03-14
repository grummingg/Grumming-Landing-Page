import { useDocumentTitle } from "@/hooks/use-document-title";
import { SalonHero } from "@/components/salon/hero";
import { HowItWorks } from "@/components/salon/how-it-works";
import { Categories } from "@/components/salon/categories";
import { Stats } from "@/components/salon/stats";
import { WhyGrumming } from "@/components/salon/why-grumming";
import { Locations } from "@/components/salon/locations";
import { Roadmap } from "@/components/salon/roadmap";
import { Waitlist } from "@/components/salon/waitlist";
import { AppDownload } from "@/components/salon/app-download";
import { SalonFooter } from "@/components/salon/footer";
import { defaultSalonConfig } from "@shared/schema";

export default function SalonLanding() {
  useDocumentTitle("Grumming - Find & Book the Best Salons Near You");
  return (
    <div className="min-h-screen bg-background">
      <main>
        <SalonHero />
        <HowItWorks />
        <Categories categories={defaultSalonConfig.categories} />
        <Stats />
        <WhyGrumming />
        <Locations locations={defaultSalonConfig.locations} />
        <Roadmap />
        <Waitlist />
        <AppDownload />
      </main>
      <SalonFooter />
    </div>
  );
}
