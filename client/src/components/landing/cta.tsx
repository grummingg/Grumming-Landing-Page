import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTAProps {
  brandName: string;
}

export function CTA({ brandName }: CTAProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span data-testid="text-cta-badge">Start your journey today</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            data-testid="text-cta-title"
          >
            Ready to transform your
            <br />
            <span className="text-primary">digital experience?</span>
          </h2>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            data-testid="text-cta-description"
          >
            Join thousands of teams already using {brandName} to build better
            products. Get started for free and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2"
              data-testid="button-cta-primary"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-testid="button-cta-secondary"
            >
              Talk to Sales
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground" data-testid="text-cta-disclaimer">
            No credit card required. Free forever for individuals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
