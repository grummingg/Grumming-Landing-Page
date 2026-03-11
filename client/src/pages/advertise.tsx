import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { Scissors, Megaphone, Eye, Target, BarChart3, Palette, Smartphone, ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const adFormats = [
  {
    icon: Eye,
    title: "Featured Listings",
    description: "Boost your business's visibility by appearing at the top of search results in your city. Get noticed by customers actively looking for services.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Megaphone,
    title: "Banner Ads",
    description: "Display eye-catching banners across the Grumming app and website. Perfect for promoting seasonal offers and new services.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Target,
    title: "Targeted Promotions",
    description: "Reach the right customers with location-based and interest-based targeting. Promote to users searching for specific services in your area.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Palette,
    title: "Branded Content",
    description: "Create engaging sponsored content that appears in user feeds. Showcase your expertise, team, and unique selling points.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Smartphone,
    title: "Push Notifications",
    description: "Send promotional messages directly to interested customers in your area. Great for flash deals, last-minute openings, and events.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    description: "Track every impression, click, and booking generated from your ads with detailed analytics and ROI reports.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const stats = [
  { value: "50K+", label: "Monthly Active Users" },
  { value: "15+", label: "Cities Covered" },
  { value: "92%", label: "Customer Retention" },
  { value: "3.5x", label: "Avg. ROI on Ads" },
];

const pricingTiers = [
  { name: "Starter", price: "2,999", period: "/month", features: ["Featured listing in 1 city", "Basic analytics", "Up to 1,000 impressions", "Email support"] },
  { name: "Growth", price: "7,999", period: "/month", features: ["Featured listing in 3 cities", "Banner ads on app", "Up to 10,000 impressions", "Targeted promotions", "Priority support"], popular: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["All cities access", "All ad formats", "Unlimited impressions", "Branded content", "Dedicated account manager", "Custom reporting"] },
];

export default function Advertise() {
  useDocumentTitle("Advertise With Us | Grumming");
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">Advertise on Grumming</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-advertise-title">
              Reach customers who<br />are ready to book
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              Put your brand in front of thousands of beauty-conscious customers actively searching for beauty and grooming services.
            </p>
            <a href="mailto:ads@grumming.com">
              <Button className="bg-amber-500 border-amber-600 text-white" data-testid="button-get-started-ads">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Ad Formats</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Multiple ways to reach your audience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              Choose from a range of advertising options designed to drive real results for your business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adFormats.map((format, i) => (
              <motion.div key={format.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } }}>
                <div className="h-full" data-testid={`card-ad-${format.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-xl ${format.bg} flex items-center justify-center mb-4`}>
                      <format.icon className={`w-5 h-5 ${format.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{format.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{format.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Plans for every budget</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              Flexible pricing to match your advertising goals. Start small and scale as you grow.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div key={tier.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } }}>
                <div className={`h-full relative ${tier.popular ? "ring-2 ring-primary" : ""}`} data-testid={`card-pricing-${tier.name.toLowerCase()}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground text-lg mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl font-bold text-foreground">{tier.price === "Custom" ? "" : "\u20B9"}{tier.price}</span>
                      <span className="text-muted-foreground text-sm">{tier.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">&#10003;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to advertise?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Get in touch with our advertising team to discuss the best plan for your business goals.
            </p>
            <a href="mailto:ads@grumming.com">
              <Button className="bg-primary border-primary-border text-white" data-testid="button-contact-ads">
                Contact Advertising Team
              </Button>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              Email us at <a href="mailto:ads@grumming.com" className="text-primary hover:underline">ads@grumming.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
