import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, FileText, Phone, MapPin, Clock, Scissors } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { SalonFooter } from "@/components/salon/footer";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/constants";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: SUPPORT_EMAIL,
    sub: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: SUPPORT_PHONE,
    sub: "Toll-free, Mon - Sat",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "Mumbai, Maharashtra",
    sub: "Corporate headquarters",
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "Mon - Sat, 9AM - 7PM IST",
    sub: "We're here for you",
  },
];

export default function ContactPage() {
  useDocumentTitle("Contact Us | Grumming");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed to send message");
      toast({
        title: "Message Sent",
        description: `Thank you ${data.name}! We've received your message and will get back to you within 24 hours.`,
      });
      form.reset();
    } catch (err: unknown) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 sm:pb-28">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" data-testid="text-contact-title">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed" data-testid="text-contact-description">
              Have questions or want to partner with Grumming? Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 pb-16">
        <div className="bg-background rounded-2xl shadow-lg border border-border/40 mb-8 sm:mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border/40">
            {contactInfo.map((item) => (
              <div key={item.title} className="p-5 sm:p-6 text-center" data-testid={`card-contact-${item.title.toLowerCase()}`}>
                <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                <p className="text-foreground text-xs sm:text-sm">{item.detail}</p>
                <p className="text-muted-foreground text-[11px] sm:text-xs mt-1 hidden sm:block">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div data-testid="card-contact-form">
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-1">Send us a message</h2>
                <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we'll get back to you shortly.</p>

                <Separator className="mb-6" />

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                  placeholder="Your name"
                                  className="pl-10"
                                  data-testid="input-contact-name"
                                  {...field}
                                />
                              </div>
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
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                  placeholder="your@email.com"
                                  type="email"
                                  className="pl-10"
                                  data-testid="input-contact-email"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                placeholder="What's this about?"
                                className="pl-10"
                                data-testid="input-contact-subject"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more..."
                              className="min-h-[140px] resize-none"
                              data-testid="input-contact-message"
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
                      disabled={isSubmitting}
                      data-testid="button-contact-submit"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
            <div data-testid="card-salon-owners">
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-accent/20 dark:bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">For Business Owners</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Want to list your business on Grumming? Fill out the form with your business details and our partnerships team will reach out within 48 hours to help you get started.
                </p>
              </div>
            </div>

            <div data-testid="card-response-time">
              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-foreground mb-3">What to expect</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span>Acknowledgement email within 1 hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span>Detailed response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span>Partnership onboarding in 48 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SalonFooter />
    </div>
  );
}
