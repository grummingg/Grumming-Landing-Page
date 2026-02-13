import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book an appointment on Grumming?",
    answer:
      "Simply search for salons near you, browse available services and time slots, then confirm your booking with just a few taps. You'll receive an instant confirmation with all the details.",
  },
  {
    question: "Is Grumming free to use?",
    answer:
      "Yes, Grumming is completely free for customers. You can browse salons, compare prices, read reviews, and book appointments without any charges. You only pay the salon directly for the services you receive.",
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
    question: "Are the salons on Grumming verified?",
    answer:
      "Yes, every salon on Grumming goes through a verification process. We check their business credentials, visit the premises, and ensure they meet our quality standards before listing them on our platform.",
  },
  {
    question: "How can I become a salon partner?",
    answer:
      "If you own or manage a salon, you can join Grumming by filling out the contact form on our website or reaching out through the app. Our team will guide you through the onboarding process and help you set up your profile.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Payment is handled directly at the salon. Most salons accept cash, UPI, credit/debit cards, and digital wallets. The accepted payment methods are listed on each salon's profile page.",
  },
  {
    question: "Can I book for someone else?",
    answer:
      "Yes, you can book appointments for friends or family members. Simply enter their details during the booking process. They'll receive the appointment confirmation as well.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2 text-foreground" data-testid="text-faq-title">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground mb-10" data-testid="text-faq-description">
          Everything you need to know about Grumming
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/60"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger
                className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline py-5"
                data-testid={`faq-trigger-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-muted-foreground text-base leading-relaxed"
                data-testid={`faq-content-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
