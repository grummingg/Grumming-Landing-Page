import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2" data-testid="text-terms-title">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
            <p className="text-muted-foreground mb-4">
              To use Grumming, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Be at least 18 years of age, or have parental/guardian consent if between 13-17 years old.</li>
              <li>Have the legal capacity to enter into a binding agreement.</li>
              <li>Not be prohibited from using our services under applicable laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Account Creation and Responsibilities</h2>
            <p className="text-muted-foreground mb-4">When you create an account with Grumming:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You must provide accurate and complete information.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>You may not share your account or transfer it to another person.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Booking and Cancellation Policies</h2>
            <p className="text-muted-foreground mb-4">When booking services through Grumming:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Bookings are subject to availability and confirmation by the salon.</li>
              <li>You must arrive on time for your scheduled appointment.</li>
              <li>Cancellations must be made at least 4 hours before the scheduled appointment time.</li>
              <li>Late cancellations or no-shows may result in cancellation fees as determined by the salon.</li>
              <li>Repeated no-shows may result in account restrictions or suspension.</li>
              <li>Salons reserve the right to cancel bookings due to unforeseen circumstances.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms and Refunds</h2>
            <p className="text-muted-foreground mb-4">Regarding payments on our platform:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All prices are displayed in Indian Rupees (INR) unless otherwise stated.</li>
              <li>Payment is required at the time of booking or at the salon, depending on the service.</li>
              <li>We accept major credit/debit cards, UPI, and digital wallets.</li>
              <li>Refunds for cancelled services will be processed within 5-7 business days.</li>
              <li>Refund amounts may be subject to cancellation fees as per salon policies.</li>
              <li>Disputes regarding services must be raised within 48 hours of the appointment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
            <p className="text-muted-foreground mb-4">When using Grumming, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the platform for any unlawful purpose.</li>
              <li>Harass, abuse, or harm salon staff or other users.</li>
              <li>Post false, misleading, or defamatory reviews.</li>
              <li>Attempt to circumvent security measures or access unauthorized areas.</li>
              <li>Use automated tools to scrape or collect data from our platform.</li>
              <li>Impersonate another person or entity.</li>
              <li>Engage in any activity that disrupts or interferes with our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Salon Listing Guidelines</h2>
            <p className="text-muted-foreground mb-4">Salons listed on Grumming must:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Hold valid licenses and permits required for their services.</li>
              <li>Maintain accurate pricing and service descriptions.</li>
              <li>Adhere to health and safety standards.</li>
              <li>Honor confirmed bookings made through the platform.</li>
              <li>Respond to customer inquiries in a timely manner.</li>
              <li>Not discriminate against customers based on protected characteristics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property Rights</h2>
            <p className="text-muted-foreground mb-4">
              All content on Grumming, including but not limited to logos, text, graphics, images, and software, is the property of Grumming or its licensors and is protected by intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Copy, modify, or distribute our content without permission.</li>
              <li>Use our trademarks or branding without written consent.</li>
              <li>Reverse engineer or decompile our software.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Grumming acts as an intermediary platform connecting users with salons.</li>
              <li>We are not liable for the quality, safety, or legality of services provided by salons.</li>
              <li>We are not responsible for any damages arising from your use of our platform.</li>
              <li>Our total liability shall not exceed the amount paid by you in the last 12 months.</li>
              <li>We do not guarantee uninterrupted or error-free service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
            <p className="text-muted-foreground mb-4">
              In case of disputes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You agree to first attempt to resolve disputes informally by contacting our support team.</li>
              <li>If informal resolution fails, disputes will be resolved through binding arbitration.</li>
              <li>Arbitration will be conducted in Mumbai, Maharashtra, India.</li>
              <li>These terms are governed by the laws of India.</li>
              <li>Class action lawsuits and jury trials are waived.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You violate these Terms of Service.</li>
              <li>You engage in fraudulent or illegal activities.</li>
              <li>You fail to pay for services as required.</li>
              <li>Your account remains inactive for an extended period.</li>
              <li>We discontinue our services (with reasonable notice).</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Upon termination, your right to use the platform ceases immediately, and we may delete your account data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-foreground font-medium">Grumming Legal Team</p>
              <p className="text-muted-foreground">Email: support@grumming.com</p>
              <p className="text-muted-foreground">Phone: +91 1800-123-4567</p>
              <p className="text-muted-foreground">Address: Mumbai, Maharashtra, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
