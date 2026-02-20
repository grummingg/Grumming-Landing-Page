import { motion } from "framer-motion";
import { Shield, UserCheck, AlertCircle, Phone, Eye, Lock, CheckCircle2, MessageSquare, MapPin, Mail, Scissors } from "lucide-react";
import { Link } from "wouter";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  {
    icon: CheckCircle2,
    title: "Real-Time Booking Tracking",
    description: "Share your booking details with trusted contacts so they know where you are and when to expect you back.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: MessageSquare,
    title: "In-App Support",
    description: "Access 24/7 customer support directly from the app if you encounter any issues during your visit.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Eye,
    title: "Verified Reviews",
    description: "All reviews come from verified customers who have actually visited the business, ensuring authentic feedback.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "All transactions are encrypted and processed through secure payment gateways. We never store your full card details.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const verificationSteps = [
  "Business License Verification: We verify that all businesses hold valid business licenses and permits",
  "Hygiene Standards: Businesses must meet our hygiene and cleanliness standards",
  "Professional Staff: We ensure staff are trained and certified for the services they offer",
  "Regular Audits: Partner businesses undergo periodic reviews to maintain quality standards",
  "Customer Ratings: Businesses with consistently low ratings are reviewed and may be removed",
];

const hygieneStandards = [
  "Sanitized tools and equipment between each customer",
  "Clean and well-maintained facilities",
  "Proper disposal of single-use items",
  "Regular deep cleaning schedules",
  "Staff trained in hygiene protocols",
  "Use of quality, tested products",
];

const dataProtectionMeasures = [
  { label: "Encryption", desc: "All data is encrypted in transit and at rest" },
  { label: "Limited Access", desc: "Providers only see information necessary for your appointment" },
  { label: "No Data Selling", desc: "We never sell your personal information to third parties" },
  { label: "Secure Storage", desc: "Your data is stored on secure, industry-standard servers" },
  { label: "Privacy Controls", desc: "You can manage what information is visible in your profile" },
];

const reportingConcerns = [
  "Inappropriate behavior by staff",
  "Unhygienic conditions or practices",
  "Misrepresentation of services",
  "Safety hazards at the location",
  "Billing disputes or fraud",
  "Any other concerning situations",
];

const emergencyContacts = [
  { title: "Police Emergency", number: "100" },
  { title: "Women Helpline", number: "1091" },
  { title: "Medical Emergency", number: "108" },
  { title: "Grumming Support", number: "support@grumming.com" },
];

const safetyTips = [
  "Read reviews before booking",
  "Check the provider's ratings and verification status",
  "Communicate any allergies or sensitivities before your appointment",
  "Trust your instincts - if something feels wrong, leave and report",
  "Share your booking details with someone you trust",
  "Keep your app updated for the latest safety features",
];

const reportingSteps = [
  "Open the Grumming app and go to your booking history",
  "Select the relevant booking",
  "Tap \"Report an Issue\"",
  "Describe your concern in detail",
  "Our safety team will review and respond within 24 hours",
];

export default function Safety() {
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
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">Safety</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-safety-title">
              Your safety is our top priority
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              At Grumming, we are committed to creating a safe and trustworthy environment for both customers and partners. We have implemented comprehensive safety measures to ensure every booking experience is secure and reliable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Verified Partners</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">Every partner is thoroughly verified</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Every business on Grumming goes through a verification process before being listed. We ensure quality, trust, and safety at every step.
            </p>
          </motion.div>

          <div className="space-y-3">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex gap-4 p-4 rounded-md" data-testid={`item-verification-${index}`}>
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground text-sm">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Built-In Protection</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Safety features you can trust</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 h-full" data-testid={`card-feature-${index}`}>
                  <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Cleanliness Standards</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">Hygiene & Cleanliness</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Our partner businesses are required to maintain high hygiene standards to ensure your safety and comfort.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hygieneStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="p-4 h-full flex items-center gap-3" data-testid={`card-hygiene-${index}`}>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <p className="text-foreground text-sm">{standard}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Your Information</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">Data Protection</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Your personal information is protected through industry-leading security measures and strict privacy policies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {dataProtectionMeasures.map((measure, index) => (
              <motion.div
                key={measure.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="p-6 h-full" data-testid={`card-data-protection-${index}`}>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{measure.label}</h3>
                  <p className="text-muted-foreground text-sm">{measure.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Report Issues</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Reporting Concerns</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 h-full" data-testid="card-what-to-report">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">What You Can Report</h3>
                <ul className="space-y-2">
                  {reportingConcerns.map((concern, index) => (
                    <li key={index} className="flex gap-3 text-sm text-foreground/70">
                      <span className="text-orange-500 font-bold mt-0.5">•</span>
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-6 h-full" data-testid="card-how-to-report">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">How to Report</h3>
                <ol className="space-y-2">
                  {reportingSteps.map((step, index) => (
                    <li key={index} className="flex gap-3 text-sm text-foreground/70">
                      <span className="font-semibold text-blue-500 min-w-fit">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Emergency Numbers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Emergency Contacts</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="p-6 h-full" data-testid={`card-emergency-${index}`}>
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{contact.title}</p>
                  <p className="text-2xl font-bold text-foreground">{contact.number}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Best Practices</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">Safety Tips</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Help us maintain a safe community by following these practical tips for a secure booking experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {safetyTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="p-4 h-full flex items-center gap-3" data-testid={`card-safety-tip-${index}`}>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-foreground text-sm">{tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">Safety-Related Questions?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For safety-related inquiries or concerns, our team is here to help. Reach out to us anytime.
            </p>
            <div className="p-6 inline-block" data-testid="card-contact-info">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-foreground/60" />
                <span className="text-foreground font-medium">Grumming Safety Team</span>
              </div>
              <a href="mailto:support@grumming.com" className="text-amber-500 hover:text-amber-600 transition-colors">
                support@grumming.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
