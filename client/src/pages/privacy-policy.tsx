import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2" data-testid="text-privacy-title">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              At Grumming, we collect information to provide you with the best salon booking experience. The types of information we collect include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Personal Information:</strong> Your name, email address, and phone number when you create an account.</li>
              <li><strong className="text-foreground">Location Data:</strong> Your location to show nearby salons and service providers.</li>
              <li><strong className="text-foreground">Payment Information:</strong> Credit/debit card details and billing address for processing payments securely through our payment partners.</li>
              <li><strong className="text-foreground">Booking History:</strong> Records of your appointments, preferences, and service history.</li>
              <li><strong className="text-foreground">Device Information:</strong> Device type, operating system, and app version for troubleshooting and optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Booking Services:</strong> To facilitate appointment scheduling with salons and beauty professionals.</li>
              <li><strong className="text-foreground">Notifications:</strong> To send booking confirmations, reminders, and updates about your appointments.</li>
              <li><strong className="text-foreground">Customer Support:</strong> To respond to your inquiries and resolve any issues.</li>
              <li><strong className="text-foreground">Marketing:</strong> To send promotional offers, new service announcements, and personalized recommendations (with your consent).</li>
              <li><strong className="text-foreground">Service Improvement:</strong> To analyze usage patterns and improve our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
            <p className="text-muted-foreground mb-4">We share your information with the following parties:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Partner Salons:</strong> We share your booking details (name, contact, appointment time) with the salon you book with to fulfill your appointment.</li>
              <li><strong className="text-foreground">Payment Processors:</strong> Your payment information is securely shared with our payment partners (such as Razorpay, Stripe) to process transactions.</li>
              <li><strong className="text-foreground">Service Providers:</strong> We may share data with third-party service providers who assist us in operating our platform, such as cloud hosting and analytics services.</li>
              <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-foreground">Correction:</strong> Update or correct inaccurate information in your account.</li>
              <li><strong className="text-foreground">Deletion:</strong> Request deletion of your account and associated data.</li>
              <li><strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
              <li><strong className="text-foreground">Data Portability:</strong> Request your data in a machine-readable format.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Encrypted storage of sensitive information</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to enhance your experience. For detailed information about our cookie practices, please see our{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-foreground font-medium">Grumming Privacy Team</p>
              <p className="text-muted-foreground">Email: privacy@grumming.com</p>
              <p className="text-muted-foreground">Phone: +91 1800-123-4567</p>
              <p className="text-muted-foreground">Address: Mumbai, Maharashtra, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
