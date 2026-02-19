import { motion } from "framer-motion";
import { ArrowLeft, IndianRupee, Clock, CheckCircle, XCircle, Crown, CreditCard, Mail } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const eligibilityReasons = [
  {
    icon: XCircle,
    title: "Service not rendered",
    description: "Full refund if salon fails to provide the booked service",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: CheckCircle,
    title: "Salon cancellation",
    description: "Full refund if the salon cancels your appointment",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Clock,
    title: "Significant delay",
    description: "Refund or credit if salon delays more than 30 minutes without notice",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: CheckCircle,
    title: "Quality issues",
    description: "Partial or full refund if service quality is significantly below expectations (subject to review)",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: CreditCard,
    title: "Double charging",
    description: "Full refund for duplicate or erroneous charges",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const nonRefundableSituations = [
  "No-shows without prior cancellation",
  "Late cancellations outside the salon's free cancellation window",
  "Completed services where the customer was satisfied at the time",
  "Personal preference changes after service completion",
  "Promotional or discounted bookings (unless otherwise stated)",
];

const refundProcessSteps = [
  {
    number: 1,
    title: "Submit Request",
    description: "Submit refund request through the app or email support@grumming.com",
  },
  {
    number: 2,
    title: "Review",
    description: "Our team reviews within 48 hours",
  },
  {
    number: 3,
    title: "Initiation",
    description: "If approved, refund initiated within 3-5 business days",
  },
  {
    number: 4,
    title: "Completion",
    description: "Amount credited to original payment method within 5-7 business days",
  },
];

const refundMethods = [
  {
    icon: CreditCard,
    title: "Original Payment Method",
    description: "UPI, card, or wallet",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: IndianRupee,
    title: "Grumming Credits",
    description: "Instant, can be used for future bookings",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: CreditCard,
    title: "Bank Transfer",
    description: "For special cases, 7-10 business days",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <span className="inline-flex items-center text-white/60 hover:text-white text-sm mb-8 cursor-pointer transition-colors" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </span>
          </Link>

          <motion.div {...fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-refund-label">
              Refund Policy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-refund-title">
              Our refund commitment
            </h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-refund-date">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
              Overview
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl" data-testid="text-overview-content">
              Grumming is committed to fair refund practices. Refunds depend on the salon's individual policy and the circumstances of each booking. We believe in transparency and work diligently to ensure every customer receives the service they paid for or a fair refund when things don't go as planned.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3" data-testid="text-eligibility-title">
              Eligibility for Refunds
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-eligibility-subtitle">
              You may be eligible for a refund in the following situations:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibilityReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-eligibility-${index}`}
              >
                <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 h-full shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${reason.bg} flex items-center justify-center mb-4`}>
                    <reason.icon className={`w-5 h-5 ${reason.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-eligibility-${index}-title`}>
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-eligibility-${index}-desc`}>
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3" data-testid="text-non-refundable-title">
              Non-Refundable Situations
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-non-refundable-subtitle">
              Refunds cannot be issued in these circumstances:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted/40 dark:bg-[#1e293b] rounded-md p-8"
            data-testid="card-non-refundable"
          >
            <ul className="space-y-4">
              {nonRefundableSituations.map((situation, index) => (
                <li key={situation} className="flex items-start gap-4" data-testid={`item-non-refundable-${index}`}>
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground leading-relaxed">{situation}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3" data-testid="text-process-title">
              Refund Process
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-process-subtitle">
              Here's how our refund process works:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {refundProcessSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-process-${index}`}
              >
                <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 h-full shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-amber-500">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-process-${index}-title`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-process-${index}-desc`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 dark:from-amber-500/20 dark:to-amber-500/10 rounded-md p-8 border border-amber-500/20"
            data-testid="card-grumming-pass"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Crown className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2" data-testid="text-pass-title">
                  Grumming Pass Refunds
                </h2>
                <p className="text-muted-foreground" data-testid="text-pass-subtitle">
                  Enhanced protection for our premium members
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3" data-testid="item-pass-benefit-0">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Grumming Pass members enjoy enhanced refund protection</span>
              </div>
              <div className="flex items-start gap-3" data-testid="item-pass-benefit-1">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Priority processing within 24 hours</span>
              </div>
              <div className="flex items-start gap-3" data-testid="item-pass-benefit-2">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Extended refund window</span>
              </div>
              <div className="flex items-start gap-3" data-testid="item-pass-benefit-3">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Grumming Credits option for faster resolution</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3" data-testid="text-methods-title">
              Refund Methods
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-methods-subtitle">
              Choose your preferred refund method:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {refundMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-method-${index}`}
              >
                <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 h-full shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${method.bg} flex items-center justify-center mb-4`}>
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-method-${index}-title`}>
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-method-${index}-desc`}>
                    {method.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-contact-title">
              Need Help?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8" data-testid="text-contact-desc">
              If you have questions about our refund policy or need to submit a refund request, our support team is here to help.
            </p>
            <div className="flex items-center justify-center gap-3 bg-muted/40 dark:bg-[#1e293b] rounded-md p-6 inline-block">
              <Mail className="w-5 h-5 text-amber-500" />
              <a
                href="mailto:support@grumming.com"
                className="text-foreground font-semibold text-lg hover:text-amber-500 transition-colors"
                data-testid="link-contact-email"
              >
                support@grumming.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
