import { motion } from "framer-motion";
import { AlertTriangle, Info, Shield, IndianRupee, ExternalLink, Scale, FileText, Gavel, Mail } from "lucide-react";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const sections = [
  {
    title: "General Disclaimer",
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    content: "Grumming is an intermediary platform connecting customers with salons. We do not directly provide salon services. All information on the platform is provided for general informational purposes only. Users access and use the platform at their own risk.",
  },
  {
    title: "No Professional Advice",
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    content: "Content provided on Grumming does not constitute professional beauty, medical, or health advice. Always consult qualified professionals and licensed practitioners for any skin, hair, or health-related concerns before undergoing any salon services.",
  },
  {
    title: "Service Quality",
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    content: "While we verify partner salons to maintain quality standards, Grumming does not guarantee the quality, safety, or outcome of any services. Salons are independent businesses responsible for their own services, staff qualifications, and service delivery. Results may vary based on individual factors.",
  },
  {
    title: "Pricing & Availability",
    icon: IndianRupee,
    color: "text-green-500",
    bg: "bg-green-500/10",
    content: "Prices displayed on Grumming are set by individual partner salons and may change without notice. Service availability is subject to salon schedules and capacity. Promotional prices and discounts may have specific terms and conditions that users must review before booking.",
  },
  {
    title: "Third-Party Content",
    icon: ExternalLink,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    content: "The Grumming platform may contain links to third-party websites and services. We are not responsible for the content, accuracy, privacy practices, or services of these external sites. User reviews represent individual opinions and experiences and should not be considered as Grumming's endorsement.",
  },
  {
    title: "Limitation of Liability",
    icon: Scale,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    content: "To the fullest extent permitted by Indian law, Grumming shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use our platform. Our total liability is limited to the amount paid by you for the specific service in question.",
  },
  {
    title: "Indemnification",
    icon: FileText,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    content: "By using the Grumming platform, you agree to indemnify and hold harmless Grumming, its officers, directors, employees, and partners from any claims, damages, or costs arising from your use of the platform or violation of these terms.",
  },
  {
    title: "Changes to Disclaimer",
    icon: Gavel,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    content: "We reserve the right to modify this disclaimer at any time without prior notice. Changes are effective immediately upon posting to the Grumming platform. Continued use of the platform constitutes acceptance of the modified disclaimer.",
  },
  {
    title: "Governing Law",
    icon: Scale,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    content: "This disclaimer and all terms related to the Grumming platform are governed by the laws of India. Any disputes arising from this disclaimer or the use of our platform shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
  },
];

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div {...fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-disclaimer-label">Disclaimer</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-disclaimer-title">Legal disclaimer</h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-disclaimer-lastupdate">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Grumming ("we," "us," "our," or "Company") operates an online salon booking platform. This Legal Disclaimer ("Disclaimer") governs your access to and use of the Grumming platform, website, and services. By accessing or using Grumming, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
            </p>
          </motion.div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 0 ? "py-16 sm:py-20 bg-white dark:bg-background" : "py-16 sm:py-20 bg-muted/30 dark:bg-[#0f172a]/50"}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            >
              <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm" data-testid={`card-section-${index}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${section.bg} flex items-center justify-center flex-shrink-0`}>
                    <section.icon className={`w-5 h-5 ${section.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-section-${index}-title`}>{section.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-section-${index}-content`}>{section.content}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="bg-white dark:bg-[#1e293b] rounded-md p-6 shadow-sm" data-testid="card-contact-section">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-contact-title">Contact Us</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid="text-contact-description">
                    If you have any questions regarding this disclaimer or our policies, please feel free to reach out to us. We are committed to addressing your concerns promptly.
                  </p>
                  <a
                    href="mailto:support@grumming.com"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    data-testid="link-contact-email"
                  >
                    support@grumming.com
                  </a>
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
