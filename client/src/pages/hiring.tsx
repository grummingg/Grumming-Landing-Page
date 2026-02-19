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
} from "lucide-react";
import { SalonFooter } from "@/components/salon/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const perks = [
  {
    icon: Zap,
    title: "Fast Growth",
    description: "Join an early-stage startup where your work has a direct, visible impact from day one.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Globe,
    title: "Remote Friendly",
    description: "Work from anywhere in India. We believe great talent isn't limited by geography.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Learning Budget",
    description: "Annual learning stipend for courses, conferences, and skill development.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Collaborate with passionate, talented people who care about building something meaningful.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, generous PTO, and a culture that respects your personal time.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Build and scale our core platform end-to-end. Work across React, Node.js, and cloud infrastructure to deliver features that power the Grumming experience.",
  },
  {
    id: 2,
    title: "Mobile App Developer (React Native)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Own our mobile app development across iOS and Android. Build a seamless, high-performance booking experience using React Native.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Shape the look and feel of Grumming. Design intuitive, delightful interfaces for web and mobile that millions of users will love.",
  },
  {
    id: 4,
    title: "Graphic Designer",
    department: "Design",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Create stunning visual assets across brand, marketing, and product. From social media creatives to in-app graphics, you'll define our visual identity.",
  },
  {
    id: 5,
    title: "Growth Manager",
    department: "Growth & Marketing",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Drive user acquisition and retention strategies. Experiment with growth channels, analyze metrics, and scale what works to grow Grumming's user base.",
  },
  {
    id: 6,
    title: "Social Media Manager",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Own Grumming's social media presence across Instagram, YouTube, and other platforms. Create engaging content calendars and build a loyal community.",
  },
  {
    id: 7,
    title: "Content Creator",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Produce compelling written and visual content that tells the Grumming story. From blog posts and newsletters to video scripts and ad copy.",
  },
  {
    id: 8,
    title: "Memer",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Turn trends into viral moments for Grumming. Create relatable, shareable meme content that resonates with our audience and boosts brand awareness.",
  },
  {
    id: 9,
    title: "SEO Specialist",
    department: "Growth & Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Improve our organic search visibility and drive qualified traffic. Develop keyword strategies, optimize content, and track ranking performance.",
  },
  {
    id: 10,
    title: "Business Onboarding Manager",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    description: "Lead the onboarding experience for new salon partners. Ensure a smooth transition from sign-up to going live on the Grumming platform.",
  },
  {
    id: 11,
    title: "City Launch Manager",
    department: "Operations",
    location: "Multiple Cities",
    type: "Full-time",
    description: "Spearhead Grumming's expansion into new cities. Plan and execute launch strategies, build local salon networks, and establish market presence.",
  },
  {
    id: 12,
    title: "Customer Support Executive",
    department: "Operations",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Be the voice of Grumming for our users and salon partners. Resolve queries, gather feedback, and ensure an exceptional support experience.",
  },
  {
    id: 13,
    title: "Operations Coordinator",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    description: "Keep day-to-day operations running smoothly. Coordinate across teams, manage workflows, and optimize internal processes for efficiency.",
  },
  {
    id: 14,
    title: "Business Development Executive",
    department: "Sales & Partnerships",
    location: "Mumbai",
    type: "Full-time",
    description: "Identify and close new business opportunities. Build relationships with salon owners and negotiate partnerships that grow our network.",
  },
  {
    id: 15,
    title: "Business Partnership Manager",
    department: "Sales & Partnerships",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Manage and grow strategic partnerships with salons, brands, and service providers. Drive mutual value and long-term collaboration.",
  },
  {
    id: 16,
    title: "Product Manager",
    department: "Product",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Define the product roadmap and prioritize features that matter most. Work closely with engineering and design to ship impactful product updates.",
  },
  {
    id: 17,
    title: "Data Analyst",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Turn data into actionable insights. Analyze user behavior, track key metrics, and help the team make informed decisions to improve the product.",
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
    window.open(`mailto:careers@grumming.com?subject=${subject}&body=${body}`, "_blank");
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
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase" data-testid="text-careers-label">Careers</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4" data-testid="text-hiring-title">
              Join the Grumming team
            </h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl" data-testid="text-hiring-subtitle">
              Help us transform how India discovers and books salon services. We're looking for passionate people to shape the future of beauty tech.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Badge className="bg-white/15 text-white border-0 no-default-hover-elevate no-default-active-elevate" data-testid="badge-hiring">
                We're hiring
              </Badge>
              <span className="text-white/50 text-sm">{openPositions.length} open roles</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white dark:bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground" data-testid="text-why-grumming">Why Grumming?</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } } }}
              >
                <div className="bg-muted/40 dark:bg-[#1e293b] rounded-md p-4" data-testid={`card-perk-${perk.title.toLowerCase().replace(/\s+/g, "-")}`}>
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

      {deptEntries.map(([dept, jobs], gi) => {
        const DeptIcon = departmentIcons[dept] || Briefcase;
        const colors = departmentColors[dept] || { color: "text-primary", bg: "bg-primary/10" };
        const isAlt = gi % 2 === 0;

        return (
          <section key={dept} className={isAlt ? "bg-muted/30 dark:bg-[#0f172a]/50 py-16" : "bg-white dark:bg-background py-16"}>
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
                    <div className="bg-white dark:bg-[#1e293b] rounded-md p-5 shadow-sm" data-testid={`card-job-${job.id}`}>
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

      <section className="bg-muted/30 dark:bg-[#0f172a]/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white dark:bg-[#1e293b] rounded-md p-8 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3" data-testid="text-dont-see-role">Don't see your role?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                We're always looking for talented people. Send us your resume and tell us how you'd like to contribute to Grumming.
              </p>
              <Button
                className="bg-accent text-accent-foreground border-accent-border"
                onClick={() => window.open("mailto:careers@grumming.com?subject=General%20Application&body=Hi%20Grumming%20Team%2C%0A%0AI'd%20love%20to%20explore%20opportunities%20at%20Grumming.%20Please%20find%20my%20details%20below%3A%0A%0AName%3A%20%0AExperience%3A%20%0APortfolio%2FLinkedIn%3A%20%0A%0ABest%20regards", "_blank")}
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
