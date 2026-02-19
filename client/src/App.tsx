import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}
import SalonLanding from "@/pages/salon-landing";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import CookiePolicy from "@/pages/cookie-policy";
import CancellationPolicy from "@/pages/cancellation-policy";
import Safety from "@/pages/safety";
import AboutUs from "@/pages/about-us";
import FAQPage from "@/pages/faq";
import ContactPage from "@/pages/contact";
import HiringPage from "@/pages/hiring";
import HelpCenter from "@/pages/help-center";
import ReportIssue from "@/pages/report-issue";
import RefundPolicy from "@/pages/refund-policy";
import Disclaimer from "@/pages/disclaimer";
import PartnerWithUs from "@/pages/partner-with-us";
import ForSalonOwners from "@/pages/for-salon-owners";
import Advertise from "@/pages/advertise";
import Franchise from "@/pages/franchise";
import BulkBookings from "@/pages/bulk-bookings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={SalonLanding} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/cancellation-policy" component={CancellationPolicy} />
      <Route path="/safety" component={Safety} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/help-center" component={HelpCenter} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/hiring" component={HiringPage} />
      <Route path="/report-issue" component={ReportIssue} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/partner-with-us" component={PartnerWithUs} />
      <Route path="/for-salon-owners" component={ForSalonOwners} />
      <Route path="/advertise" component={Advertise} />
      <Route path="/franchise" component={Franchise} />
      <Route path="/bulk-bookings" component={BulkBookings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <ScrollToTop />
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
