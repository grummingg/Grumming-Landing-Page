import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SalonFooter } from "@/components/salon/footer";
import { SubPageHero } from "@/components/salon/sub-page-hero";
import { fadeUp } from "@/lib/animations";

const faqCategories = [
  {
    title: "Booking & Services",
    faqs: [
      {
        question: "How do I book an appointment on Grumming?",
        answer:
          "Simply search for salons, spas, and studios near you, browse available services and time slots, then confirm your booking with just a few taps. You'll receive an instant confirmation with all the details.",
      },
      {
        question: "Can I cancel or reschedule my appointment?",
        answer:
          "Absolutely. You can cancel or reschedule your appointment up to 2 hours before the scheduled time through the app. Just go to your bookings and select the appointment you'd like to modify.",
      },
      {
        question: "How do I find the best salon, spa, or studio near me?",
        answer:
          "Use the search feature to find salons, spas, and studios in your area. You can filter by service type, ratings, price range, and distance. Each business has detailed profiles with photos, reviews, and service menus to help you choose.",
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
          "Yes, Grumming is completely free for customers. You can browse salons, spas, and studios, compare prices, read reviews, and book appointments without any charges. You only pay the business directly for the services you receive.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "Payment is handled directly at the business. Most businesses accept cash, UPI, credit/debit cards, and digital wallets. The accepted payment methods are listed on each business's profile page.",
      },
    ],
  },
  {
    title: "Account & App",
    faqs: [
      {
        question: "Are the businesses on Grumming verified?",
        answer:
          "Yes, every business on Grumming goes through a verification process. We check their business credentials, visit the premises, and ensure they meet our quality standards before listing them on our platform.",
      },
      {
        question: "How can I become a business partner?",
        answer:
          "If you own or manage a salon, spa, or studio, you can join Grumming by filling out the contact form on our website or reaching out through the app. Our team will guide you through the onboarding process and help you set up your profile.",
      },
    ],
  },
];

export default function FAQPage() {
  useDocumentTitle("FAQ | Grumming");
  return (
    <div className="min-h-screen bg-background">
      <SubPageHero
        label="Frequently Asked Questions"
        title="We're here to help"
        subtitle="Everything you need to know about Grumming and how to get the most out of your booking experience."
      />

      {faqCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className="py-16 sm:py-20"
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

      <section className="py-16 sm:py-20">
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
              <Link href="/contact" className="inline-flex items-center gap-2 bg-hero dark:bg-white text-white dark:text-hero px-6 py-3 rounded-md font-medium text-sm transition-colors" data-testid="button-contact-support">
                Contact Support
              </Link>
              <Link href="/help-center" className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-6 py-3 rounded-md font-medium text-sm transition-colors" data-testid="button-help-center">
                Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
