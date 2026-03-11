import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { Cookie, Shield, Settings, BarChart, Eye, Scissors, Clock, Bell, Mail, Megaphone } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const cookieTypes = [
  {
    title: "Essential Cookies",
    icon: Shield,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    required: true,
    retention: "Session / up to 12 months",
    description: "These cookies are strictly necessary for the platform to function and cannot be disabled. They enable core functionality such as:",
    items: [
      "User authentication and session management",
      "Security features and fraud prevention",
      "Load balancing and server optimisation",
      "Storing your cookie consent preferences",
      "Shopping cart and checkout functionality",
    ],
  },
  {
    title: "Functional Cookies",
    icon: Settings,
    color: "text-green-500",
    bg: "bg-green-500/10",
    required: false,
    retention: "Up to 12 months",
    description: "These cookies enable enhanced functionality and personalisation to improve your experience:",
    items: [
      "Remembering your language and region preferences",
      "Saving your search history and recently viewed salons, spas, and studios",
      "Storing your booking preferences and favourite providers",
      "Enabling dark/light mode theme preferences",
      "Auto-filling forms with previously entered information",
    ],
  },
  {
    title: "Analytics Cookies",
    icon: BarChart,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    required: false,
    retention: "Up to 24 months",
    description: "These cookies help us understand how visitors interact with our platform so we can improve performance and user experience:",
    items: [
      "Tracking page views, navigation patterns, and session duration",
      "Measuring the effectiveness of new features and design changes",
      "Identifying popular services, categories, and business listings",
      "Analysing booking funnel completion rates and drop-off points",
      "Generating aggregate usage statistics (no individual identification)",
    ],
  },
  {
    title: "Marketing Cookies",
    icon: Megaphone,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    required: false,
    retention: "Up to 12 months",
    description: "These cookies are used to deliver relevant advertisements and measure the effectiveness of marketing campaigns:",
    items: [
      "Showing personalised offers and promotions based on your interests",
      "Tracking the effectiveness of advertising campaigns across platforms",
      "Limiting the frequency of advertisements shown to you",
      "Measuring return on advertising spend and conversion rates",
      "Enabling remarketing to users who have previously visited our platform",
    ],
  },
];

const thirdPartyCookies = [
  {
    provider: "Google Analytics",
    purpose: "Website analytics, user behaviour tracking, and performance monitoring",
    type: "Analytics",
    privacy: "https://policies.google.com/privacy",
  },
  {
    provider: "Razorpay",
    purpose: "Payment processing, transaction security, and fraud detection",
    type: "Essential",
    privacy: "https://razorpay.com/privacy/",
  },
  {
    provider: "Firebase",
    purpose: "Push notifications, app analytics, and crash reporting",
    type: "Functional",
    privacy: "https://firebase.google.com/support/privacy",
  },
  {
    provider: "Google Ads",
    purpose: "Advertising, remarketing, and conversion tracking",
    type: "Marketing",
    privacy: "https://policies.google.com/privacy",
  },
];

