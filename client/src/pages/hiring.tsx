import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Coffee,
  Code,
  Palette,
  Megaphone,
  Settings,
  Handshake,
  PackageSearch,
  Heart,
  Mail,
  Scissors,
  GraduationCap,
  Rocket,
  Shield,
} from "lucide-react";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const perks = [
  {
    icon: Zap,
    title: "High Impact Work",
    description: "Join an early-stage startup where your contributions have a direct, measurable impact on millions of users from day one.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Globe,
    title: "Remote Friendly",
    description: "Work from anywhere in India. We believe great talent isn't limited by geography. Flexible work arrangements that fit your life.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Annual learning stipend for courses, certifications, and conferences. Regular knowledge-sharing sessions and mentorship programmes.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Exceptional Team",
    description: "Collaborate with passionate, talented people who care deeply about building something meaningful and pushing boundaries.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible working hours, generous paid time off, mental health days, and a culture that genuinely respects your personal time.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Rocket,
    title: "Career Advancement",
    description: "Clear growth paths, regular performance reviews, and opportunities to take on leadership roles as the company scales.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Shield,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family. Wellness benefits including grooming credits on the Grumming platform.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    icon: TrendingUp,
    title: "Competitive Compensation",
    description: "Market-competitive salary packages with performance bonuses. Early-stage equity options for key roles to share in our success.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Indore",
    type: "Full-time",
    description: "Build and scale our core platform end-to-end. Work across React, Node.js, and cloud infrastructure to deliver features that power the Grumming experience for thousands of users.",
  },
  {
    id: 2,
    title: "Mobile App Developer (React Native)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Own our mobile app development across iOS and Android. Build a seamless, high-performance booking experience that delights users on every device.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Indore",
    type: "Full-time",
    description: "Shape the look and feel of Grumming. Design intuitive, accessible interfaces for web and mobile that make booking beauty services a pleasure.",
  },
  {
    id: 4,
    title: "Graphic Designer",
    department: "Design",
    location: "Remote / Indore",
    type: "Full-time",
    description: "Create stunning visual assets across brand, marketing, and product. From social media creatives to in-app graphics, you'll define and evolve our visual identity.",
  },
  {
    id: 5,
    title: "Growth Manager",
    department: "Growth & Marketing",
    location: "Remote / Indore",
    type: "Full-time",
    description: "Drive user acquisition and retention strategies across channels. Design experiments, analyse metrics, and scale what works to accelerate Grumming's growth.",
  },
  {
    id: 6,
    title: "Social Media Manager",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Own Grumming's social media presence across Instagram, YouTube, and emerging platforms. Build community, create content calendars, and grow a loyal following.",
  },
  {
    id: 7,
    title: "Content Creator",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time / Part-time",
    description: "Produce compelling written and visual content that tells the Grumming story. Blog posts, newsletters, video scripts, ad copy, and everything in between.",
  },
  {
    id: 8,
    title: "Memer",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Turn trends into viral moments for Grumming. Create relatable, shareable meme content that resonates with our audience and drives organic brand awareness.",
  },
  {
    id: 9,
    title: "SEO Specialist",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Improve organic search visibility and drive qualified traffic. Develop keyword strategies, optimise content architecture, and track ranking performance across markets.",
  },
  {
    id: 10,
    title: "Business Onboarding Manager",
    department: "Operations",
    location: "Indore",
    type: "Full-time",
    description: "Lead the onboarding experience for new business partners. Ensure a smooth, efficient transition from sign-up to going live on the Grumming platform.",
  },
  {
    id: 11,
    title: "City Launch Manager",
    department: "Operations",
    location: "Multiple Cities",
    type: "Full-time",
    description: "Spearhead Grumming's expansion into new cities across India. Plan and execute launch strategies, build local business networks, and establish market presence.",
  },
  {
    id: 12,
    title: "Customer Support Executive",
    department: "Operations",
    location: "Remote / Indore",
    type: "Full-time",
    description: "Be the voice of Grumming for our users and business partners. Resolve queries with empathy, gather actionable feedback, and ensure an exceptional support experience.",
  },
  {
    id: 13,
    title: "Operations Coordinator",
    department: "Operations",
    location: "Indore",
    type: "Full-time",
    description: "Keep day-to-day operations running smoothly. Coordinate across teams, manage workflows, optimise internal processes, and ensure operational excellence.",
  },
  {
    id: 14,
    title: "Business Development Executive",
    department: "Sales & Partnerships",
    location: "Indore / Field",
    type: "Full-time",
    description: "Identify and close new business opportunities. Build relationships with salon, spa, and studio owners and negotiate partnerships that expand our network.",
  },
  {
    id: 15,
    title: "Business Partnership Manager",
    department: "Sales & Partnerships",
    location: "Remote / Indore",
    type: "Full-time",
    description: "Manage and grow strategic partnerships with service providers, brands, and industry stakeholders. Drive mutual value and foster long-term collaboration.",
  },
  {
    id: 16,
    title: "Product Manager",
    department: "Product",
    location: "Remote / Indore",
    type: "Full-time",
    description: "Define the product roadmap and prioritise features that matter most. Work closely with engineering, design, and data to ship impactful product updates.",
  },
  {
    id: 17,
    title: "Data Analyst",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Turn raw data into actionable insights. Analyse user behaviour, track key metrics, build dashboards, and help the team make data-informed decisions.",
  },
];

const departmentIcons: Record<string, typeof Code> = {
  Engineering: Code,
  Design: Palette,
  "Growth & Marketing": Megaphone,
  Operations: Settings,
  "Sales & Partnerships": Handshake,
  Product: PackageSearch,
};

