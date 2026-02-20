import { motion } from "framer-motion";
import { AlertTriangle, Crown, Clock, Bell, CheckCircle, Scissors } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function CancellationPolicy() {
  const cancellationSteps = [
    {
      step: 1,
      title: "Open the Grumming app",
      description: "Navigate to the \"Bookings\" screen",
    },
    {
      step: 2,
      title: "Find your booking",
      description: "Locate it in the \"Upcoming\" tab",
    },
    {
      step: 3,
      title: "Tap on the booking",
      description: "View the booking details",
    },
    {
      step: 4,
      title: "Select \"Cancel Booking\"",
      description: "Confirm your cancellation",
    },
    {
      step: 5,
      title: "Receive confirmation",
      description: "Via notification and email",
    },
  ];

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
            <p className="text-amber-400 font-medium text-sm tracking-wider uppercase mb-3">Cancellation Policy</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" data-testid="text-cancellation-title">
              Fair and flexible<br />cancellation
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Grumming, we understand that plans can change. Our cancellation policy is designed to be fair to both customers and partners while maintaining a reliable booking experience for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Provider-Specific Policies</h2>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cancellation policies vary by provider and are displayed at the time of booking. Each salon, spa, or studio sets their own cancellation terms based on their business needs. Before confirming your booking, you will see:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="rounded-md p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block">Cancellation window</strong>
                      <p className="text-muted-foreground text-sm">How far in advance you can cancel without fees (typically 2-24 hours before appointment)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block">Cancellation fees</strong>
                      <p className="text-muted-foreground text-sm">Any charges that may apply for late cancellations or no-shows</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block">Rescheduling options</strong>
                      <p className="text-muted-foreground text-sm">Whether the provider allows rescheduling instead of cancellation</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block">Refund policy</strong>
                      <p className="text-muted-foreground text-sm">How refunds are processed for prepaid bookings</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-blue-50 dark:bg-blue-950/20 rounded-md p-6 border border-blue-200/50 dark:border-blue-900/30">
                <p className="text-sm text-foreground">
                  <strong>Important:</strong> Always review the provider's specific cancellation policy before confirming your booking. The policy terms are binding once you complete the booking.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Grumming Pass (Premium Subscribers)</h2>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                Grumming Pass members enjoy exclusive cancellation benefits:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-md p-6 border border-amber-200 dark:border-amber-800">
                <h3 className="text-lg font-semibold text-foreground mb-4">Free Cancellation Benefit</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-amber-600">✓</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Cancel anytime</strong>
                      <p className="text-muted-foreground text-sm">Cancel any booking at any time without incurring cancellation fees</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-amber-600">✓</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Full refunds</strong>
                      <p className="text-muted-foreground text-sm">Receive 100% refund on prepaid bookings regardless of when you cancel</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-amber-600">✓</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">No restrictions</strong>
                      <p className="text-muted-foreground text-sm">Free cancellation applies to all participating salons, spas, and studios</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-amber-600">✓</span>
                    </div>
                    <div>
                      <strong className="text-foreground block">Unlimited use</strong>
                      <p className="text-muted-foreground text-sm">No limit on the number of free cancellations per month</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground text-sm leading-relaxed">
                Note: While Grumming Pass members enjoy free cancellations, we encourage responsible booking to support our partners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Frequent Cancellation Policy</h2>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                To maintain a fair and reliable platform for our partners, we monitor cancellation patterns. Excessive cancellations may result in account restrictions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-orange-50 dark:bg-orange-950/20 rounded-md p-6 border border-orange-200 dark:border-orange-900/30">
                <h3 className="font-semibold text-foreground mb-4">Flagging Thresholds</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-foreground">3+ cancellations in 7 days</strong>
                      <p className="text-muted-foreground text-sm">Your account will be flagged for review</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-600 dark:text-orange-400 font-semibold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-foreground">5+ cancellations in 30 days</strong>
                      <p className="text-muted-foreground text-sm">Your account will be flagged for review</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="rounded-md p-6">
                <h3 className="font-semibold text-foreground mb-4">What Happens When Flagged?</h3>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">You will receive a notification about your cancellation pattern</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Your account may be reviewed by our admin team</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Booking capabilities may be temporarily restricted</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">In severe cases, your account may be suspended</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="rounded-md p-6">
                <h3 className="font-semibold text-foreground mb-4">Exceptions</h3>
                <p className="text-muted-foreground text-sm mb-4">The following cancellations are not counted toward your limit:</p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Cancellations made within the provider's free cancellation window</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Cancellations due to provider-initiated changes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Emergency cancellations with valid documentation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Grumming Pass member cancellations (subject to fair use policy)</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How to Cancel a Booking</h2>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cancelling a booking on Grumming is simple:
              </p>
            </motion.div>

            <div className="space-y-3">
              {cancellationSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </div>
                      {index < cancellationSteps.length - 1 && (
                        <div className="w-0.5 h-12 bg-primary/20 mt-2" />
                      )}
                    </div>
                    <div className="pt-1 pb-4">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Cancellation Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All cancellations are recorded in your booking history for your reference:
              </p>
              <Card className="rounded-md p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-foreground block">Booking History</strong>
                      <p className="text-muted-foreground text-sm">View all past and cancelled bookings in the "History" tab</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-foreground block">Cancellation Details</strong>
                      <p className="text-muted-foreground text-sm">See when and why a booking was cancelled</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-foreground block">Refund Status</strong>
                      <p className="text-muted-foreground text-sm">Track the status of any refunds for cancelled bookings</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Notifications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You will receive notifications for all cancellation-related events:
              </p>
              <Card className="rounded-md p-6">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Confirmation when you cancel a booking</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Refund processing updates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Alerts if your account approaches cancellation limits</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <span className="text-muted-foreground text-sm">Notifications if a provider cancels your booking</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Have Questions?</h2>
            <Card className="bg-blue-50 dark:bg-blue-950/20 rounded-md p-8 border border-blue-200/50 dark:border-blue-900/30">
              <p className="text-foreground mb-4">
                If you have questions about our cancellation policy or need assistance with a specific situation, please contact us:
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Grumming Support Team</p>
                <p className="text-muted-foreground">Email: support@grumming.com</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
