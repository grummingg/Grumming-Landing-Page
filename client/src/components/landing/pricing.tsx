import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingTier } from "@shared/schema";

interface PricingProps {
  pricing: PricingTier[];
}

export function Pricing({ pricing }: PricingProps) {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-testid="text-pricing-title"
          >
            Simple, transparent pricing
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-pricing-description"
          >
            Choose the plan that's right for you. All plans include a 14-day
            free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricing.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={tier.highlighted ? "md:-mt-4 md:mb-4" : ""}
            >
              <Card
                className={`h-full overflow-visible relative ${
                  tier.highlighted
                    ? "border-primary shadow-lg"
                    : "hover-elevate"
                }`}
                data-testid={`card-pricing-${tier.id}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1" data-testid="badge-popular">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3
                    className="text-lg font-semibold"
                    data-testid={`text-pricing-name-${tier.id}`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl font-bold"
                      data-testid={`text-pricing-price-${tier.id}`}
                    >
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p
                    className="text-sm text-muted-foreground"
                    data-testid={`text-pricing-description-${tier.id}`}
                  >
                    {tier.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                        data-testid={`text-pricing-feature-${tier.id}-${featureIndex}`}
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    data-testid={`button-pricing-cta-${tier.id}`}
                  >
                    {tier.ctaText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
