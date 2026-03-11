import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { UserCheck, BookOpen, CreditCard, Shield, Building, Scale, AlertTriangle, Gavel, Mail, Scissors, FileText, Bell } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    icon: FileText,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    intro: "By accessing or using the Grumming platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.",
    content: [
      "These Terms constitute a legally binding agreement between you and Grumming.",
      "By creating an account, making a booking, or using any of our services, you confirm that you have read, understood, and agree to these Terms.",
      "If you do not agree with any part of these Terms, you must discontinue use of the platform immediately.",
      "We may update these Terms from time to time. Continued use of the platform after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    number: "2",
    title: "Eligibility",
    icon: UserCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    intro: "To use Grumming, you must meet the following eligibility criteria:",
    content: [
      "You must be at least 18 years of age to create an account and use our services independently.",
      "You must have the legal capacity to enter into a binding agreement under applicable Indian law.",
      "You must not be prohibited from using our services under the laws of India or any other applicable jurisdiction.",
      "You must provide accurate, current, and complete information during registration and keep your account information updated.",
    ],
  },
  {
    number: "3",
    title: "Account Responsibilities",
    icon: Shield,
    color: "text-green-500",
    bg: "bg-green-500/10",
    intro: "When you create an account with Grumming, you accept the following responsibilities:",
    content: [
      "You are solely responsible for maintaining the confidentiality and security of your account credentials, including your password and OTP.",
      "You are responsible for all activities that occur under your account, whether or not authorised by you.",
      "You must notify us immediately at support@grumming.com if you suspect any unauthorised access to or use of your account.",
      "You may not share, transfer, or assign your account to any other person or entity.",
      "Grumming reserves the right to suspend or terminate accounts that are found to contain false or misleading information.",
    ],
  },
  {
    number: "4",
    title: "Services and Bookings",
    icon: BookOpen,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    intro: "Grumming acts as an intermediary platform connecting users with independent salons, spas, studios, and beauty professionals. When booking services:",
    content: [
      "All bookings are subject to availability and confirmation by the respective service provider.",
      "Service descriptions, pricing, and availability are provided by the business partners and may vary. Grumming does not guarantee their accuracy.",
      "You are expected to arrive at the scheduled time for your appointment. Repeated no-shows may result in account restrictions.",
      "Cancellations must be made within the cancellation window specified by the individual provider. Late cancellations may attract fees as determined by the provider's policy.",
      "Grumming does not employ or control the service providers and is not responsible for the quality, safety, or outcome of services rendered.",
    ],
  },
  {
    number: "5",
    title: "Payments and Pricing",
    icon: CreditCard,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    intro: "All financial transactions on the Grumming platform are governed by the following terms:",
    content: [
      "All prices displayed on the platform are in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated.",
      "Payment may be required at the time of booking or at the business premises, depending on the provider's policy.",
      "We accept UPI, major credit and debit cards, net banking, and select digital wallets. Grumming does not store your card details; all payments are processed by PCI-DSS compliant payment partners.",
      "Refunds for eligible cancellations will be processed in accordance with our Refund Policy. Processing timelines may vary depending on your payment method and financial institution.",
      "Grumming reserves the right to modify pricing, introduce service fees, or offer promotional discounts at its discretion, with appropriate notice to users.",
      "Any disputes regarding charges must be raised within 48 hours of the transaction by contacting support@grumming.com.",
    ],
  },
  {
    number: "6",
    title: "User Conduct",
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-500/10",
    intro: "You agree to use the Grumming platform responsibly and lawfully. The following activities are strictly prohibited:",
    content: [
      "Using the platform for any unlawful, fraudulent, or malicious purpose.",
      "Harassing, threatening, abusing, or discriminating against service providers, their staff, or other users.",
      "Posting false, misleading, defamatory, or inappropriate reviews or content.",
      "Attempting to circumvent security measures, access unauthorised areas, or interfere with the platform's operation.",
      "Using automated tools, bots, scrapers, or similar technology to collect data from the platform without prior written consent.",
      "Impersonating another person, entity, or misrepresenting your affiliation with any person or organisation.",
      "Soliciting service providers for transactions outside the Grumming platform to circumvent fees or policies.",
    ],
  },
  {
    number: "7",
    title: "Business Partner Obligations",
    icon: Building,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    intro: "Businesses listed on Grumming are independent entities and are required to:",
    content: [
      "Hold all valid licences, permits, and certifications required by applicable law for their services.",
      "Maintain accurate, up-to-date pricing, service descriptions, and availability on the platform.",
      "Adhere to applicable health, safety, and hygiene standards at all times.",
      "Honour confirmed bookings made through the platform and provide services as described.",
      "Respond to customer inquiries and complaints in a timely and professional manner.",
      "Comply with all anti-discrimination laws and treat all customers fairly and equitably.",
    ],
  },
  {
    number: "8",
    title: "Intellectual Property",
    icon: Scale,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    intro: "All intellectual property on the Grumming platform is protected by applicable Indian and international laws. You acknowledge that:",
    content: [
      "All content, including but not limited to the Grumming name, logo, trademarks, text, graphics, images, software, and design elements, is the exclusive property of Grumming or its licensors.",
      "You may not copy, reproduce, modify, distribute, display, or create derivative works from any content on the platform without prior written permission.",
      "You may not use Grumming's trademarks, branding, or intellectual property for any commercial purpose without a formal licensing agreement.",
      "Any content you submit to the platform (such as reviews or photos) grants Grumming a non-exclusive, royalty-free, worldwide licence to use, display, and distribute such content in connection with our services.",
    ],
  },
  {
    number: "9",
    title: "Limitation of Liability",
    icon: Shield,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    intro: "To the maximum extent permitted by applicable law, you understand and agree that:",
    content: [
      "Grumming functions solely as an intermediary platform connecting users with independent service providers. We do not provide beauty, grooming, or wellness services directly.",
      "Grumming shall not be liable for the quality, safety, legality, or suitability of services provided by partner businesses.",
      "Grumming is not responsible for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the platform or services booked through it.",
      "Our total aggregate liability for any claims arising out of or related to these Terms shall not exceed the total amount paid by you to Grumming in the 12 months preceding the claim.",
      "The platform is provided on an \"as is\" and \"as available\" basis. We do not guarantee uninterrupted, timely, secure, or error-free operation of the platform.",
    ],
  },
  {
    number: "10",
    title: "Dispute Resolution",
    icon: Gavel,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    intro: "In the event of any dispute, controversy, or claim arising out of or relating to these Terms or the use of Grumming:",
    content: [
      "You agree to first attempt to resolve the dispute informally by contacting our support team at support@grumming.com. We will endeavour to address your concern within 15 business days.",
      "If the dispute cannot be resolved informally within 30 days, either party may initiate binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
      "The seat of arbitration shall be Indore, Madhya Pradesh, India, and proceedings shall be conducted in English.",
      "These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.",
      "The courts of Indore, Madhya Pradesh shall have exclusive jurisdiction over any matters not subject to arbitration.",
    ],
  },
  {
    number: "11",
    title: "Termination",
    icon: AlertTriangle,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    intro: "Grumming reserves the right to suspend, restrict, or terminate your account and access to the platform under the following circumstances:",
    content: [
      "Violation of any provision of these Terms of Service.",
      "Engaging in fraudulent, illegal, or harmful activities on or through the platform.",
      "Failure to make payments for services or outstanding dues as required.",
      "Extended account inactivity exceeding 24 months without prior communication.",
      "At our discretion, with reasonable prior notice, if we discontinue or materially modify our services.",
    ],
    outro: "Upon termination, your right to access and use the platform ceases immediately. Any data associated with your account will be handled in accordance with our Privacy Policy. Provisions of these Terms that by their nature should survive termination shall remain in effect.",
  },
  {
    number: "12",
    title: "Indemnification",
    icon: Shield,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    intro: "You agree to indemnify, defend, and hold harmless Grumming, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or related to:",
    content: [
      "Your use or misuse of the Grumming platform.",
      "Your violation of these Terms of Service or any applicable law.",
      "Your violation of any rights of a third party, including service providers or other users.",
      "Any content you submit, post, or transmit through the platform.",
    ],
  },
  {
    number: "13",
    title: "Changes to Terms",
    icon: Bell,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    intro: "We reserve the right to modify these Terms of Service at any time. When changes are made:",
    content: [
      "We will update the \"Last updated\" date at the top of this page.",
      "For material changes, we will provide notice via email, in-app notification, or a prominent banner on the platform at least 15 days before the changes take effect.",
      "Your continued use of the platform after the effective date of any changes constitutes your acceptance of the revised Terms.",
      "If you disagree with the updated Terms, you must stop using the platform and may request account deletion.",
    ],
  },
];

