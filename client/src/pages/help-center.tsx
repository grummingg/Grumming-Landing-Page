import { motion } from "framer-motion";
import { Rocket, Calendar, CreditCard, Settings, Shield, Building2, ChevronDown, Scissors } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const helpTopics = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "New to Grumming? Learn how to create your account and make your first booking",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Calendar,
    title: "Booking Help",
    description: "Find answers about booking, rescheduling, and managing your appointments",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Questions about payment methods, pricing, and refunds",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Manage your profile, notifications, and privacy settings",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Shield,
    title: "Safety & Trust",
    description: "Learn about our safety measures and how we protect you",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Building2,
    title: "For Salon Partners",
    description: "Resources for salon owners and partners on the platform",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Search for salons in your area, select a service, choose your preferred time slot, and confirm your booking. You'll receive instant confirmation via email and SMS.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking anytime. Check the salon's cancellation policy in your booking details to understand any potential fees.",
  },
  {
    question: "How are salons verified?",
    answer: "Every salon on Grumming goes through a rigorous verification process including business license check, hygiene audit, and staff certification review to ensure quality service.",
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. All your personal data is encrypted using industry-standard security protocols and is never sold to third parties. Your privacy is our top priority.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team via email at support@grumming.com or use the in-app chat feature for instant assistance during business hours.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-muted-foreground/10 rounded-md overflow-hidden" data-testid={`faq-item-${question.toLowerCase().replace(/\s+/g, "-")}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 dark:hover:bg-white/5 transition-colors"
        data-testid={`button-faq-${question.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span className="font-semibold text-foreground text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-muted/20 dark:bg-white/5 border-t border-muted-foreground/10">
          <p className="text-muted-foreground text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function HelpCenter() {
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
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3" data-testid="label-help-center">
              Help Center
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-white"
              data-testid="text-help-heading"
            >
              How can we help you?
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed" data-testid="text-help-subtitle">
              Find answers, guides, and support for your Grumming experience
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div
                  className="bg-muted/40 dark:bg-[#1e293b] rounded-md p-6 h-full cursor-pointer hover-elevate transition-all"
                  data-testid={`card-help-topic-${topic.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${topic.bg} flex items-center justify-center mb-4`}>
                    <topic.icon className={`w-5 h-5 ${topic.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3" data-testid="label-popular-questions">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-popular-questions-heading">
              Popular Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-contact-heading">
              Still need help?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-contact-subtitle">
              Get in touch with our support team through any of these channels
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-muted/40 dark:bg-[#1e293b] rounded-md p-8 text-center" data-testid="card-contact-email">
              <p className="text-sm font-medium text-amber-500 uppercase tracking-wide mb-3">Email Support</p>
              <a
                href="mailto:support@grumming.com"
                className="text-lg font-semibold text-foreground hover:text-amber-500 transition-colors"
                data-testid="link-support-email"
              >
                support@grumming.com
              </a>
            </div>
            <div className="bg-muted/40 dark:bg-[#1e293b] rounded-md p-8 text-center" data-testid="card-contact-whatsapp">
              <p className="text-sm font-medium text-amber-500 uppercase tracking-wide mb-3">WhatsApp Support</p>
              <a
                href="https://wa.me/919229506624"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-foreground hover:text-amber-500 transition-colors"
                data-testid="link-support-whatsapp"
              >
                +91 9229506624
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-6 py-3 rounded-md font-medium text-sm transition-colors"
                data-testid="button-contact-page"
              >
                Contact Us
              </button>
            </Link>
            <Link href="/faq">
              <button
                className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-medium text-sm transition-colors hover-elevate"
                data-testid="button-faq-page"
              >
                View FAQ
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
