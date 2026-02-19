import { motion } from "framer-motion";
import { Scissors, Building2, TrendingUp, Headphones, Shield, BookOpen, Banknote, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const benefits = [
  {
    icon: Award,
    title: "Proven Business Model",
    description: "Leverage Grumming's established brand, technology, and customer base to launch with a head start.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: BookOpen,
    title: "Complete Training",
    description: "Receive comprehensive training on operations, technology, partner management, and customer service.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Dedicated franchise success manager, regular check-ins, and 24/7 support from the Grumming team.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: TrendingUp,
    title: "High Growth Potential",
    description: "The Indian beauty & wellness market is growing at 15%+ annually. Be part of this opportunity.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Shield,
    title: "Exclusive Territory",
    description: "Get exclusive rights to operate Grumming in your city or region with no competing franchisees.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Banknote,
    title: "Revenue Sharing",
    description: "Earn through commissions on every booking in your territory, plus advertising revenue from local salons.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const stats = [
  { value: "15+", label: "Cities Live" },
  { value: "50+", label: "Cities Planned" },
  { value: "500+", label: "Partner Salons" },
  { value: "15%+", label: "Market Growth" },
];

const investmentDetails = [
  { label: "Franchise Fee", value: "Contact Us" },
  { label: "Minimum Investment", value: "Contact Us" },
  { label: "Contract Duration", value: "3-5 Years" },
  { label: "ROI Timeline", value: "12-18 Months" },
  { label: "Territory", value: "City / Region" },
  { label: "Training Period", value: "2-4 Weeks" },
];

const steps = [
  { step: "1", title: "Apply", description: "Fill out the franchise inquiry form with your background and preferred location." },
  { step: "2", title: "Evaluation", description: "Our team evaluates your application and schedules a discovery call." },
  { step: "3", title: "Agreement", description: "Review the franchise agreement, investment details, and territory allocation." },
  { step: "4", title: "Launch", description: "Complete training, onboard local salons, and launch Grumming in your city." },
];

export default function Franchise() {
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
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">Franchise Opportunities</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-franchise-title">
              Bring Grumming<br />to your city
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              Own a piece of India's fastest-growing salon booking platform. Launch and operate Grumming in your region.
            </p>
            <a href="mailto:franchise@grumming.com">
              <Button className="bg-amber-500 border-amber-600 text-white" data-testid="button-inquire-franchise">
                Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
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
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Why Franchise With Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">A partnership built for success</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              We provide the technology, brand, and playbook — you bring local expertise and drive.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } }}>
                <Card className="h-full" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-xl ${benefit.bg} flex items-center justify-center mb-4`}>
                      <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Investment Overview</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Franchise at a glance</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investmentDetails.map((detail) => (
                    <div key={detail.label} data-testid={`detail-${detail.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <p className="text-muted-foreground text-sm mb-1">{detail.label}</p>
                      <p className="text-foreground font-semibold text-lg">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">How to become a franchisee</h2>
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

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Interested in a franchise?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              We're expanding to 50+ cities and looking for driven entrepreneurs to join our journey.
            </p>
            <a href="mailto:franchise@grumming.com">
              <Button className="bg-primary border-primary-border text-white" data-testid="button-franchise-inquiry">
                Send Franchise Inquiry
              </Button>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              Email us at <a href="mailto:franchise@grumming.com" className="text-primary hover:underline">franchise@grumming.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
