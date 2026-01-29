import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2" data-testid="text-cookie-title">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are stored on your device when you visit a website or use an app. They help websites remember your preferences, login status, and other information to provide a better user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Session management and authentication</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and server optimization</li>
                  <li>Remembering your cookie consent preferences</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  These cookies enable enhanced functionality and personalization.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Remembering your language and region preferences</li>
                  <li>Saving your search history and recent salons</li>
                  <li>Storing your booking preferences</li>
                  <li>Enabling dark/light mode preferences</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  These cookies help us understand how visitors interact with our platform.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Tracking page views and navigation patterns</li>
                  <li>Measuring the effectiveness of features</li>
                  <li>Identifying popular services and salons</li>
                  <li>Analyzing booking completion rates</li>
                </ul>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground mb-2">
                  These cookies are used to deliver relevant advertisements and track marketing campaigns.
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                  <li>Showing personalized offers and promotions</li>
                  <li>Tracking the effectiveness of advertising campaigns</li>
                  <li>Limiting the number of times you see an ad</li>
                  <li>Measuring return on advertising spend</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies from the following third-party services:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-md">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-semibold">Provider</th>
                    <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                    <th className="border border-border p-3 text-left font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3">Google Analytics</td>
                    <td className="border border-border p-3">Website analytics and usage tracking</td>
                    <td className="border border-border p-3">Analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Razorpay</td>
                    <td className="border border-border p-3">Payment processing and fraud detection</td>
                    <td className="border border-border p-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Stripe</td>
                    <td className="border border-border p-3">Payment processing</td>
                    <td className="border border-border p-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Facebook Pixel</td>
                    <td className="border border-border p-3">Advertising and conversion tracking</td>
                    <td className="border border-border p-3">Marketing</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Google Ads</td>
                    <td className="border border-border p-3">Advertising and remarketing</td>
                    <td className="border border-border p-3">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground mb-4">
              You have several options to manage cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Cookie Banner:</strong> When you first visit our platform, you can choose which types of cookies to accept through our cookie consent banner.</li>
              <li><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to control cookies through their settings. You can block or delete cookies, though this may affect functionality.</li>
              <li><strong className="text-foreground">Opt-out Links:</strong> For third-party cookies, you can use the following opt-out mechanisms:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li>Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook Ad Settings</a></li>
                  <li>Google Ads: <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookie Consent</h2>
            <p className="text-muted-foreground mb-4">
              When you first visit Grumming, you will see a cookie consent banner that allows you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Accept all cookies for the full experience</li>
              <li>Accept only essential cookies for basic functionality</li>
              <li>Customize your preferences by category</li>
              <li>Withdraw your consent at any time through our settings</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Your consent preferences are stored and will be remembered for future visits. You can update your preferences at any time by clicking the "Cookie Settings" link in our footer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Impact of Disabling Cookies</h2>
            <p className="text-muted-foreground mb-4">
              If you choose to disable certain cookies, please note:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Essential cookies cannot be disabled as they are required for the platform to function.</li>
              <li>Disabling functional cookies may affect your personalized experience.</li>
              <li>Disabling analytics cookies means we cannot improve our services based on usage data.</li>
              <li>Disabling marketing cookies means you may see less relevant advertisements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of significant changes by posting a notice on our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies, please contact us at:
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
