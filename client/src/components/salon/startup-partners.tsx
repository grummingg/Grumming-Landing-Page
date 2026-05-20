import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";

type Partner = {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeAccent: string;
  cta: string;
  href: string;
  logos: { label: string; node: React.ReactNode }[];
  gradient: string;
};

const MicrosoftLogo = () => (
  <div className="flex items-center gap-2" aria-label="Microsoft">
    <div className="grid grid-cols-2 grid-rows-2 gap-[2px]">
      <span className="block h-2.5 w-2.5 bg-[#F25022]" />
      <span className="block h-2.5 w-2.5 bg-[#7FBA00]" />
      <span className="block h-2.5 w-2.5 bg-[#00A4EF]" />
      <span className="block h-2.5 w-2.5 bg-[#FFB900]" />
    </div>
    <span className="text-sm font-semibold text-foreground/90 tracking-tight">
      Microsoft
    </span>
  </div>
);

const AzureLogo = () => (
  <div className="flex items-center gap-1.5" aria-label="Microsoft Azure">
    <svg viewBox="0 0 96 96" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#0089D6"
        d="M44.3 12.5L20.6 73.9h17.8l4.4-12.4h22l4.2 12.4h17.4L62.5 12.5H44.3zm2.3 35.9l7-19.7 6.6 19.7H46.6z"
      />
      <path
        fill="#0089D6"
        opacity="0.7"
        d="M9 83.5l27.5-4.7 8.6-8.5L20.6 73.9z"
      />
    </svg>
    <span className="text-sm font-semibold text-foreground/90 tracking-tight">
      Azure
    </span>
  </div>
);

const DeelLogo = () => (
  <div className="flex items-center gap-2" aria-label="Deel">
    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#1A1F36] to-[#0B5FFF] text-white text-sm font-bold tracking-tight">
      D
    </div>
    <span className="text-sm font-semibold text-foreground/90 tracking-tight">
      Deel
    </span>
  </div>
);

const partners: Partner[] = [
  {
    id: "microsoft",
    title: "Microsoft for Startups",
    description:
      "Grumming is supported by Microsoft for Startups Founders Hub with up to $100,000 in Azure credits, developer tools, cloud infrastructure and startup resources helping us scale faster.",
    badge: "$100K Azure Credits",
    badgeAccent: "from-[#0089D6]/20 to-[#7FBA00]/20 text-[#0089D6] dark:text-[#4DB6FF] border-[#0089D6]/30",
    cta: "Learn More",
    href: "https://www.microsoft.com/en-us/startups",
    logos: [
      { label: "Microsoft", node: <MicrosoftLogo /> },
      { label: "Azure", node: <AzureLogo /> },
    ],
    gradient:
      "from-[#0089D6]/10 via-transparent to-[#7FBA00]/10 dark:from-[#0089D6]/20 dark:to-[#7FBA00]/15",
  },
  {
    id: "deel",
    title: "Deel Ventures",
    description:
      "Through Deel Ventures and the startup partner ecosystem, Grumming received access to global founder perks, infrastructure support and startup growth resources.",
    badge: "Startup Partner",
    badgeAccent:
      "from-[#0B5FFF]/20 to-[#7C3AED]/20 text-[#0B5FFF] dark:text-[#7FA9FF] border-[#0B5FFF]/30",
    cta: "Explore Partnership",
    href: "https://www.deel.com/ventures",
    logos: [{ label: "Deel", node: <DeelLogo /> }],
    gradient:
      "from-[#0B5FFF]/10 via-transparent to-[#7C3AED]/10 dark:from-[#0B5FFF]/20 dark:to-[#7C3AED]/15",
  },
];

export function StartupPartners() {
  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden bg-background"
      data-testid="section-startup-partners"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3 w-3 text-accent" />
            Backed By
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            data-testid="text-partners-heading"
          >
            Trusted Startup Partners
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed">
            Grumming is proudly supported by global startup ecosystems helping
            us build the future of beauty and grooming accessibility for
            salons, spas, and studios everywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative"
              data-testid={`card-partner-${partner.id}`}
            >
              {/* Gradient border glow */}
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`}
                aria-hidden="true"
              />

              <div
                className={`relative h-full rounded-2xl border border-border/70 bg-card/80 dark:bg-card/40 backdrop-blur-xl p-6 sm:p-8 shadow-sm group-hover:shadow-2xl group-hover:border-border transition-all duration-500 overflow-hidden`}
              >
                {/* Inner gradient wash */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-60`}
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* Logos row */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-5">
                    {partner.logos.map((logo) => (
                      <div
                        key={logo.label}
                        className="flex items-center px-3 py-1.5 rounded-lg border border-border/60 bg-background/70 backdrop-blur-sm"
                      >
                        {logo.node}
                      </div>
                    ))}
                  </div>

                  {/* Title + badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-foreground tracking-tight"
                      data-testid={`text-partner-title-${partner.id}`}
                    >
                      {partner.title}
                    </h3>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 mb-4 text-[11px] font-semibold uppercase tracking-wide rounded-full border bg-gradient-to-r ${partner.badgeAccent}`}
                    data-testid={`badge-partner-${partner.id}`}
                  >
                    <Sparkles className="h-3 w-3" />
                    {partner.badge}
                  </span>

                  <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="group/btn bg-background/60 backdrop-blur-sm"
                    data-testid={`button-partner-${partner.id}`}
                  >
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {partner.cta}
                      <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-14 text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto"
          data-testid="text-partners-footer"
        >
          Building the future of grooming technology with support from
          world-class startup ecosystems.
        </motion.p>
      </div>
    </section>
  );
}
