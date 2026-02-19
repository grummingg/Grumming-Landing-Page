import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const faqCategories = [
  {
    title: "Booking & Services",
    faqs: [
      {
        question: "How do I book an appointment on Grumming?",
        answer:
          "Simply search for salons near you, browse available services and time slots, then confirm your booking with just a few taps. You'll receive an instant confirmation with all the details.",
      },
      {
        question: "Can I cancel or reschedule my appointment?",
        answer:
          "Absolutely. You can cancel or reschedule your appointment up to 2 hours before the scheduled time through the app. Just go to your bookings and select the appointment you'd like to modify.",
      },
      {
        question: "How do I find the best salon near me?",
        answer:
          "Use the search feature to find salons in your area. You can filter by service type, ratings, price range, and distance. Each salon has detailed profiles with photos, reviews, and service menus to help you choose.",
      },
      {
        question: "Can I book for someone else?",
        answer:
          "Yes, you can book appointments for friends or family members. Simply enter their details during the booking process. They'll receive the appointment confirmation as well.",
      },
    ],
  },
  {
    title: "Payments & Pricing",
    faqs: [
      {
        question: "Is Grumming free to use?",
        answer:
          "Yes, Grumming is completely free for customers. You can browse salons, compare prices, read reviews, and book appointments without any charges. You only pay the salon directly for the services you receive.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "Payment is handled directly at the salon. Most salons accept cash, UPI, credit/debit cards, and digital wallets. The accepted payment methods are listed on each salon's profile page.",
      },
    ],
  },
  {
    title: "Account & App",
    faqs: [
      {
        question: "Are the salons on Grumming verified?",
        answer:
          "Yes, every salon on Grumming goes through a verification process. We check their business credentials, visit the premises, and ensure they meet our quality standards before listing them on our platform.",
      },
      {
        question: "How can I become a salon partner?",
        answer:
          "If you own or manage a salon, you can join Grumming by filling out the contact form on our website or reaching out through the app. Our team will guide you through the onboarding process and help you set up your profile.",
      },
    ],
  },
];

export default function FAQPage() {
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
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">
              Frequently Asked Questions
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              data-testid="text-faq-title"
            >
              We're here to help
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Everything you need to know about Grumming and how to get the most
              out of your salon experience.
            </p>
          </motion.div>
        </div>
      </section>

      {faqCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={
            categoryIndex % 2 === 0
              ? "py-16 sm:py-20 bg-white dark:bg-background"
              : "py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50"
          }
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mb-12">
              <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">
                {category.title}
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
                data-testid={`text-faq-category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category.title}
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, faqIndex) => (
                <motion.div
                  key={faqIndex}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${categoryIndex}-${faqIndex}`}
                    className="border-b border-border/60"
                    data-testid={`faq-item-${categoryIndex}-${faqIndex}`}
                  >
                    <AccordionTrigger
                      className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline py-5"
                      data-testid={`faq-trigger-${categoryIndex}-${faqIndex}`}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="text-muted-foreground text-base leading-relaxed"
                      data-testid={`faq-content-${categoryIndex}-${faqIndex}`}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">
              Still Have Questions?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              We're ready to help
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you couldn't find the answer you're looking for, reach out to
              our support team or visit our help center.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-2 bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-6 py-3 rounded-md font-medium text-sm transition-colors"
                  data-testid="button-contact-support"
                >
                  Contact Support
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-medium text-sm transition-colors"
                  data-testid="button-help-center"
                >
                  Help Center
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
