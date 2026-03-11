import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { Scissors, Store, CalendarCheck, Star, BarChart3, Smartphone, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Booking System",
    description: "Let customers book appointments 24/7. Manage your calendar, set availability, and avoid double bookings automatically.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    description: "Build your reputation with verified customer reviews. Showcase your best work and attract new clients.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Track bookings, revenue, peak hours, and customer trends with real-time dashboards and reports.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Smartphone,
    title: "Business Dashboard App",
    description: "Manage everything from your phone — accept bookings, update services, respond to reviews, and more.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Shield,
    title: "Verified Badge",
    description: "Get a verified badge on your profile that builds customer trust and boosts your visibility in search results.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Keep track of your regulars, their preferences, and visit history to deliver personalised service every time.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const stats = [
  { value: "3x", label: "More Bookings" },
  { value: "500+", label: "Businesses Onboard" },
  { value: "40%", label: "Revenue Growth" },
  { value: "Free", label: "To Get Started" },
];

const steps = [
  { step: "1", title: "Register Your Business", description: "Sign up with your business details — it takes less than 5 minutes." },
  { step: "2", title: "Set Up Your Profile", description: "Add services, pricing, photos, and set your working hours." },
  { step: "3", title: "Get Verified", description: "Our team reviews your business and grants a verified badge." },
  { step: "4", title: "Start Earning", description: "Go live and receive bookings from customers in your area." },
];

export default function ForSalonOwners() {
  useDocumentTitle("For Business Owners | Grumming");
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">For Business Owners</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-business-owners-title">
              Your business deserves<br />more customers
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              Join Grumming and let thousands of customers discover, book, and love your services — all for free.
            </p>
            <Link href="/partner-with-us">
              <Button className="bg-amber-500 border-amber-600 text-white" data-testid="button-get-started">
                Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Why Grumming</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything you need to grow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              Powerful tools designed specifically for beauty and grooming businesses to attract customers, manage bookings, and increase revenue.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } }} >
                <div className="h-full" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
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
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Get started in 4 easy steps</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } }}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Store className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to grow your business?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join 500+ partners already using Grumming to attract new customers and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/partner-with-us">
                <Button className="bg-primary border-primary-border text-white" data-testid="button-become-partner">
                  Become a Partner
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" data-testid="button-contact-us">
                  Contact Us
                </Button>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Questions? Email us at <a href="mailto:partners@grumming.com" className="text-primary hover:underline">partners@grumming.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
