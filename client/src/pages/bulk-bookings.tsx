import { motion } from "framer-motion";
import { Scissors, Users, Building, PartyPopper, GraduationCap, Heart, Calendar, Clock, Shield, Percent, Headphones, ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const useCases = [
  {
    icon: Building,
    title: "Corporate Events",
    description: "Employee wellness days, team outings, or conference grooming services. Pamper your team with on-site or pre-event appointments.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Heart,
    title: "Weddings & Celebrations",
    description: "Book grooming sessions for the entire bridal party — hair, makeup, spa, and more across multiple locations if needed.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: PartyPopper,
    title: "Special Occasions",
    description: "Birthday parties, anniversaries, festivals, or group celebrations. Get everyone looking their best together.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: GraduationCap,
    title: "College & University",
    description: "Graduation ceremonies, college fests, or farewell parties. Group bookings for students at special rates.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "Group Appointments",
    description: "Friends wanting matching makeovers, family grooming sessions, or group spa days made easy.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Calendar,
    title: "Recurring Bookings",
    description: "Monthly or weekly grooming schedules for organisations, hostels, or residential communities.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

const benefits = [
  {
    icon: Percent,
    title: "Volume Discounts",
    description: "Get special rates when booking for 5 or more people. The more you book, the more you save.",
  },
  {
    icon: Headphones,
    title: "Dedicated Coordinator",
    description: "A personal booking coordinator handles all the logistics so you don't have to worry about a thing.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose your preferred dates, times, and even split bookings across multiple locations and days.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All services are delivered by verified Grumming partners with quality assurance on every booking.",
  },
];

const steps = [
  { step: "1", title: "Tell Us Your Needs", description: "Share the number of people, services required, preferred dates, and location." },
  { step: "2", title: "Get a Custom Quote", description: "Our team curates the best options and sends you a tailored quote within 24 hours." },
  { step: "3", title: "Confirm & Relax", description: "Lock in your bookings with one payment. We handle all booking coordination for you." },
];

export default function BulkBookings() {
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
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">Bulk Bookings</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-bulk-bookings-title">
              Group bookings<br />made simple
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              Book beauty & grooming services for your team, wedding party, or any group event — with special rates and a dedicated coordinator.
            </p>
            <a href="mailto:bookings@grumming.com">
              <Button className="bg-amber-500 border-amber-600 text-white" data-testid="button-request-quote">
                Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Perfect for every occasion</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-12">
              Whether it's a corporate event, wedding, or a fun group outing — we've got you covered.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div key={useCase.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.08 } }}>
                <Card className="h-full" data-testid={`card-usecase-${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-6">
                    <div className={`w-10 h-10 rounded-xl ${useCase.bg} flex items-center justify-center mb-4`}>
                      <useCase.icon className={`w-5 h-5 ${useCase.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
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
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">Why Bulk Book</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Benefits of group bookings</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } }}>
                <Card className="h-full" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">3 simple steps</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
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
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-amber-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Plan your group booking</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Tell us about your event and we'll put together the perfect grooming package for your group.
            </p>
            <a href="mailto:bookings@grumming.com">
              <Button className="bg-primary border-primary-border text-white" data-testid="button-email-bookings">
                Get a Custom Quote
              </Button>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              Email us at <a href="mailto:bookings@grumming.com" className="text-primary hover:underline">bookings@grumming.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
