import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Lightbulb, Heart, Users, Building, Star } from "lucide-react";
import { Link } from "wouter";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-2" data-testid="text-about-title">About Us</h1>
        <p className="text-muted-foreground mb-8">Discover who we are and what drives us</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-md border-l-4 border-primary">
              <p className="text-lg text-foreground italic">
                "Grumming connects you with the best salons and grooming experts near you. We make booking your next haircut, spa day, or beauty treatment as easy as a few taps."
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Our Story</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Grumming was born from a simple idea in 2019: finding and booking a great salon shouldn't be hard.
            </p>
            <p className="text-muted-foreground mb-4">
              We noticed a common frustration among people looking for quality grooming services. Finding a trusted salon, checking availability, and booking an appointment often meant endless phone calls, waiting on hold, or showing up only to find out there's a two-hour wait. Salon owners, on the other hand, struggled to manage bookings efficiently and reach new customers.
            </p>
            <p className="text-muted-foreground mb-4">
              That's when we decided to build Grumming - a platform that bridges the gap between customers seeking quality grooming services and salons looking to grow their business. Our vision is to make self-care accessible and effortless for everyone, while empowering local salons to thrive in the digital age.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-foreground font-medium mb-2">Our Vision</p>
              <p className="text-muted-foreground text-sm">
                To become India's most trusted platform for salon discovery and booking, making beauty and wellness services accessible to everyone, everywhere.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">What We Do</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Grumming is a comprehensive salon discovery and booking platform that serves both customers and salon owners.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-muted p-5 rounded-md">
                <h3 className="font-semibold text-foreground mb-3">For Customers</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Discover top-rated salons near you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Easy booking in just a few taps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Read verified reviews from real customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Secure and convenient payment options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Exclusive deals and offers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-5 rounded-md">
                <h3 className="font-semibold text-foreground mb-3">For Salon Owners</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Manage all bookings in one place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reach thousands of new customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Reduce no-shows with automated reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build your online reputation with reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Grow your business with insights and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-semibold">Our Impact</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-md text-center">
                <p className="text-3xl font-bold text-primary mb-1">10,000+</p>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-md text-center">
                <p className="text-3xl font-bold text-primary mb-1">500+</p>
                <p className="text-muted-foreground text-sm">Partner Salons</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-md text-center">
                <p className="text-3xl font-bold text-primary mb-1">15+</p>
                <p className="text-muted-foreground text-sm">Cities Covered</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-semibold">Our Values</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-muted p-5 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Convenience & Simplicity</h3>
                <p className="text-muted-foreground text-sm">
                  We believe booking a salon appointment should be effortless. Our platform is designed to be intuitive and user-friendly.
                </p>
              </div>
              <div className="bg-muted p-5 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Quality Partnerships</h3>
                <p className="text-muted-foreground text-sm">
                  We partner only with trusted salons that meet our quality standards, ensuring you always get the best service.
                </p>
              </div>
              <div className="bg-muted p-5 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Customer Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Your happiness is our priority. We continuously improve based on your feedback to deliver the best experience.
                </p>
              </div>
              <div className="bg-muted p-5 rounded-md">
                <h3 className="font-semibold text-foreground mb-2">Supporting Local Businesses</h3>
                <p className="text-muted-foreground text-sm">
                  We're committed to helping local salons grow and succeed in the digital economy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Our Team</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Grumming is built by a passionate team dedicated to transforming the salon booking experience.
            </p>
            <div className="bg-muted p-6 rounded-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">G</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Founder & CEO</h3>
                  <p className="text-muted-foreground text-sm">Grumming Team</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "We started Grumming because we believe everyone deserves easy access to great grooming services. Our goal is to make self-care effortless while helping local salons thrive. Every day, we work to bridge the gap between customers and the best salons in their city."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-4">
              Have questions or want to learn more about Grumming? We'd love to hear from you.
            </p>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-foreground font-medium">Grumming Team</p>
              <p className="text-muted-foreground">Email: support@grumming.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