export default function CookiePolicy() {
  useDocumentTitle("Cookie Policy | Grumming");
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div {...fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Cookie Policy</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4">How we use cookies</h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">Last updated: January 2026</p>
            <p className="text-white/50 mt-3 text-sm max-w-2xl leading-relaxed">
              This Cookie Policy explains how Grumming ("we", "our", or "us") uses cookies and similar tracking technologies when you visit our website or use our mobile application. This policy should be read alongside our Privacy Policy, which provides further details on how we process your personal data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">1. What Are Cookies?</h2>
              </div>
            </div>
            <div className="rounded-md p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website or use an application. They are widely used to make websites and apps work more efficiently, provide a better user experience, and supply information to the owners of the site or app.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cookies may be set by the website you are visiting ("first-party cookies") or by third-party services that appear on the page ("third-party cookies"). Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remaining on your device for a set period or until you delete them).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">2. Types of Cookies We Use</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-md p-6 h-full" data-testid={`card-cookie-type-${index}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cookie.bg} flex items-center justify-center`}>
                      <cookie.icon className={`w-5 h-5 ${cookie.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{cookie.title}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={`text-[10px] font-medium uppercase tracking-wider px-1.5 py-0.5 rounded ${cookie.required ? "bg-blue-500/10 text-blue-500" : "bg-muted text-muted-foreground"}`}>
                          {cookie.required ? "Required" : "Optional"}
                        </span>
                        <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" /> {cookie.retention}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{cookie.description}</p>
                  <ul className="space-y-1.5">
                    {cookie.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-amber-400 mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground mt-2">
                  We use cookies from the following trusted third-party services. Each provider has its own privacy policy governing the use of cookies:
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {thirdPartyCookies.map((cookie, index) => (
              <motion.div
                key={cookie.provider}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-md p-6" data-testid={`card-third-party-${index}`}>
                  <div className="grid sm:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Provider</p>
                      <p className="text-foreground font-semibold text-sm">{cookie.provider}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Purpose</p>
                      <p className="text-foreground text-sm">{cookie.purpose}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Type</p>
                      <p className="text-foreground font-semibold text-sm">{cookie.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Privacy Policy</p>
                      <a href={cookie.privacy} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline" data-testid={`link-privacy-${index}`}>
                        View Policy
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">4. Managing Your Cookie Preferences</h2>
              </div>
            </div>
          </motion.div>

          <div className="rounded-md p-6">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have the right to control how cookies are used on your device. Here are the ways you can manage your preferences:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-amber-500 font-semibold flex-shrink-0 min-w-[130px]">Cookie Banner:</span>
                <span className="text-muted-foreground">When you first visit our platform, a cookie consent banner allows you to accept or decline non-essential cookies. You may update your preferences at any time.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-semibold flex-shrink-0 min-w-[130px]">Browser Settings:</span>
                <span className="text-muted-foreground">Most web browsers allow you to manage cookies through their settings. You can block, delete, or be notified about cookies. Note that blocking essential cookies may impair platform functionality.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-semibold flex-shrink-0 min-w-[130px]">Device Settings:</span>
                <span className="text-muted-foreground">On mobile devices, you can manage tracking and advertising preferences through your device's privacy settings (iOS: Settings &gt; Privacy; Android: Settings &gt; Google &gt; Ads).</span>
              </li>
              <li className="flex gap-3 flex-col">
                <span className="text-amber-500 font-semibold">Third-Party Opt-outs:</span>
                <span className="text-muted-foreground mb-2">You can opt out of third-party tracking using these tools:</span>
                <ul className="list-disc pl-5 space-y-1.5 ml-3">
                  <li className="text-muted-foreground text-sm">
                    Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>
                  </li>
                  <li className="text-muted-foreground text-sm">
                    Google Ads: <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Personalisation Settings</a>
                  </li>
                  <li className="text-muted-foreground text-sm">
                    Industry Opt-out: <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">5. Impact of Disabling Cookies</h2>
              </div>
            </div>
          </motion.div>

          <div className="rounded-md p-6">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Disabling certain cookies may affect your experience on our platform. Here is what to expect:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground text-sm">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span><strong className="text-foreground">Essential Cookies:</strong> Cannot be disabled. These are required for the platform to function, including login, security, and payment processing.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground text-sm">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span><strong className="text-foreground">Functional Cookies:</strong> Disabling these means the platform will not remember your preferences, and you may need to re-enter settings each visit.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground text-sm">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span><strong className="text-foreground">Analytics Cookies:</strong> Disabling these prevents us from understanding usage patterns, which may slow down our ability to improve the platform.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground text-sm">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span><strong className="text-foreground">Marketing Cookies:</strong> Disabling these means you may still see advertisements, but they will be less relevant to your interests.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">6. Updates to This Policy</h2>
              </div>
            </div>
          </motion.div>

          <div className="rounded-md p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, our business operations, or cookie practices. When we make material changes:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3 text-muted-foreground text-sm">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span>We will update the "Last updated" date at the top of this page.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground text-sm">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span>For significant changes, we will display a prominent notice on our platform or request your consent again where required by law.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground text-sm">
                <span className="text-amber-400 mt-0.5">&bull;</span>
                <span>We encourage you to review this policy periodically to stay informed about our cookie practices.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">7. Contact Us</h2>
              </div>
            </div>
            <div className="rounded-md p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, or if you wish to exercise your rights regarding cookie data, please contact us:
              </p>
              <div className="border border-border rounded-md p-5 space-y-1.5">
                <p className="text-foreground font-medium">Grumming Support Team</p>
                <p className="text-muted-foreground text-sm">Email: support@grumming.com</p>
                <p className="text-muted-foreground text-sm">We will respond to your inquiry within 48 hours.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
