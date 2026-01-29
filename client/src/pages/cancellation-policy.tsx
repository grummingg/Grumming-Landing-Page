import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Crown, Clock, Bell } from "lucide-react";
import { Link } from "wouter";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2" data-testid="text-cancellation-title">Cancellation Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4">
              At Grumming, we understand that plans can change. Our cancellation policy is designed to be fair to both customers and salon partners while maintaining a reliable booking experience for everyone.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Salon-Specific Policies</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Cancellation policies vary by salon and are displayed at the time of booking. Each salon sets their own cancellation terms based on their business needs. Before confirming your booking, you will see:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Cancellation window:</strong> How far in advance you can cancel without fees (typically 2-24 hours before appointment)</li>
              <li><strong className="text-foreground">Cancellation fees:</strong> Any charges that may apply for late cancellations or no-shows</li>
              <li><strong className="text-foreground">Rescheduling options:</strong> Whether the salon allows rescheduling instead of cancellation</li>
              <li><strong className="text-foreground">Refund policy:</strong> How refunds are processed for prepaid bookings</li>
            </ul>
            <div className="bg-muted p-4 rounded-md mt-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Important:</strong> Always review the salon's specific cancellation policy before confirming your booking. The policy terms are binding once you complete the booking.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Crown className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-semibold">Grumming Pass (Premium Subscribers)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Grumming Pass members enjoy exclusive cancellation benefits:
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-md border border-amber-200 dark:border-amber-800">
              <h3 className="text-lg font-semibold text-foreground mb-3">Free Cancellation Benefit</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Cancel anytime:</strong> Cancel any booking at any time without incurring cancellation fees</li>
                <li><strong className="text-foreground">Full refunds:</strong> Receive 100% refund on prepaid bookings regardless of when you cancel</li>
                <li><strong className="text-foreground">No restrictions:</strong> Free cancellation applies to all participating salons</li>
                <li><strong className="text-foreground">Unlimited use:</strong> No limit on the number of free cancellations per month</li>
              </ul>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Note: While Grumming Pass members enjoy free cancellations, we encourage responsible booking to support our salon partners.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-semibold">Frequent Cancellation Policy</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              To maintain a fair and reliable platform for our salon partners, we monitor cancellation patterns. Excessive cancellations may result in account restrictions.
            </p>
            
            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-md border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-foreground mb-2">Flagging Thresholds</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">3+ cancellations in 7 days:</strong> Your account will be flagged for review</li>
                  <li><strong className="text-foreground">5+ cancellations in 30 days:</strong> Your account will be flagged for review</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">What Happens When Flagged?</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You will receive a notification about your cancellation pattern</li>
                  <li>Your account may be reviewed by our admin team</li>
                  <li>Booking capabilities may be temporarily restricted</li>
                  <li>In severe cases, your account may be suspended</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Exceptions</h3>
                <p className="text-muted-foreground">The following cancellations are not counted toward your limit:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                  <li>Cancellations made within the salon's free cancellation window</li>
                  <li>Cancellations due to salon-initiated changes</li>
                  <li>Emergency cancellations with valid documentation</li>
                  <li>Grumming Pass member cancellations (subject to fair use policy)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">How to Cancel a Booking</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Cancelling a booking on Grumming is simple:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Open the Grumming app</strong> and navigate to the "Bookings" screen
              </li>
              <li>
                <strong className="text-foreground">Find your booking</strong> in the "Upcoming" tab
              </li>
              <li>
                <strong className="text-foreground">Tap on the booking</strong> to view details
              </li>
              <li>
                <strong className="text-foreground">Select "Cancel Booking"</strong> and confirm your cancellation
              </li>
              <li>
                <strong className="text-foreground">Receive confirmation</strong> via notification and email
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellation Tracking</h2>
            <p className="text-muted-foreground mb-4">
              All cancellations are recorded in your booking history for your reference:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Booking History:</strong> View all past and cancelled bookings in the "History" tab</li>
              <li><strong className="text-foreground">Cancellation Details:</strong> See when and why a booking was cancelled</li>
              <li><strong className="text-foreground">Refund Status:</strong> Track the status of any refunds for cancelled bookings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            <p className="text-muted-foreground mb-4">
              You will receive notifications for all cancellation-related events:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Confirmation when you cancel a booking</li>
              <li>Refund processing updates</li>
              <li>Alerts if your account approaches cancellation limits</li>
              <li>Notifications if a salon cancels your booking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our cancellation policy or need assistance with a specific situation, please contact us:
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-foreground font-medium">Grumming Support Team</p>
              <p className="text-muted-foreground">Email: support@grumming.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
