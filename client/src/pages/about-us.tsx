import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, HeartHandshake, TrendingUp, MapPin, Users, Scissors, Target, Eye, Lightbulb, Globe } from "lucide-react";
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
  { value: "500+", label: "Partner Businesses", icon: Scissors },
  { value: "60+", label: "Cities Across India", icon: MapPin },
  { value: "4.8", label: "Average Rating", icon: Sparkles },
];

const values = [
  {
    icon: Zap,
    title: "Convenience First",
    description: "Booking an appointment should take seconds, not minutes. We obsess over simplicity so you can focus on looking and feeling your best.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Shield,
    title: "Verified Quality",
    description: "Every partner business is carefully vetted to meet our quality standards. Real reviews from real customers help you choose with confidence.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Empowering Local Businesses",
    description: "We help neighbourhood businesses compete in the digital age with tools for booking management, reputation building, and customer insights.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: TrendingUp,
    title: "Always Improving",
    description: "Your feedback shapes our product. We ship updates every week to make the experience smoother, faster, and more delightful for everyone.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "From smart recommendations to seamless payments, we leverage technology to solve real problems in the beauty and grooming industry.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Globe,
    title: "Inclusive and Accessible",
    description: "We believe self-care should be accessible to everyone, everywhere. Our platform is designed to serve diverse communities across India.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

const milestones = [
  { year: "2019", title: "The Idea", description: "Grumming was born from a simple frustration — finding and booking quality beauty services was needlessly difficult." },
  { year: "2020", title: "Building the Foundation", description: "Assembled our founding team, built the first version of the platform, and onboarded our initial 50 partner businesses." },
  { year: "2022", title: "Expanding Horizons", description: "Launched in 10 cities across India, crossed 1,000 partner businesses, and introduced our mobile app on iOS and Android." },
  { year: "2024", title: "Scaling Up", description: "Expanded to 40+ cities, introduced Grumming Pass for premium members, and processed over 100,000 bookings." },
  { year: "2025", title: "Going Nationwide", description: "Present in 60+ cities, serving 10,000+ happy customers with 500+ verified partner businesses across India." },
];

export default function AboutUs() {
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
          <motion.div {...fadeUp}>
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3" data-testid="text-about-label">About Grumming</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-about-title">
              Making self-care<br />effortless for everyone
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed" data-testid="text-about-subtitle">
              We connect you with the best salons, spas, studios, and grooming experts near you, turning what used to be a hassle into something you actually look forward to.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight" data-testid="text-story-title">Born from a simple frustration</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2019, we noticed something that bothered us: finding and booking a quality beauty or grooming service in India was needlessly difficult. Endless phone calls, long hold times, showing up only to discover a two-hour wait. It didn't make sense in an age where you could book flights in seconds.
                </p>
                <p>
                  Business owners had it just as rough. Juggling phone bookings, managing walk-ins, and trying to attract new clients with no digital presence. Incredible talent and craftsmanship were going unnoticed because discovery was fundamentally broken.
                </p>
                <p>
                  That's when Grumming was born. We set out to build a platform that makes booking beauty and grooming services as effortless as ordering food online, while giving local businesses the tools they need to grow, compete, and thrive in the digital age.
                </p>
                <p>
                  Today, Grumming serves thousands of customers across 60+ cities in India, connecting them with verified salons, spas, studios, and beauty professionals. And we're just getting started.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#1e293b] rounded-md p-8 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-mission-title">Our Mission</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        To make beauty and grooming services accessible, affordable, and enjoyable for every person in India, while empowering local businesses with the digital tools they need to succeed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1e293b] rounded-md p-8 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-vision-title">Our Vision</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        To become India's most trusted beauty and grooming platform, where anyone, anywhere can discover, compare, and book services in under 30 seconds. Where local businesses have access to the same digital tools as big brands.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 dark:bg-white/5 rounded-md p-4">
                    <p className="text-sm font-semibold text-foreground mb-1" data-testid="text-for-customers">For Customers</p>
                    <p className="text-xs text-muted-foreground">Discover, book, and enjoy premium grooming services effortlessly</p>
                  </div>
                  <div className="bg-muted/50 dark:bg-white/5 rounded-md p-4">
                    <p className="text-sm font-semibold text-foreground mb-1" data-testid="text-for-businesses">For Businesses</p>
                    <p className="text-xs text-muted-foreground">Grow with smart booking, analytics, and customer management tools</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-values-title">Built on values that matter</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              These principles guide every decision we make, from the features we build to the businesses we partner with.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-journey-title">Key milestones</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              From an idea to a platform serving thousands across India, here's how we've grown.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16"
                  data-testid={`milestone-${milestone.year}`}
                >
                  <div className="absolute left-0 sm:left-1.5 top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-500/20 flex items-center justify-center z-10">
                    <span className="text-[10px] sm:text-xs font-bold text-amber-500">{milestone.year}</span>
                  </div>
                  <div className="bg-white dark:bg-[#1e293b] rounded-md p-5 shadow-sm">
                    <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Join Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-join-title">
              We're just getting started
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Grumming is growing fast and we're looking for passionate people who want to shape the future of beauty and wellness in India. Whether you're a customer, a business, or a potential team member, there's a place for you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/hiring">
                <button className="inline-flex items-center gap-2 bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-6 py-3 rounded-md font-medium text-sm transition-colors" data-testid="button-view-careers">
                  View Open Positions
                </button>
              </Link>
              <Link href="/partner-with-us">
                <button className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-medium text-sm transition-colors" data-testid="button-partner">
                  Become a Partner
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
