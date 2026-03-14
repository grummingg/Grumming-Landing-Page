import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const features: { title: string; description: string }[] = [
  {
    title: "Verified Listings",
    description: "Every business on Grumming is verified for quality, hygiene, and professionalism.",
  },
  {
    title: "Real-time Availability",
    description: "See live time slots so you never have to call ahead or wait in line.",
  },
  {
    title: "Instant Confirmation",
    description: "Book in seconds and get immediate confirmation — no back-and-forth needed.",
  },
  {
    title: "Rated & Reviewed",
    description: "Read honest reviews from real customers to find the perfect match for you.",
  },
];

export function WhyGrumming() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-why-grumming-heading">
            Why Grumming
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              data-testid={`why-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <h3 className="text-sm sm:text-base font-semibold text-foreground mb-1.5">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
