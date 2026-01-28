import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Landing Page Configuration Types
export const heroContentSchema = z.object({
  headline: z.string(),
  subheadline: z.string(),
  ctaText: z.string(),
  ctaSecondaryText: z.string(),
});

export const featureSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  company: z.string(),
  content: z.string(),
  avatar: z.string(),
});

export const pricingTierSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  period: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  highlighted: z.boolean(),
  ctaText: z.string(),
});

export const themeConfigSchema = z.object({
  primaryColor: z.string(),
  fontFamily: z.string(),
  borderRadius: z.string(),
  darkMode: z.boolean(),
});

export const landingPageConfigSchema = z.object({
  id: z.string().optional(),
  hero: heroContentSchema,
  features: z.array(featureSchema),
  testimonials: z.array(testimonialSchema),
  pricing: z.array(pricingTierSchema),
  theme: themeConfigSchema,
  brandName: z.string(),
  brandTagline: z.string(),
});

export type HeroContent = z.infer<typeof heroContentSchema>;
export type Feature = z.infer<typeof featureSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type PricingTier = z.infer<typeof pricingTierSchema>;
export type ThemeConfig = z.infer<typeof themeConfigSchema>;
export type LandingPageConfig = z.infer<typeof landingPageConfigSchema>;

// Default landing page configuration
export const defaultLandingPageConfig: LandingPageConfig = {
  brandName: "Horizon",
  brandTagline: "The future of digital experience",
  hero: {
    headline: "Build Something Amazing",
    subheadline: "Create stunning digital experiences with our powerful platform. Launch faster, scale effortlessly, and delight your users.",
    ctaText: "Get Started Free",
    ctaSecondaryText: "Watch Demo",
  },
  features: [
    {
      id: "1",
      icon: "Zap",
      title: "Lightning Fast",
      description: "Optimized performance that keeps your users engaged with sub-second load times.",
    },
    {
      id: "2",
      icon: "Shield",
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your data and users.",
    },
    {
      id: "3",
      icon: "Sparkles",
      title: "AI-Powered",
      description: "Leverage cutting-edge AI to automate workflows and enhance user experiences.",
    },
    {
      id: "4",
      icon: "Globe",
      title: "Global Scale",
      description: "Deploy worldwide with our edge network spanning 200+ data centers.",
    },
    {
      id: "5",
      icon: "Palette",
      title: "Beautiful Design",
      description: "Stunning templates and components that make your product stand out.",
    },
    {
      id: "6",
      icon: "Code",
      title: "Developer First",
      description: "Powerful APIs and SDKs that integrate seamlessly with your existing stack.",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow",
      content: "This platform transformed how we build products. We shipped 3x faster and our customers love the result.",
      avatar: "SC",
    },
    {
      id: "2",
      name: "Marcus Johnson",
      role: "CTO",
      company: "Innovate Labs",
      content: "The developer experience is unmatched. Our team was productive from day one.",
      avatar: "MJ",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Product Lead",
      company: "StartupXYZ",
      content: "We scaled from 1K to 1M users without breaking a sweat. Incredible infrastructure.",
      avatar: "ER",
    },
  ],
  pricing: [
    {
      id: "1",
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for side projects and experiments",
      features: ["Up to 1,000 users", "Basic analytics", "Community support", "1 project"],
      highlighted: false,
      ctaText: "Start Free",
    },
    {
      id: "2",
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For growing teams and businesses",
      features: ["Unlimited users", "Advanced analytics", "Priority support", "Unlimited projects", "Custom domains", "API access"],
      highlighted: true,
      ctaText: "Get Started",
    },
    {
      id: "3",
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: ["Everything in Pro", "Dedicated support", "SLA guarantee", "Custom integrations", "On-premise option", "Advanced security"],
      highlighted: false,
      ctaText: "Contact Sales",
    },
  ],
  theme: {
    primaryColor: "indigo",
    fontFamily: "Inter",
    borderRadius: "md",
    darkMode: false,
  },
};
