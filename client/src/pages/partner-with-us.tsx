import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { Building, TrendingUp, Users, BarChart, Headphones, Globe, CheckCircle, Mail, Phone, Scissors } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const benefits = [
  {
    icon: Users,
    title: "Reach More Customers",
    description: "Get discovered by thousands of customers actively looking for beauty and grooming services in your area.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: BarChart,
    title: "Grow Your Revenue",
    description: "Fill empty appointment slots and increase your bookings with our smart scheduling system.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Globe,
    title: "Online Presence",
    description: "Get a professional digital profile showcasing your services, photos, reviews, and pricing.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our partner success team helps you onboard, optimize your profile, and grow your business.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    description: "Access analytics on bookings, customer preferences, peak hours, and revenue trends.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Building,
    title: "Zero Setup Cost",
    description: "Joining Grumming is completely free. No upfront fees, no hidden charges to get started.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const steps = [
  { step: "1", title: "Sign Up", description: "Fill out the partner form with your business details and contact information." },
  { step: "2", title: "Verification", description: "Our team verifies your business credentials and visits your location." },
  { step: "3", title: "Profile Setup", description: "We help you create a professional profile with services, pricing, and photos." },
  { step: "4", title: "Go Live", description: "Start receiving bookings from customers in your area and grow your business." },
];

const stats = [
  { value: "500+", label: "Partner Businesses" },
  { value: "15+", label: "Cities" },
  { value: "10,000+", label: "Monthly Bookings" },
  { value: "4.8", label: "Avg. Partner Rating" },
];

export default function PartnerWithUs() {
  useDocumentTitle("Partner With Us | Grumming");
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-partner-label">Partner with Us</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-partner-title">
              Grow your business with Grumming
            </h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-partner-subtitle">
              Join India's fastest-growing beauty & grooming booking platform and connect with thousands of customers looking for your services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-bold text-foreground mb-8" data-testid="text-why-partner">Why partner with Grumming?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08 } } }}
              >
                <div className="rounded-md p-5" data-testid={`card-benefit-${index}`}>
                  <div className={`w-10 h-10 rounded-xl ${benefit.bg} flex items-center justify-center mb-3`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-bold text-foreground mb-8" data-testid="text-how-it-works">How it works</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, index) => (
              <motion.div
                key={s.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } } }}
              >
                <div className="rounded-md p-5" data-testid={`card-step-${s.step}`}>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-sm font-bold text-primary">{s.step}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="text-what-you-need">What you need to get started</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-md p-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Valid business license or shop registration",
                  "Government-issued ID proof",
                  "Photos of your business interior and services",
                  "Service menu with pricing",
                  "GST registration (if applicable)",
                  "Bank account details for payouts",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-md p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3" data-testid="text-ready-to-partner">Ready to grow your business?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Get in touch with our partnership team and we'll help you get started on Grumming.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  className="bg-accent text-accent-foreground border-accent-border"
                  asChild
                  data-testid="button-email-partner"
                >
                  <a href="mailto:partners@grumming.com?subject=Partnership%20Inquiry">
                    <Mail className="w-4 h-4 mr-2" />
                    partners@grumming.com
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  data-testid="button-whatsapp-partner"
                >
                  <a href="https://wa.me/919229506624?text=Hi%2C%20I'm%20interested%20in%20partnering%20with%20Grumming." target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
