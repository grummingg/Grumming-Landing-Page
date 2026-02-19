import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Zap, Shield, HeartHandshake, TrendingUp, MapPin, Users, Scissors } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "10,000+", label: "Happy Customers", icon: Users },
  { value: "500+", label: "Partner Salons", icon: Scissors },
  { value: "15+", label: "Cities Covered", icon: MapPin },
  { value: "4.8", label: "Average Rating", icon: Sparkles },
];

const values = [
  {
    icon: Zap,
    title: "Convenience First",
    description: "Booking a salon appointment should take seconds, not minutes. We obsess over simplicity so you can focus on looking your best.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Shield,
    title: "Verified Quality",
    description: "Every partner salon is carefully vetted to meet our quality standards. Real reviews from real customers help you choose with confidence.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Empowering Local Salons",
    description: "We help neighbourhood salons compete in the digital age with tools for booking, reputation management, and customer insights.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: TrendingUp,
    title: "Always Improving",
    description: "Your feedback shapes our product. We ship updates every week to make the experience smoother, faster, and more delightful.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link href="/">
            <button className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-10" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </Link>

          <motion.div {...fadeUp}>
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">About Grumming</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-about-title">
              Making self-care<br />effortless for everyone
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              We connect you with the best salons and grooming experts near you, turning what used to be a hassle into something you actually look forward to.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div {...fadeUp}>
              <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">Born from a simple frustration</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2019, we noticed something that bothered us: finding and booking a quality salon was needlessly difficult. Endless phone calls, long hold times, showing up only to discover a two-hour wait. It didn't make sense in an age where you could book flights in seconds.
                </p>
                <p>
                  Salon owners had it just as rough. Juggling phone bookings, managing walk-ins, and trying to attract new clients with no digital presence. Great service was going unnoticed because discovery was broken.
                </p>
                <p>
                  That's when Grumming was born. We set out to build a platform that makes salon booking as effortless as ordering food online, while giving local salons the tools they need to grow and thrive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="bg-white dark:bg-[#1e293b] rounded-md p-8 shadow-sm">
                <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Our Vision</p>
                <h3 className="text-xl font-bold text-foreground mb-4">India's most trusted salon platform</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We envision a future where anyone, anywhere in India, can discover, compare, and book salon services in under 30 seconds. Where local salons have access to the same digital tools as big brands. Where self-care is accessible, affordable, and enjoyable for everyone.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 dark:bg-white/5 rounded-md p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">For Customers</p>
                    <p className="text-xs text-muted-foreground">Discover, book, and enjoy premium grooming services effortlessly</p>
                  </div>
                  <div className="bg-muted/50 dark:bg-white/5 rounded-md p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">For Salons</p>
                    <p className="text-xs text-muted-foreground">Grow your business with smart booking and customer management</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Built on values that matter</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-muted/40 dark:bg-[#1e293b] rounded-md p-6 h-full" data-testid={`card-value-${index}`}>
                  <div className={`w-10 h-10 rounded-xl ${value.bg} flex items-center justify-center mb-4`}>
                    <value.icon className={`w-5 h-5 ${value.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Join Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              We're just getting started
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Grumming is growing fast and we're looking for passionate people who want to shape the future of beauty and wellness in India.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/hiring">
                <button className="inline-flex items-center gap-2 bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-6 py-3 rounded-md font-medium text-sm transition-colors" data-testid="button-view-careers">
                  View Open Positions
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-medium text-sm transition-colors" data-testid="button-contact-us">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
