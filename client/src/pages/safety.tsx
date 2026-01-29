import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, UserCheck, AlertCircle, Phone, Eye, Lock } from "lucide-react";
import { Link } from "wouter";

export default function Safety() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2" data-testid="text-safety-title">Safety</h1>
        <p className="text-muted-foreground mb-8">Your safety is our priority</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to Safety</h2>
            <p className="text-muted-foreground mb-4">
              At Grumming, we are committed to creating a safe and trustworthy environment for both customers and salon partners. We have implemented comprehensive safety measures to ensure every booking experience is secure and reliable.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Verified Salons</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Every salon on Grumming goes through a verification process before being listed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Business License Verification:</strong> We verify that all salons hold valid business licenses and permits</li>
              <li><strong className="text-foreground">Hygiene Standards:</strong> Salons must meet our hygiene and cleanliness standards</li>
              <li><strong className="text-foreground">Professional Staff:</strong> We ensure staff are trained and certified for the services they offer</li>
              <li><strong className="text-foreground">Regular Audits:</strong> Partner salons undergo periodic reviews to maintain quality standards</li>
              <li><strong className="text-foreground">Customer Ratings:</strong> Salons with consistently low ratings are reviewed and may be removed</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Safety Features</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Real-Time Booking Tracking</h3>
                <p className="text-muted-foreground text-sm">Share your booking details with trusted contacts so they know where you are and when to expect you back.</p>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">In-App Support</h3>
                <p className="text-muted-foreground text-sm">Access 24/7 customer support directly from the app if you encounter any issues during your visit.</p>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Verified Reviews</h3>
                <p className="text-muted-foreground text-sm">All reviews come from verified customers who have actually visited the salon, ensuring authentic feedback.</p>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Secure Payments</h3>
                <p className="text-muted-foreground text-sm">All transactions are encrypted and processed through secure payment gateways. We never store your full card details.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Hygiene & Cleanliness</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Our partner salons are required to maintain high hygiene standards:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Sanitized tools and equipment between each customer</li>
              <li>Clean and well-maintained facilities</li>
              <li>Proper disposal of single-use items</li>
              <li>Regular deep cleaning schedules</li>
              <li>Staff trained in hygiene protocols</li>
              <li>Use of quality, tested products</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Data Protection</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Your personal information is protected through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Encryption:</strong> All data is encrypted in transit and at rest</li>
              <li><strong className="text-foreground">Limited Access:</strong> Salons only see information necessary for your appointment</li>
              <li><strong className="text-foreground">No Data Selling:</strong> We never sell your personal information to third parties</li>
              <li><strong className="text-foreground">Secure Storage:</strong> Your data is stored on secure, industry-standard servers</li>
              <li><strong className="text-foreground">Privacy Controls:</strong> You can manage what information is visible in your profile</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-semibold">Reporting Concerns</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              If you experience any safety concerns, please report them immediately:
            </p>
            
            <div className="space-y-4">
              <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-md border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-foreground mb-2">What You Can Report</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Inappropriate behavior by salon staff</li>
                  <li>Unhygienic conditions or practices</li>
                  <li>Misrepresentation of services</li>
                  <li>Safety hazards at the location</li>
                  <li>Billing disputes or fraud</li>
                  <li>Any other concerning situations</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">How to Report</h3>
                <ol className="list-decimal pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Open the Grumming app and go to your booking history</li>
                  <li>Select the relevant booking</li>
                  <li>Tap "Report an Issue"</li>
                  <li>Describe your concern in detail</li>
                  <li>Our safety team will review and respond within 24 hours</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Emergency Contacts</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              In case of emergencies, please contact:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold text-foreground">Police Emergency</p>
                <p className="text-2xl font-bold text-primary">100</p>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold text-foreground">Women Helpline</p>
                <p className="text-2xl font-bold text-primary">1091</p>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold text-foreground">Medical Emergency</p>
                <p className="text-2xl font-bold text-primary">108</p>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <p className="font-semibold text-foreground">Grumming Support</p>
                <p className="text-lg font-medium text-primary">support@grumming.com</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Safety Tips</h2>
            <p className="text-muted-foreground mb-4">
              Help us maintain a safe community by following these tips:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Read salon reviews before booking</li>
              <li>Check the salon's ratings and verification status</li>
              <li>Communicate any allergies or sensitivities before your appointment</li>
              <li>Trust your instincts - if something feels wrong, leave and report</li>
              <li>Share your booking details with someone you trust</li>
              <li>Keep your app updated for the latest safety features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For safety-related inquiries or concerns, please reach out:
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-foreground font-medium">Grumming Safety Team</p>
              <p className="text-muted-foreground">Email: support@grumming.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
