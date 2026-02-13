import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Send, Mail, User, MessageSquare, FileText, ArrowLeft, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Link } from "wouter";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@grumming.com",
    sub: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 1800-123-4567",
    sub: "Toll-free, Mon-Sat",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Mumbai, Maharashtra, India",
    sub: "Corporate headquarters",
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon - Sat: 9AM - 7PM",
    sub: "IST (Indian Standard Time)",
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
    <div className="min-h-screen bg-background">
      <div className="bg-primary/5 dark:bg-primary/10 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <Link href="/">
            <Button variant="ghost" className="mb-6" data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-foreground" data-testid="text-contact-title">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-description">
              Have questions or want to partner with Grumming? We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.title} className="hover-elevate" data-testid={`card-contact-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-foreground text-sm mt-0.5">{item.detail}</p>
                    <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-dashed" data-testid="card-salon-owners">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-md bg-accent/20 dark:bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm">For Salon Owners</h3>
                  <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                    Want to list your salon on Grumming? Fill out the form and our partnerships team will get back to you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card data-testid="card-contact-form">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-1">Send us a message</h2>
                <p className="text-sm text-muted-foreground mb-6">Fill out the form below and we'll get back to you shortly.</p>

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
        </div>
      </div>

      <div className="h-16" />
    </div>
  );
}
