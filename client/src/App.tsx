import { useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
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

const SalonLanding = lazy(() => import("@/pages/salon-landing"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const CookiePolicy = lazy(() => import("@/pages/cookie-policy"));
const CancellationPolicy = lazy(() => import("@/pages/cancellation-policy"));
const Safety = lazy(() => import("@/pages/safety"));
const AboutUs = lazy(() => import("@/pages/about-us"));
const FAQPage = lazy(() => import("@/pages/faq"));
const ContactPage = lazy(() => import("@/pages/contact"));
const HiringPage = lazy(() => import("@/pages/hiring"));
const HelpCenter = lazy(() => import("@/pages/help-center"));
const ReportIssue = lazy(() => import("@/pages/report-issue"));
const RefundPolicy = lazy(() => import("@/pages/refund-policy"));
const Disclaimer = lazy(() => import("@/pages/disclaimer"));
const PartnerWithUs = lazy(() => import("@/pages/partner-with-us"));
const ForSalonOwners = lazy(() => import("@/pages/for-salon-owners"));
const Advertise = lazy(() => import("@/pages/advertise"));
const Franchise = lazy(() => import("@/pages/franchise"));
const BulkBookings = lazy(() => import("@/pages/bulk-bookings"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path="/business" component={ForSalonOwners} />
        <Route path="/advertise" component={Advertise} />
        <Route path="/franchise" component={Franchise} />
        <Route path="/bulk-bookings" component={BulkBookings} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <ScrollToTop />
        <Router />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