const departmentColors: Record<string, { color: string; bg: string }> = {
  Engineering: { color: "text-blue-500", bg: "bg-blue-500/10" },
  Design: { color: "text-purple-500", bg: "bg-purple-500/10" },
  "Growth & Marketing": { color: "text-orange-500", bg: "bg-orange-500/10" },
  Operations: { color: "text-green-500", bg: "bg-green-500/10" },
  "Sales & Partnerships": { color: "text-amber-500", bg: "bg-amber-500/10" },
  Product: { color: "text-cyan-500", bg: "bg-cyan-500/10" },
};

const departmentOrder = [
  "Engineering",
  "Design",
  "Growth & Marketing",
  "Operations",
  "Sales & Partnerships",
  "Product",
];

const hiringProcess = [
  { step: 1, title: "Application", description: "Submit your application via email with your resume and a brief note on why you're excited about Grumming." },
  { step: 2, title: "Initial Screening", description: "Our team reviews your application and responds within 5 business days. Short-listed candidates are invited for a conversation." },
  { step: 3, title: "Interview Rounds", description: "1-2 rounds depending on the role. We focus on problem-solving, culture fit, and your potential to grow with us." },
  { step: 4, title: "Offer & Onboarding", description: "Successful candidates receive an offer within 48 hours. Our onboarding programme ensures you hit the ground running." },
];

function getGroupedPositions() {
  const grouped: Record<string, typeof openPositions> = {};
  for (const dept of departmentOrder) {
    const jobs = openPositions.filter((j) => j.department === dept);
    if (jobs.length > 0) grouped[dept] = jobs;
  }
  return grouped;
}

export default function HiringPage() {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(`Hi Grumming Team,\n\nI'm interested in the ${jobTitle} position. Please find my details below:\n\nName: \nExperience: \nPortfolio/LinkedIn: \n\nLooking forward to hearing from you.\n\nBest regards`);
    window.open(`mailto:careers@grumming.com?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  };

  const grouped = getGroupedPositions();
  const deptEntries = Object.entries(grouped);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-careers-label">Careers at Grumming</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-hiring-title">
              Build the future of beauty tech
            </h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-hiring-subtitle">
              We're on a mission to transform how India discovers and books beauty and grooming services. Join our team of passionate builders, creators, and problem-solvers.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Badge className="bg-white/15 text-white border-0 no-default-hover-elevate no-default-active-elevate" data-testid="badge-hiring">
                We're hiring
              </Badge>
              <span className="text-white/50 text-sm">{openPositions.length} open roles across {departmentOrder.length} departments</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white dark:bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground" data-testid="text-why-grumming">Why Grumming?</h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              We're building more than a product — we're building a team that values ownership, creativity, and impact. Here's what you can expect when you join us.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.06 } } }}
              >
                <div className="rounded-md p-4 h-full" data-testid={`card-perk-${index}`}>
                  <div className={`w-8 h-8 rounded-lg ${perk.bg} flex items-center justify-center mb-3`}>
                    <perk.icon className={`w-4 h-4 ${perk.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{perk.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{perk.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-indigo-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground" data-testid="text-hiring-process">Our Hiring Process</h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              We've designed a straightforward, respectful hiring process. No trick questions, no marathon interviews — just genuine conversations to find the right fit.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hiringProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } } }}
              >
                <div className="rounded-md p-5 h-full" data-testid={`card-process-${index}`}>
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center mb-3">
                    <span className="text-xs font-bold text-amber-500">{item.step}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {deptEntries.map(([dept, jobs], gi) => {
        const DeptIcon = departmentIcons[dept] || Briefcase;
        const colors = departmentColors[dept] || { color: "text-primary", bg: "bg-primary/10" };
        const isAlt = gi % 2 === 0;

        return (
          <section key={dept} className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <DeptIcon className={`w-5 h-5 ${colors.color}`} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground" data-testid={`text-dept-${dept.toLowerCase().replace(/\s+/g, "-")}`}>{dept}</h2>
                  <span className="text-sm text-muted-foreground">{jobs.length} {jobs.length === 1 ? "role" : "roles"}</span>
                </div>
              </motion.div>
              <div className="space-y-3">
                {jobs.map((job, ji) => (
                  <motion.div
                    key={job.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: ji * 0.05 } } }}
                  >
                    <div className="rounded-md p-5" data-testid={`card-job-${job.id}`}>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground">{job.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{job.location} &middot; {job.type}</p>
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{job.description}</p>
                        </div>
                        <Button
                          size="sm"
                          className="flex-shrink-0 bg-accent text-accent-foreground border-accent-border"
                          onClick={() => handleApply(job.title)}
                          data-testid={`button-apply-${job.id}`}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-md p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3" data-testid="text-dont-see-role">Don't see your role?</h2>
              <p className="text-muted-foreground mb-3 max-w-lg mx-auto">
                We're always looking for talented people who share our passion for building great products. If you think you'd be a great fit for Grumming but don't see a matching role, we'd still love to hear from you.
              </p>
              <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
                Send your resume along with a brief note about what excites you about Grumming and how you'd like to contribute.
              </p>
              <Button
                className="bg-accent text-accent-foreground border-accent-border"
                onClick={() => window.open("mailto:careers@grumming.com?subject=General%20Application&body=Hi%20Grumming%20Team%2C%0A%0AI'd%20love%20to%20explore%20opportunities%20at%20Grumming.%20Please%20find%20my%20details%20below%3A%0A%0AName%3A%20%0AExperience%3A%20%0APortfolio%2FLinkedIn%3A%20%0A%0ABest%20regards", "_blank", "noopener,noreferrer")}
                data-testid="button-general-apply"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send your resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
