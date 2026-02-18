import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Zap,
  Heart,
  TrendingUp,
  Users,
  Globe,
  Coffee,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "wouter";

const perks = [
  {
    icon: Zap,
    title: "Fast Growth",
    description: "Join an early-stage startup where your work has a direct, visible impact from day one.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness benefits for you and your family.",
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
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Build and scale our core platform. You'll work on React, Node.js, and cloud infrastructure to power the Grumming experience.",
  },
  {
    id: 2,
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Shape the look and feel of Grumming. Design intuitive interfaces for our mobile and web platforms that millions of users will love.",
  },
  {
    id: 3,
    title: "Business Development Manager",
    department: "Growth",
    location: "Mumbai",
    type: "Full-time",
    description: "Drive salon partnerships and grow our network across major Indian cities. Build relationships and close deals.",
  },
  {
    id: 4,
    title: "Marketing Lead",
    department: "Marketing",
    location: "Remote / Mumbai",
    type: "Full-time",
    description: "Own Grumming's brand voice and growth marketing. Plan campaigns, manage social media, and drive user acquisition.",
  },
  {
    id: 5,
    title: "Customer Success Associate",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    description: "Be the bridge between Grumming and our salon partners. Ensure smooth onboarding and ongoing satisfaction.",
  },
  {
    id: 6,
    title: "Mobile App Developer (React Native)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build our next-generation mobile app. Deliver a seamless booking experience on iOS and Android.",
  },
];

const departmentColors: Record<string, string> = {
  Engineering: "bg-primary/10 text-primary dark:bg-primary/20",
  Design: "bg-accent/10 text-accent-foreground dark:bg-accent/20",
  Growth: "bg-primary/10 text-primary dark:bg-primary/20",
  Marketing: "bg-accent/10 text-accent-foreground dark:bg-accent/20",
  Operations: "bg-muted text-muted-foreground",
};

export default function HiringPage() {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(`Hi Grumming Team,\n\nI'm interested in the ${jobTitle} position. Please find my details below:\n\nName: \nExperience: \nPortfolio/LinkedIn: \n\nLooking forward to hearing from you.\n\nBest regards`);
    window.open(`mailto:careers@grumming.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-muted/30 dark:bg-background">
      <div className="bg-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 sm:pb-28">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-white/80" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-white border-0 no-default-hover-elevate no-default-active-elevate" data-testid="badge-hiring">
              We're hiring
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" data-testid="text-hiring-title">
              Build the Future of Beauty & Wellness
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed" data-testid="text-hiring-description">
              Join our team and help transform how millions of people discover and book salon services across India.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 sm:-mt-16 pb-16">
        <section className="mb-16" data-testid="section-why-grumming">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk) => (
              <Card key={perk.title} data-testid={`card-perk-${perk.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardContent className="p-5 sm:p-6">
                  <div className="w-10 h-10 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                    <perk.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section data-testid="section-open-positions">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground" data-testid="text-open-positions">Open Positions</h2>
              <p className="text-sm text-muted-foreground mt-1">{openPositions.length} roles available</p>
            </div>
            <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
              <Briefcase className="w-3.5 h-3.5 mr-1.5" />
              {openPositions.length} openings
            </Badge>
          </div>

          <div className="space-y-3">
            {openPositions.map((job) => (
              <Card key={job.id} className="hover-elevate overflow-visible" data-testid={`card-job-${job.id}`}>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 className="font-semibold text-foreground text-base">{job.title}</h3>
                        <Badge
                          variant="secondary"
                          className={`text-xs no-default-hover-elevate no-default-active-elevate ${departmentColors[job.department] || ""}`}
                        >
                          {job.department}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{job.description}</p>
                      <div className="flex items-center gap-4 flex-wrap text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="flex-shrink-0 self-start"
                      onClick={() => handleApply(job.title)}
                      data-testid={`button-apply-${job.id}`}
                    >
                      Apply
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <Card className="border-dashed" data-testid="card-general-apply">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Don't see the right role?</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5 leading-relaxed">
                We're always looking for talented people. Send us your resume and tell us how you'd like to contribute to Grumming.
              </p>
              <Button
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
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
