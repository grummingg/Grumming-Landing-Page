import { motion } from "framer-motion";
import { Cookie, Shield, Settings, BarChart, Megaphone, Eye, ToggleLeft, Scissors } from "lucide-react";
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
    description: "These cookies are necessary for the website to function properly and cannot be disabled.",
    items: [
      "Session management and authentication",
      "Security and fraud prevention",
      "Load balancing and server optimization",
      "Remembering your cookie consent preferences",
    ],
  },
  {
    title: "Functional Cookies",
    icon: Settings,
    color: "text-green-500",
    bg: "bg-green-500/10",
    description: "These cookies enable enhanced functionality and personalization.",
    items: [
      "Remembering your language and region preferences",
      "Saving your search history and recent salons",
      "Storing your booking preferences",
      "Enabling dark/light mode preferences",
    ],
  },
  {
    title: "Analytics Cookies",
    icon: BarChart,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description: "These cookies help us understand how visitors interact with our platform.",
    items: [
      "Tracking page views and navigation patterns",
      "Measuring the effectiveness of features",
      "Identifying popular services and salons",
      "Analyzing booking completion rates",
    ],
  },
  {
    title: "Marketing Cookies",
    icon: Megaphone,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    description: "These cookies are used to deliver relevant advertisements and track marketing campaigns.",
    items: [
      "Showing personalized offers and promotions",
      "Tracking the effectiveness of advertising campaigns",
      "Limiting the number of times you see an ad",
      "Measuring return on advertising spend",
    ],
  },
];

const thirdPartyCookies = [
  {
    provider: "Google Analytics",
    purpose: "Website analytics and usage tracking",
    type: "Analytics",
  },
  {
    provider: "Razorpay",
    purpose: "Payment processing and fraud detection",
    type: "Essential",
  },
  {
    provider: "Stripe",
    purpose: "Payment processing",
    type: "Essential",
  },
  {
    provider: "Facebook Pixel",
    purpose: "Advertising and conversion tracking",
    type: "Marketing",
  },
  {
    provider: "Google Ads",
    purpose: "Advertising and remarketing",
    type: "Marketing",
  },
];

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
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
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website or use an app. They help websites remember your preferences, login status, and other information to provide a better user experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Types of Cookies We Use</h2>
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
                <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm h-full" data-testid={`card-cookie-type-${index}`}>
                  <div className={`w-10 h-10 rounded-xl ${cookie.bg} flex items-center justify-center mb-4`}>
                    <cookie.icon className={`w-5 h-5 ${cookie.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{cookie.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{cookie.description}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {cookie.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Third-Party Cookies</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use cookies from the following third-party services:
            </p>
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
                <div className="bg-muted/40 dark:bg-[#1e293b] rounded-md p-6" data-testid={`card-third-party-${index}`}>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Provider</p>
                      <p className="text-foreground font-semibold">{cookie.provider}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Purpose</p>
                      <p className="text-foreground font-semibold">{cookie.purpose}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Type</p>
                      <p className="text-foreground font-semibold">{cookie.type}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Settings className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Managing Your Cookie Preferences</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have several options to manage cookies:
            </p>
          </motion.div>

          <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-amber-500 font-semibold flex-shrink-0">Cookie Banner:</span>
                <span className="text-muted-foreground">When you first visit our platform, you can choose which types of cookies to accept through our cookie consent banner.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-semibold flex-shrink-0">Browser Settings:</span>
                <span className="text-muted-foreground">Most browsers allow you to control cookies through their settings. You can block or delete cookies, though this may affect functionality.</span>
              </li>
              <li className="flex gap-3 flex-col">
                <span className="text-amber-500 font-semibold">Opt-out Links:</span>
                <span className="text-muted-foreground mb-3">For third-party cookies, you can use the following opt-out mechanisms:</span>
                <ul className="list-disc pl-5 space-y-2 ml-3">
                  <li className="text-muted-foreground">
                    Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>
                  </li>
                  <li className="text-muted-foreground">
                    Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook Ad Settings</a>
                  </li>
                  <li className="text-muted-foreground">
                    Google Ads: <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                <ToggleLeft className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Cookie Consent</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When you first visit Grumming, you will see a cookie consent banner that allows you to:
            </p>
          </motion.div>

          <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-3 mb-6">
              <li className="text-muted-foreground">
                Accept all cookies for the full experience
              </li>
              <li className="text-muted-foreground">
                Accept only essential cookies for basic functionality
              </li>
              <li className="text-muted-foreground">
                Customize your preferences by category
              </li>
              <li className="text-muted-foreground">
                Withdraw your consent at any time through our settings
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Your consent preferences are stored and will be remembered for future visits. You can update your preferences at any time by clicking the "Cookie Settings" link in our footer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Impact of Disabling Cookies</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              If you choose to disable certain cookies, please note:
            </p>
          </motion.div>

          <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-3">
              <li className="text-muted-foreground">
                Essential cookies cannot be disabled as they are required for the platform to function.
              </li>
              <li className="text-muted-foreground">
                Disabling functional cookies may affect your personalized experience.
              </li>
              <li className="text-muted-foreground">
                Disabling analytics cookies means we cannot improve our services based on usage data.
              </li>
              <li className="text-muted-foreground">
                Disabling marketing cookies means you may see less relevant advertisements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <BarChart className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Updates to This Policy</h2>
              </div>
            </div>
          </motion.div>

          <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm">
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of significant changes by posting a notice on our platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Megaphone className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              If you have questions about our use of cookies, please contact us at:
            </p>
          </motion.div>

          <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm">
            <p className="text-foreground font-semibold mb-2">Grumming Support Team</p>
            <p className="text-muted-foreground">Email: support@grumming.com</p>
          </div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
