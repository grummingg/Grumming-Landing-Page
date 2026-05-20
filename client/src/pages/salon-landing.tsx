import { useDocumentTitle } from "@/hooks/use-document-title";
import { SalonHero } from "@/components/salon/hero";
import { BackedByBar } from "@/components/salon/backed-by-bar";
import { HowItWorks } from "@/components/salon/how-it-works";
import { Categories } from "@/components/salon/categories";
import { WhyGrumming } from "@/components/salon/why-grumming";
import { Locations } from "@/components/salon/locations";
import { Roadmap } from "@/components/salon/roadmap";
import { Countdown } from "@/components/salon/countdown";
import { Waitlist } from "@/components/salon/waitlist";
import { AppDownload } from "@/components/salon/app-download";
import { StartupPartners } from "@/components/salon/startup-partners";
import { SalonFooter } from "@/components/salon/footer";
import { defaultSalonConfig } from "@shared/schema";

export default function SalonLanding() {
  useDocumentTitle("Grumming - Find & Book the Best Salons Near You");
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BackedByBar />
      <main>
        <SalonHero />
        <HowItWorks />
        <Categories categories={defaultSalonConfig.categories} />
        <WhyGrumming />
        <Locations locations={defaultSalonConfig.locations} />
        <Roadmap />
        <Countdown />
        <Waitlist />
        <StartupPartners />
        <AppDownload />
      </main>
      <SalonFooter />
    </div>
  );
}