function SectionCard({ section, delay }: { section: typeof sections[0]; delay: number }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } } }}>
      <div className="rounded-md p-6" data-testid={`card-terms-section-${section.number}`}>
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-xl ${section.bg} flex items-center justify-center flex-shrink-0`}>
            <section.icon className={`w-5 h-5 ${section.color}`} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground mb-3">{section.number}. {section.title}</h2>
            <p className="text-muted-foreground text-sm mb-3">{section.intro}</p>
            <ul className="space-y-2">
              {section.content.map((item, idx) => (
                <li key={idx} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-amber-400 flex-shrink-0 mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {section.outro && (
              <p className="text-muted-foreground text-sm mt-3 italic">{section.outro}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TermsOfService() {
  useDocumentTitle("Terms of Service | Grumming");
  const groupSize = 2;
  const groups: { items: typeof sections; alt: boolean }[] = [];
  for (let i = 0; i < sections.length; i += groupSize) {
    groups.push({ items: sections.slice(i, i + groupSize), alt: i % (groupSize * 2) !== 0 });
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-terms-label">Terms of Service</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-terms-title">Terms and Conditions</h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-terms-subtitle">Last updated: January 2026</p>
            <p className="text-white/50 mt-3 text-sm max-w-2xl leading-relaxed" data-testid="text-terms-intro">
              These Terms of Service ("Terms") govern your access to and use of the Grumming platform, including our website, mobile applications, and all related services operated by Grumming ("we", "our", or "us"). Please read these Terms carefully before using our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section key={gi} className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {group.items.map((s, i) => (
              <SectionCard key={s.number} section={s} delay={i * 0.1} />
            ))}
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-md p-6" data-testid="card-terms-contact">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-foreground mb-3">14. Contact Us</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:
                  </p>
                  <div className="p-5 rounded-md space-y-1.5">
                    <p className="text-foreground font-medium text-sm">Grumming Legal Team</p>
                    <p className="text-muted-foreground text-sm">Email: support@grumming.com</p>
                    <p className="text-muted-foreground text-sm">Response Time: We will acknowledge your query within 48 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
