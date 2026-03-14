import { useDocumentTitle } from "@/hooks/use-document-title";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star, Shield, CreditCard, AlertTriangle, Smartphone, MessageSquare } from "lucide-react";
import { SalonFooter } from "@/components/salon/footer";
import { SubPageHero } from "@/components/salon/sub-page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fadeUp } from "@/lib/animations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const reportIssueSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  issueType: z.string().min(1, "Please select an issue type"),
  bookingId: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type ReportIssueFormData = z.infer<typeof reportIssueSchema>;

const issueCategories = [
  {
    id: "service-quality",
    icon: Star,
    title: "Service Quality",
    description: "Unsatisfactory service, untrained staff, or poor results",
  },
  {
    id: "hygiene-concerns",
    icon: Shield,
    title: "Hygiene Concerns",
    description: "Unclean facilities, unsanitized equipment, or safety hazards",
  },
  {
    id: "billing-issues",
    icon: CreditCard,
    title: "Billing Issues",
    description: "Unexpected charges, pricing disputes, or payment problems",
  },
  {
    id: "inappropriate-behavior",
    icon: AlertTriangle,
    title: "Inappropriate Behavior",
    description: "Unprofessional conduct, harassment, or discrimination",
  },
  {
    id: "app-problems",
    icon: Smartphone,
    title: "App Problems",
    description: "Bugs, glitches, or technical issues with the app",
  },
  {
    id: "other",
    icon: MessageSquare,
    title: "Other",
    description: "Any other concern not listed above",
  },
];

const steps = [
  {
    number: "1",
    title: "Submit your report with details",
  },
  {
    number: "2",
    title: "Our team reviews within 24 hours",
  },
  {
    number: "3",
    title: "We investigate and take action",
  },
  {
    number: "4",
    title: "You receive a resolution update",
  },
];

export default function ReportIssue() {
  useDocumentTitle("Report an Issue | Grumming");
  const { toast } = useToast();
  const form = useForm<ReportIssueFormData>({
    resolver: zodResolver(reportIssueSchema),
    defaultValues: {
      name: "",
      email: "",
      issueType: "",
      bookingId: "",
      description: "",
    },
  });

  const onSubmit = async (data: ReportIssueFormData) => {
    try {
      const res = await fetch("/api/report-issue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        toast({ title: "Submission failed", description: json.message || "Please try again.", variant: "destructive" });
        return;
      }
      toast({ title: "Report submitted successfully", description: "We'll get back to you within 24 hours." });
      form.reset();
    } catch (err: unknown) {
      toast({ title: "Network error", description: "Could not reach our servers. Please try again.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SubPageHero
        label="Report an Issue"
        title="We're here to help"
        subtitle="Let us know about any problems and we'll work to resolve them quickly"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3" data-testid="text-categories-label">
              What You Can Report
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-categories-title">
              Issue Categories
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issueCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-md p-6 h-full" data-testid={`card-issue-category-${category.id}`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3" data-testid="text-how-it-works-label">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-how-it-works-title">
              Our Process
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-step-${step.number}`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary">{step.number}</span>
                  </div>
                  <p className="text-foreground font-medium text-sm leading-relaxed">{step.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-3" data-testid="text-form-label">
              Report an Issue
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-form-title">
              Share Your Feedback
            </h2>
          </motion.div>

          <div data-testid="card-report-form">
            <div className="p-6 sm:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              data-testid="input-report-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              type="email"
                              data-testid="input-report-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="issueType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue Type</FormLabel>
                        <FormControl>
                          <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger data-testid="select-report-issue-type">
                              <SelectValue placeholder="Select an issue type" />
                            </SelectTrigger>
                            <SelectContent>
                              {issueCategories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bookingId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Booking ID (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your booking reference (if applicable)"
                            data-testid="input-report-booking-id"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe the issue in detail. Include dates, times, and any relevant information that will help us investigate."
                            className="min-h-[140px] resize-none"
                            data-testid="input-report-description"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    data-testid="button-report-submit"
                  >
                    Submit Report
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="rounded-md p-8 border border-amber-500/20">
            <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="text-emergency-title">
              For Urgent Safety Concerns
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-emergency-description">
              If you're experiencing a life-threatening emergency or urgent safety issue, please contact emergency services immediately:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-md p-4" data-testid="emergency-police">
                <p className="font-semibold text-foreground">Police</p>
                <p className="text-lg font-bold text-primary">100</p>
              </div>
              <div className="rounded-md p-4" data-testid="emergency-women">
                <p className="font-semibold text-foreground">Women Helpline</p>
                <p className="text-lg font-bold text-primary">1091</p>
              </div>
              <div className="rounded-md p-4" data-testid="emergency-medical">
                <p className="font-semibold text-foreground">Medical</p>
                <p className="text-lg font-bold text-primary">108</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SalonFooter />
    </div>
  );
}
