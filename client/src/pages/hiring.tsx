import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Briefcase,
  Zap,
  TrendingUp,
  Users,
  Globe,
  Coffee,
  Send,
  Code,
  Palette,
  Megaphone,
  Settings,
  Handshake,
  PackageSearch,
} from "lucide-react";
import { Link } from "wouter";

const perks = [
  {
    icon: Zap,
    title: "Fast Growth",
    description: "Join an early-stage startup where your work has a direct, visible impact from day one.",
  },
  {
    icon: Globe,
    title: "Remote Friendly",
    description: "Work from anywhere in India. We believe great talent isn't limited by geography.",
  },
  {
    icon: TrendingUp,
    title: "Learning Budget",
    description: "Annual learning stipend for courses, conferences, and skill development.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Collaborate with passionate, talented people who care about building something meaningful.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, generous PTO, and a culture that respects your personal time.",
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

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-white/80" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-2xl">
          <Badge className="mb-4 bg-white/15 text-white border-0 no-default-hover-elevate no-default-active-elevate" data-testid="badge-hiring">
            We're hiring
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" data-testid="text-hiring-title">
            Build the Future of Beauty & Wellness
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed" data-testid="text-hiring-description">
            Join our team and help transform how millions of people discover and book salon services across India.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <section className="mb-14" data-testid="section-why-grumming">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-[#1e293b] rounded-md p-3.5"
                data-testid={`card-perk-${perk.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center mb-2.5">
                  <perk.icon className="w-4 h-4 text-white/90" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{perk.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{perk.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section data-testid="section-open-positions">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white" data-testid="text-open-positions">Open Positions</h2>
              <p className="text-sm text-white/60 mt-1">{openPositions.length} roles available</p>
            </div>
          </div>

          <div className="space-y-10">
            {Object.entries(getGroupedPositions()).map(([dept, jobs]) => {
              const DeptIcon = departmentIcons[dept] || Briefcase;
              return (
                <div key={dept} data-testid={`section-dept-${dept.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <DeptIcon className="w-5 h-5 text-white" />
                    <h3 className="text-lg font-bold text-white">{dept}</h3>
                  </div>

                  <div className="space-y-2.5">
                    {jobs.map((job) => (
                      <div
                        key={job.id}
                        className="flex items-center justify-between gap-4 border border-white/10 rounded-md px-5 py-4 hover-elevate"
                        data-testid={`card-job-${job.id}`}
                      >
                        <div className="min-w-0">
                          <p className="font-medium text-white text-sm sm:text-base">{job.title}</p>
                          <p className="text-xs sm:text-sm text-white/50 mt-0.5">
                            {job.location} / {job.type}
                          </p>
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
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <div className="border border-dashed border-white/20 rounded-md p-6 sm:p-8 text-center" data-testid="card-general-apply">
            <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6 text-white/90" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Don't see the right role?</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto mb-5 leading-relaxed">
              We're always looking for talented people. Send us your resume and tell us how you'd like to contribute to Grumming.
            </p>
            <Button
              className="bg-accent text-accent-foreground border-accent-border"
              onClick={() => {
                const subject = encodeURIComponent("General Application - Grumming");
                const body = encodeURIComponent("Hi Grumming Team,\n\nI'd love to explore opportunities at Grumming. Here are my details:\n\nName: \nExperience: \nArea of interest: \nPortfolio/LinkedIn: \n\nBest regards");
                window.open(`mailto:careers@grumming.com?subject=${subject}&body=${body}`, "_blank");
              }}
              data-testid="button-general-apply"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Your Resume
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
