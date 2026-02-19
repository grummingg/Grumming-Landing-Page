import { motion } from "framer-motion";
import { UserCheck, BookOpen, CreditCard, Shield, Building, Scale, AlertTriangle, Gavel, Mail } from "lucide-react";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sections = [
  {
    number: "1",
    title: "Eligibility",
    icon: UserCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    content: [
      "Be at least 18 years of age, or have parental/guardian consent if between 13-17 years old.",
      "Have the legal capacity to enter into a binding agreement.",
      "Not be prohibited from using our services under applicable laws.",
    ],
    intro: "To use Grumming, you must:",
  },
  {
    number: "2",
    title: "Account Creation and Responsibilities",
    icon: Shield,
    color: "text-green-500",
    bg: "bg-green-500/10",
    content: [
      "You must provide accurate and complete information.",
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You are responsible for all activities that occur under your account.",
      "You must notify us immediately of any unauthorized use of your account.",
      "You may not share your account or transfer it to another person.",
    ],
    intro: "When you create an account with Grumming:",
  },
  {
    number: "3",
    title: "Booking and Cancellation Policies",
    icon: BookOpen,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    content: [
      "Bookings are subject to availability and confirmation by the salon.",
      "You must arrive on time for your scheduled appointment.",
      "Cancellations must be made at least 4 hours before the scheduled appointment time.",
      "Late cancellations or no-shows may result in cancellation fees as determined by the salon.",
      "Repeated no-shows may result in account restrictions or suspension.",
      "Salons reserve the right to cancel bookings due to unforeseen circumstances.",
    ],
    intro: "When booking services through Grumming:",
  },
  {
    number: "4",
    title: "Payment Terms and Refunds",
    icon: CreditCard,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    content: [
      "All prices are displayed in Indian Rupees (INR) unless otherwise stated.",
      "Payment is required at the time of booking or at the salon, depending on the service.",
      "We accept major credit/debit cards, UPI, and digital wallets.",
      "Refunds for cancelled services will be processed within 5-7 business days.",
      "Refund amounts may be subject to cancellation fees as per salon policies.",
      "Disputes regarding services must be raised within 48 hours of the appointment.",
    ],
    intro: "Regarding payments on our platform:",
  },
  {
    number: "5",
    title: "User Conduct",
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-500/10",
    content: [
      "Use the platform for any unlawful purpose.",
      "Harass, abuse, or harm salon staff or other users.",
      "Post false, misleading, or defamatory reviews.",
      "Attempt to circumvent security measures or access unauthorized areas.",
      "Use automated tools to scrape or collect data from our platform.",
      "Impersonate another person or entity.",
      "Engage in any activity that disrupts or interferes with our services.",
    ],
    intro: "When using Grumming, you agree not to:",
  },
  {
    number: "6",
    title: "Salon Listing Guidelines",
    icon: Building,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    content: [
      "Hold valid licenses and permits required for their services.",
      "Maintain accurate pricing and service descriptions.",
      "Adhere to health and safety standards.",
      "Honor confirmed bookings made through the platform.",
      "Respond to customer inquiries in a timely manner.",
      "Not discriminate against customers based on protected characteristics.",
    ],
    intro: "Salons listed on Grumming must:",
  },
  {
    number: "7",
    title: "Intellectual Property Rights",
    icon: Scale,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    content: [
      "Copy, modify, or distribute our content without permission.",
      "Use our trademarks or branding without written consent.",
      "Reverse engineer or decompile our software.",
    ],
    intro: "All content on Grumming, including but not limited to logos, text, graphics, images, and software, is the property of Grumming or its licensors and is protected by intellectual property laws. You may not:",
  },
  {
    number: "8",
    title: "Limitation of Liability",
    icon: Shield,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    content: [
      "Grumming acts as an intermediary platform connecting users with salons.",
      "We are not liable for the quality, safety, or legality of services provided by salons.",
      "We are not responsible for any damages arising from your use of our platform.",
      "Our total liability shall not exceed the amount paid by you in the last 12 months.",
      "We do not guarantee uninterrupted or error-free service.",
    ],
    intro: "To the maximum extent permitted by law:",
  },
  {
    number: "9",
    title: "Dispute Resolution",
    icon: Gavel,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    content: [
      "You agree to first attempt to resolve disputes informally by contacting our support team.",
      "If informal resolution fails, disputes will be resolved through binding arbitration.",
      "Arbitration will be conducted in Mumbai, Maharashtra, India.",
      "These terms are governed by the laws of India.",
      "Class action lawsuits and jury trials are waived.",
    ],
    intro: "In case of disputes:",
  },
  {
    number: "10",
    title: "Termination",
    icon: AlertTriangle,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    content: [
      "You violate these Terms of Service.",
      "You engage in fraudulent or illegal activities.",
      "You fail to pay for services as required.",
      "Your account remains inactive for an extended period.",
      "We discontinue our services (with reasonable notice).",
    ],
    intro: "We may terminate or suspend your account if:",
    outro: "Upon termination, your right to use the platform ceases immediately, and we may delete your account data in accordance with our Privacy Policy.",
  },
];

function SectionCard({ section, delay }: { section: typeof sections[0]; delay: number }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } } }}>
      <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm" data-testid={`card-terms-section-${section.number}`}>
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
                  <span className="text-muted-foreground/40 flex-shrink-0">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {section.outro && (
              <p className="text-muted-foreground text-sm mt-3">{section.outro}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TermsOfService() {
  const groups = [
    { items: sections.slice(0, 2), alt: false },
    { items: sections.slice(2, 4), alt: true },
    { items: sections.slice(4, 6), alt: false },
    { items: sections.slice(6, 8), alt: true },
    { items: sections.slice(8, 10), alt: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-terms-label">Terms of Service</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-terms-title">Terms and conditions</h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-terms-subtitle">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section key={gi} className={group.alt ? "bg-muted/30 dark:bg-[#0f172a]/50 py-16" : "bg-white dark:bg-background py-16"}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {group.items.map((s, i) => (
              <SectionCard key={s.number} section={s} delay={i * 0.1} />
            ))}
          </div>
        </section>
      ))}

      <section className="bg-muted/30 dark:bg-[#0f172a]/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm" data-testid="card-terms-contact">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-foreground mb-3">Contact Us</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-muted/30 dark:bg-white/5 p-4 rounded-md">
                    <p className="text-foreground font-medium text-sm">Grumming Support Team</p>
                    <p className="text-muted-foreground text-sm">Email: support@grumming.com</p>
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
