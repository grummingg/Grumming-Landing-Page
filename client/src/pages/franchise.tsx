import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Headphones, Shield, BookOpen, Banknote, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SalonFooter } from "@/components/salon/footer";
import { SubPageHero } from "@/components/salon/sub-page-hero";
import { fadeUpVariants as fadeUp } from "@/lib/animations";

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
    description: "Earn through commissions on every booking in your territory, plus advertising revenue from local partners.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const stats = [
  { value: "15+", label: "Cities Live" },
  { value: "50+", label: "Cities Planned" },
  { value: "500+", label: "Partner Businesses" },
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
  { step: "4", title: "Launch", description: "Complete training, onboard local businesses, and launch Grumming in your city." },
];

export default function Franchise() {
  useDocumentTitle("Franchise Opportunities | Grumming");
  return (
    <div className="min-h-screen bg-background">
      <SubPageHero
        label="Franchise Opportunities"
        title={<>Bring Grumming<br />to your city</>}
        subtitle="Own a piece of India's fastest-growing beauty & grooming booking platform. Launch and operate Grumming in your region."
      >
        <div className="mt-8">
          <Button className="bg-amber-500 border-amber-600 text-white" asChild data-testid="button-inquire-franchise">
            <a href="mailto:franchise@grumming.com">Inquire Now <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
        </div>
      </SubPageHero>

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
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Why Franchise With Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">A partnership built for success</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              We provide the technology, brand, and playbook — you bring local expertise and drive.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } }}>
                <div className="h-full" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-xl ${benefit.bg} flex items-center justify-center mb-4`}>
                      <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
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
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Investment Overview</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Franchise at a glance</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div>
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {investmentDetails.map((detail) => (
                    <div key={detail.label} data-testid={`detail-${detail.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <p className="text-muted-foreground text-sm mb-1">{detail.label}</p>
                      <p className="text-foreground font-semibold text-lg">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
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

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Interested in a franchise?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              We're expanding to 50+ cities and looking for driven entrepreneurs to join our journey.
            </p>
            <Button className="bg-primary border-primary-border text-white" asChild data-testid="button-franchise-inquiry">
              <a href="mailto:franchise@grumming.com">Send Franchise Inquiry</a>
            </Button>
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
