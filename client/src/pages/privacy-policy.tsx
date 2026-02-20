import { motion } from "framer-motion";
import { Database, Share2, Lock, Shield, Cookie, Mail, Scissors, Clock, Users, Link2, Bell, UserCheck } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const sections = [
  {
    number: "1",
    title: "Scope and Applicability",
    icon: Users,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    content: "This Privacy Policy applies to all users of the Grumming platform, including our website, mobile applications, and any related services. By accessing or using Grumming, you acknowledge that you have read, understood, and agree to the collection, use, and disclosure of your information as described in this policy.",
    items: [
      { label: "Platform Users", text: "Individuals who create accounts, browse services, or book appointments through Grumming." },
      { label: "Business Partners", text: "Salons, spas, studios, and beauty professionals who register their businesses on our platform." },
      { label: "Visitors", text: "Individuals who visit our website or app without creating an account." }
    ]
  },
  {
    number: "2",
    title: "Information We Collect",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    content: "We collect information that is necessary to provide, maintain, and improve our services. The categories of information we collect include:",
    items: [
      { label: "Account Information", text: "Your name, email address, phone number, and profile details provided during registration." },
      { label: "Location Data", text: "With your permission, we collect your approximate or precise location to display nearby salons, spas, and studios. You may disable location access through your device settings at any time." },
      { label: "Payment Information", text: "We do not store your credit/debit card details or banking credentials. All payment transactions are processed securely by our PCI-DSS compliant payment partners (such as Razorpay). We only receive transaction confirmation status and basic billing references." },
      { label: "Booking and Transaction Data", text: "Records of your appointments, service preferences, reviews, ratings, and transaction history to improve your experience." },
      { label: "Device and Usage Data", text: "Device type, operating system, browser type, IP address, app version, pages visited, and interaction patterns collected automatically for analytics and troubleshooting." },
      { label: "Communications", text: "Records of your correspondence with our support team, feedback submissions, and survey responses." }
    ]
  },
  {
    number: "3",
    title: "How We Use Your Information",
    icon: Share2,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    content: "We process your personal information only for legitimate business purposes and with appropriate legal basis. Your data is used for:",
    items: [
      { label: "Service Delivery", text: "To facilitate appointment scheduling, process bookings, and enable communication between you and service providers." },
      { label: "Account Management", text: "To create, maintain, and secure your account, verify your identity, and provide customer support." },
      { label: "Notifications", text: "To send booking confirmations, appointment reminders, cancellation updates, and important service announcements." },
      { label: "Personalisation", text: "To recommend services, businesses, and offers based on your preferences, location, and booking history." },
      { label: "Marketing Communications", text: "To send promotional offers and new service announcements only with your explicit consent. You may opt out at any time." },
      { label: "Platform Improvement", text: "To analyse aggregate usage patterns, conduct research, and improve the functionality, reliability, and security of our platform." },
      { label: "Legal Compliance", text: "To comply with applicable laws, regulations, and legal processes, and to enforce our terms of service." }
    ]
  },
  {
    number: "4",
    title: "Information Sharing and Disclosure",
    icon: Share2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    content: "We do not sell your personal information to third parties. We share your data only in the following limited circumstances:",
    items: [
      { label: "Service Providers", text: "Your booking details (name, contact information, appointment time, and selected services) are shared with the specific business you book with, solely to fulfil your appointment." },
      { label: "Payment Processors", text: "Transaction data is securely transmitted to our PCI-DSS compliant payment partners to process payments. These partners are contractually obligated to protect your information." },
      { label: "Technology Partners", text: "We engage trusted third-party providers for cloud hosting, analytics, push notifications, and communication services. These partners process data only on our behalf and under strict confidentiality agreements." },
      { label: "Legal Obligations", text: "We may disclose information when required by law, court order, or governmental authority, or when necessary to protect the rights, safety, or property of Grumming, its users, or the public." },
      { label: "Business Transfers", text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. You will be notified of any such change." }
    ]
  },
  {
    number: "5",
    title: "Your Rights and Choices",
    icon: Shield,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    content: "You have the following rights regarding your personal data, subject to applicable law. To exercise any of these rights, please contact us at support@grumming.com.",
    items: [
      { label: "Right to Access", text: "You may request a copy of the personal data we hold about you in a structured, commonly used format." },
      { label: "Right to Correction", text: "You may update or correct inaccurate or incomplete information through your account settings or by contacting us." },
      { label: "Right to Deletion", text: "You may request deletion of your account and associated personal data. Certain data may be retained as required by law or for legitimate business purposes." },
      { label: "Right to Withdraw Consent", text: "Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing." },
      { label: "Right to Opt-out", text: "You may unsubscribe from marketing communications at any time using the unsubscribe link in our emails or through your account settings." },
      { label: "Right to Data Portability", text: "You may request your personal data in a machine-readable format for transfer to another service." }
    ]
  },
  {
    number: "6",
    title: "Data Security",
    icon: Lock,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    content: "We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, alteration, disclosure, or destruction. Our security practices include:",
    items: [
      { label: "Encryption", text: "All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols." },
      { label: "Secure Storage", text: "Sensitive information is stored using encryption at rest on secure, access-controlled servers." },
      { label: "Access Controls", text: "Access to personal data is restricted to authorised personnel on a need-to-know basis, with multi-factor authentication." },
      { label: "Security Audits", text: "We conduct regular security assessments, vulnerability testing, and penetration testing of our systems." },
      { label: "Incident Response", text: "We maintain an incident response plan and will notify affected users and relevant authorities promptly in the event of a data breach, as required by law." }
    ]
  },
  {
    number: "7",
    title: "Data Retention",
    icon: Clock,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
    content: "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law.",
    items: [
      { label: "Active Accounts", text: "Your data is retained for the duration of your account's active status and for a reasonable period thereafter to support any follow-up queries." },
      { label: "Booking Records", text: "Transaction and booking records are retained for a period of 3 years from the date of the transaction, as required for accounting, tax, and legal compliance." },
      { label: "Account Deletion", text: "Upon account deletion request, your personal data will be removed within 30 days, except where retention is required by law or for resolving disputes." },
      { label: "Anonymised Data", text: "We may retain anonymised or aggregated data (which cannot identify you) indefinitely for analytical and business improvement purposes." }
    ]
  },
  {
    number: "8",
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyse usage patterns, and deliver relevant content. For comprehensive details about the types of cookies we use and how to manage your preferences, please refer to our Cookie Policy.",
    items: [
      { label: "Essential Cookies", text: "Required for the basic functionality of our platform, such as session management and security. These cannot be disabled." },
      { label: "Analytics Cookies", text: "Help us understand how users interact with our platform so we can improve performance and user experience." },
      { label: "Preference Cookies", text: "Remember your settings and preferences (such as language and theme) across sessions." }
    ]
  },
  {
    number: "9",
    title: "Third-Party Links",
    icon: Link2,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    content: "Our platform may contain links to third-party websites, applications, or services that are not operated by Grumming. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services before providing your personal information.",
    items: []
  },
  {
    number: "10",
    title: "Children's Privacy",
    icon: UserCheck,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    content: "Grumming is intended for users who are 18 years of age or older. We do not knowingly collect personal information from individuals under 18. If we become aware that we have inadvertently collected data from a minor, we will take prompt steps to delete such information. If you believe a child under 18 has provided us with personal information, please contact us at support@grumming.com.",
    items: []
  },
  {
    number: "11",
    title: "Changes to This Policy",
    icon: Bell,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    content: "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or platform features. When we make material changes:",
    items: [
      { label: "Notification", text: "We will notify you via email, in-app notification, or a prominent notice on our platform prior to the changes taking effect." },
      { label: "Review Period", text: "We encourage you to review this page periodically to stay informed about how we protect your data." },
      { label: "Continued Use", text: "Your continued use of Grumming after the updated policy takes effect constitutes your acceptance of the revised terms." }
    ]
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
            <p className="text-white/50 mt-3 text-sm max-w-2xl leading-relaxed" data-testid="text-privacy-intro">
              This Privacy Policy describes how Grumming ("we", "our", or "us") collects, uses, shares, and protects your personal information when you use our platform and services. We are committed to safeguarding your privacy in accordance with applicable Indian data protection laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
            </p>
          </motion.div>
        </div>
      </section>

      {sections.map((section, index) => {
        const isEvenSection = index % 2 === 0;
        const bgClass = "bg-white dark:bg-background";
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

                  <div className="rounded-md p-6">
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
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground pt-1" data-testid="heading-contact">
                  12. Grievance Officer and Contact
                </h2>
              </div>

              <div className="rounded-md p-6 mb-6">
                <p className="text-muted-foreground mb-6" data-testid="text-contact-intro">
                  In accordance with the Information Technology Act, 2000, and the rules made thereunder, if you have any questions, concerns, or grievances regarding this Privacy Policy, the processing of your personal data, or wish to exercise any of your rights, you may contact our Grievance Officer:
                </p>
                <div className="border border-border rounded-md p-5 space-y-1.5">
                  <p className="text-foreground font-medium" data-testid="text-company-name">Grumming Grievance Officer</p>
                  <p className="text-muted-foreground text-sm" data-testid="text-support-email">Email: support@grumming.com</p>
                  <p className="text-muted-foreground text-sm">Response Time: We will acknowledge your complaint within 24 hours and endeavour to resolve it within 15 days of receipt.</p>
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
