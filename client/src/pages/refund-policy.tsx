import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { IndianRupee, Clock, CheckCircle, XCircle, Crown, CreditCard, Mail, Shield, AlertTriangle, FileText, Bell } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";
import { SubPageHero } from "@/components/salon/sub-page-hero";
import { fadeUp } from "@/lib/animations";

const eligibilityReasons = [
  {
    icon: XCircle,
    title: "Service Not Rendered",
    description: "Full refund if the service provider fails to provide the booked service without prior notice or valid reason.",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: CheckCircle,
    title: "Provider Cancellation",
    description: "Full refund if the service provider cancels your confirmed appointment for any reason.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Clock,
    title: "Significant Delay",
    description: "Full refund or Grumming Credits if the provider delays your appointment by more than 30 minutes without prior communication.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Health or Safety Concern",
    description: "Full refund if the service environment poses a health or safety risk, subject to verification by our team.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: CreditCard,
    title: "Duplicate or Erroneous Charges",
    description: "Full refund for any duplicate charges, incorrect amounts, or transactions you did not authorise.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: AlertTriangle,
    title: "Service Quality Issues",
    description: "Partial or full refund if the service quality is significantly below the description provided on the platform, subject to investigation.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const nonRefundableSituations = [
  { text: "No-shows without prior cancellation within the allowed cancellation window.", detail: "If you fail to show up for your appointment without notifying the provider in advance." },
  { text: "Late cancellations outside the provider's free cancellation window.", detail: "Each provider sets their own cancellation policy, which is displayed at the time of booking." },
  { text: "Completed services where no complaint was raised at the time of service.", detail: "Refund requests for completed services must be raised within 48 hours of the appointment." },
  { text: "Change of mind or personal preference after service completion.", detail: "Subjective dissatisfaction without documented quality issues is not eligible for refund." },
  { text: "Services availed under non-refundable promotional offers.", detail: "Bookings made with promotional codes or special discounts marked as non-refundable at the time of purchase." },
  { text: "Platform service fees and convenience charges.", detail: "Any service fees charged by Grumming for facilitating the booking are non-refundable unless the entire booking is cancelled before confirmation." },
];

const refundProcessSteps = [
  {
    number: 1,
    title: "Submit Request",
    description: "Raise a refund request through the Grumming app, website, or by emailing support@grumming.com within 48 hours of the appointment.",
  },
  {
    number: 2,
    title: "Review and Investigation",
    description: "Our team will review your request and may contact you or the service provider for additional details. Review is completed within 3 business days.",
  },
  {
    number: 3,
    title: "Decision and Communication",
    description: "You will be notified of the refund decision via email and in-app notification, including the refund amount and method.",
  },
  {
    number: 4,
    title: "Refund Processing",
    description: "Approved refunds are initiated within 2 business days. The amount is credited to your original payment method within 5-7 business days, depending on your bank.",
  },
];

const refundMethods = [
  {
    icon: CreditCard,
    title: "Original Payment Method",
    description: "Refund credited to the same UPI, card, net banking, or wallet used for payment. Processing time: 5-7 business days.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: IndianRupee,
    title: "Grumming Credits",
    description: "Instant credit to your Grumming wallet. Can be used for future bookings on the platform. Valid for 12 months from the date of issue.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: CreditCard,
    title: "Bank Transfer (NEFT/IMPS)",
    description: "For special cases where the original payment method is unavailable. Processing time: 7-10 business days. Bank details verification required.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function RefundPolicy() {
  useDocumentTitle("Refund Policy | Grumming");
  return (
    <div className="min-h-screen bg-background">
      <SubPageHero
        compact
        label="Refund Policy"
        title="Our refund commitment"
        subtitle="Last updated: January 2026"
      >
        <p className="text-white/50 mt-3 text-sm max-w-2xl leading-relaxed">
          At Grumming, we are committed to ensuring a fair and transparent refund process. This Refund Policy outlines the circumstances under which refunds may be issued, the process for requesting a refund, and the timelines involved. This policy applies to all bookings made through the Grumming platform.
        </p>
      </SubPageHero>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">1. Overview</h2>
              </div>
            </div>
            <div className="rounded-md p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Grumming acts as an intermediary platform connecting users with independent salons, spas, studios, and beauty professionals. Refund eligibility depends on the specific circumstances of each booking and the individual cancellation policies set by service providers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to resolve all refund requests fairly and promptly. All refund amounts are in Indian Rupees (INR) and are processed through secure payment channels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Important: Refund requests must be submitted within <strong className="text-foreground">48 hours</strong> of the scheduled appointment time. Requests submitted after this window may not be eligible for processing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">2. Refund Eligibility</h2>
                <p className="text-muted-foreground mt-2">
                  You may be eligible for a full or partial refund in the following circumstances:
                </p>
              </div>
            </div>
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
                <div className="rounded-md p-6 h-full">
                  <div className={`w-10 h-10 rounded-xl ${reason.bg} flex items-center justify-center mb-4`}>
                    <reason.icon className={`w-5 h-5 ${reason.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2" data-testid={`text-eligibility-${index}-title`}>
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

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">3. Non-Refundable Situations</h2>
                <p className="text-muted-foreground mt-2">
                  Refunds will not be issued in the following circumstances:
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-md p-8"
            data-testid="card-non-refundable"
          >
            <ul className="space-y-5">
              {nonRefundableSituations.map((situation, index) => (
                <li key={index} className="flex items-start gap-4" data-testid={`item-non-refundable-${index}`}>
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <span className="text-foreground font-medium">{situation.text}</span>
                    <p className="text-muted-foreground text-sm mt-1">{situation.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">4. Refund Process</h2>
                <p className="text-muted-foreground mt-2">
                  Our refund process is designed to be simple and transparent:
                </p>
              </div>
            </div>
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
                <div className="rounded-md p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-amber-500">{step.number}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2" data-testid={`text-process-${index}-title`}>
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

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">5. Refund Methods</h2>
                <p className="text-muted-foreground mt-2">
                  Refunds may be processed through the following methods, depending on your preference and eligibility:
                </p>
              </div>
            </div>
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
                <div className="rounded-md p-6 h-full">
                  <div className={`w-10 h-10 rounded-xl ${method.bg} flex items-center justify-center mb-4`}>
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2" data-testid={`text-method-${index}-title`}>
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

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Crown className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">6. Grumming Pass - Enhanced Refund Protection</h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 dark:from-amber-500/20 dark:to-amber-500/10 rounded-md p-8 border border-amber-500/20" data-testid="card-grumming-pass">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Grumming Pass members enjoy enhanced refund protection and priority support as part of their membership benefits:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3" data-testid="item-pass-benefit-0">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Priority Processing</span>
                    <p className="text-muted-foreground text-sm mt-0.5">Refund requests reviewed within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="item-pass-benefit-1">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Extended Refund Window</span>
                    <p className="text-muted-foreground text-sm mt-0.5">Up to 72 hours to raise a refund request</p>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="item-pass-benefit-2">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Instant Grumming Credits</span>
                    <p className="text-muted-foreground text-sm mt-0.5">Option to receive instant wallet credits instead of waiting for bank processing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="item-pass-benefit-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">Dedicated Support</span>
                    <p className="text-muted-foreground text-sm mt-0.5">Access to a dedicated support representative for refund queries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-violet-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">7. Disputes and Escalation</h2>
              </div>
            </div>
            <div className="rounded-md p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are dissatisfied with the outcome of your refund request, you have the following options:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-muted-foreground text-sm">
                  <span className="text-amber-400 mt-0.5">&bull;</span>
                  <span><strong className="text-foreground">Internal Escalation:</strong> You may escalate your case by replying to the refund decision email or contacting support@grumming.com with the subject line "Refund Escalation". Our senior team will review your case within 5 business days.</span>
                </li>
                <li className="flex gap-3 text-muted-foreground text-sm">
                  <span className="text-amber-400 mt-0.5">&bull;</span>
                  <span><strong className="text-foreground">Grievance Officer:</strong> You may contact our Grievance Officer at support@grumming.com. We will acknowledge your complaint within 24 hours and provide a resolution within 15 days.</span>
                </li>
                <li className="flex gap-3 text-muted-foreground text-sm">
                  <span className="text-amber-400 mt-0.5">&bull;</span>
                  <span><strong className="text-foreground">Consumer Forum:</strong> If the matter remains unresolved, you retain the right to approach the appropriate consumer dispute redressal forum under the Consumer Protection Act, 2019.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-rose-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">8. Contact Us</h2>
              </div>
            </div>
            <div className="rounded-md p-6">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For any questions about this Refund Policy or to submit a refund request, please contact our support team:
              </p>
              <div className="border border-border rounded-md p-5 space-y-1.5 mb-6">
                <p className="text-foreground font-medium">Grumming Support Team</p>
                <p className="text-muted-foreground text-sm">Email: support@grumming.com</p>
                <p className="text-muted-foreground text-sm">WhatsApp: +91 9229506624</p>
                <p className="text-muted-foreground text-sm">Response Time: Within 24 hours on business days</p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-hero dark:bg-white text-white dark:text-hero px-6 py-3 rounded-md font-medium text-sm transition-colors hover:opacity-90" data-testid="button-contact">
                Send us a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
