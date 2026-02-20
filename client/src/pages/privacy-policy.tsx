import { motion } from "framer-motion";
import { Database, Share2, Lock, Shield, Cookie, Mail, Scissors } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    content: "At Grumming, we collect information to provide you with the best booking experience. The types of information we collect include:",
    items: [
      { label: "Personal Information", text: "Your name, email address, and phone number when you create an account." },
      { label: "Location Data", text: "Your location to show nearby salons, spas, and studios." },
      { label: "Payment Information", text: "We do not store your credit/debit card details. All payments are processed securely by our trusted payment partners (such as Razorpay). We only receive transaction confirmations and basic billing information." },
      { label: "Booking History", text: "Records of your appointments, preferences, and service history." },
      { label: "Device Information", text: "Device type, operating system, and app version for troubleshooting and optimization." }
    ]
  },
  {
    number: "2",
    title: "How We Use Your Data",
    icon: Share2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    content: "We use your information for the following purposes:",
    items: [
      { label: "Booking Services", text: "To facilitate appointment scheduling with salons, spas, studios, and beauty professionals." },
      { label: "Notifications", text: "To send booking confirmations, reminders, and updates about your appointments." },
      { label: "Customer Support", text: "To respond to your inquiries and resolve any issues." },
      { label: "Marketing", text: "To send promotional offers, new service announcements, and personalized recommendations (with your consent)." },
      { label: "Service Improvement", text: "To analyze usage patterns and improve our platform." }
    ]
  },
  {
    number: "3",
    title: "Data Sharing",
    icon: Share2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    content: "We share your information with the following parties:",
    items: [
      { label: "Partner Businesses", text: "We share your booking details (name, contact, appointment time) with the business you book with to fulfill your appointment." },
      { label: "Payment Processors", text: "Your payment information is securely shared with our payment partners (such as Razorpay, Stripe) to process transactions." },
      { label: "Service Providers", text: "We may share data with third-party service providers who assist us in operating our platform, such as cloud hosting and analytics services." },
      { label: "Legal Requirements", text: "We may disclose information when required by law or to protect our rights and safety." }
    ]
  },
  {
    number: "4",
    title: "Your Rights",
    icon: Shield,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    content: "You have the following rights regarding your personal data:",
    items: [
      { label: "Access", text: "Request a copy of the personal data we hold about you." },
      { label: "Correction", text: "Update or correct inaccurate information in your account." },
      { label: "Deletion", text: "Request deletion of your account and associated data." },
      { label: "Opt-out", text: "Unsubscribe from marketing communications at any time." },
      { label: "Data Portability", text: "Request your data in a machine-readable format." }
    ]
  },
  {
    number: "5",
    title: "Data Security",
    icon: Lock,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    content: "We implement industry-standard security measures to protect your data:",
    items: [
      { label: "", text: "SSL/TLS encryption for all data transmission" },
      { label: "", text: "Encrypted storage of sensitive information" },
      { label: "", text: "Regular security audits and vulnerability assessments" },
      { label: "", text: "Access controls and authentication mechanisms" },
      { label: "", text: "Employee training on data protection practices" }
    ]
  },
  {
    number: "6",
    title: "Cookies",
    icon: Cookie,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    content: "We use cookies and similar technologies to enhance your experience. For detailed information about our cookie practices, please see our Cookie Policy.",
    items: []
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-policy-label">Privacy Policy</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-privacy-title">Your privacy matters to us</h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-last-updated">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      {sections.map((section, index) => {
        const isEvenSection = index % 2 === 0;
        const bgClass = isEvenSection ? "bg-white dark:bg-background" : "bg-muted/30 dark:bg-[#0f172a]/50";
        const IconComponent = section.icon;

        return (
          <section key={section.number} className={`${bgClass} py-16`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${section.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 ${section.color}`} />
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground pt-1" data-testid={`heading-section-${section.number}`}>
                      {section.number}. {section.title}
                    </h2>
                  </div>

                  <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm">
                    <p className="text-muted-foreground mb-4" data-testid={`text-section-${section.number}-intro`}>
                      {section.content}
                    </p>

                    {section.items.length > 0 && (
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-3 text-muted-foreground" data-testid={`item-${section.number}-${itemIndex}`}>
                            <span className="text-amber-400 font-semibold mt-0.5">•</span>
                            <span>
                              {item.label && (
                                <>
                                  <strong className="text-foreground">{item.label}:</strong> {item.text}
                                </>
                              )}
                              {!item.label && item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <section className="bg-white dark:bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-mail-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground pt-1" data-testid="heading-contact">
                  7. Contact Us
                </h2>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm mb-6">
                <p className="text-muted-foreground mb-6" data-testid="text-contact-intro">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="border border-border rounded-md p-4 bg-muted/50 dark:bg-white/5">
                  <p className="text-foreground font-medium" data-testid="text-company-name">Grumming Support Team</p>
                  <p className="text-muted-foreground text-sm" data-testid="text-support-email">Email: support@grumming.com</p>
                </div>
              </div>

              <Link href="/contact">
                <button className="inline-flex items-center gap-2 bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] px-6 py-3 rounded-md font-medium text-sm transition-colors hover:opacity-90" data-testid="button-contact">
                  Send us a Message
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
