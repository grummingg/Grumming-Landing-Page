import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Send, Mail, User, MessageSquare, FileText, Phone, MapPin, Clock, Scissors } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
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
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { SalonFooter } from "@/components/salon/footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "support@grumming.com",
    sub: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 1800-123-4567",
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
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 sm:pb-28">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-6" data-testid="link-brand-home">
              <Scissors className="w-5 h-5" />
              <span className="text-lg font-bold tracking-tight">Grumming</span>
            </span>
          </Link>
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3" data-testid="text-contact-title">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed" data-testid="text-contact-description">
              Have questions or want to partner with Grumming? Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {contactInfo.map((item) => (
            <Card key={item.title} data-testid={`card-contact-${item.title.toLowerCase()}`}>
              <CardContent className="p-4 sm:p-5 text-center">
                <div className="w-10 h-10 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                <p className="text-foreground text-xs sm:text-sm">{item.detail}</p>
                <p className="text-muted-foreground text-[11px] sm:text-xs mt-1 hidden sm:block">{item.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Card data-testid="card-contact-form">
              <CardContent className="p-6 sm:p-8">
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
                      disabled={mutation.isPending}
                      data-testid="button-contact-submit"
                    >
                      {mutation.isPending ? (
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
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
            <Card className="border-dashed" data-testid="card-salon-owners">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-md bg-accent/20 dark:bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">For Business Owners</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Want to list your business on Grumming? Fill out the form with your business details and our partnerships team will reach out within 48 hours to help you get started.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-response-time">
              <CardContent className="p-5 sm:p-6">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SalonFooter />
    </div>
  );
}
