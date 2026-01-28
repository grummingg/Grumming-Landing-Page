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

// Salon Landing Page Types
export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
});

export const locationSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  salonCount: z.number(),
});

export const salonSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  rating: z.number(),
  reviewCount: z.number(),
  location: z.string(),
  startingPrice: z.number(),
  services: z.array(z.string()),
});

export const salonConfigSchema = z.object({
  categories: z.array(categorySchema),
  locations: z.array(locationSchema),
  featuredSalons: z.array(salonSchema),
});

export type Category = z.infer<typeof categorySchema>;
export type Location = z.infer<typeof locationSchema>;
export type Salon = z.infer<typeof salonSchema>;
export type SalonConfig = z.infer<typeof salonConfigSchema>;

// Default salon data
export const defaultSalonConfig: SalonConfig = {
  categories: [
    { id: "1", name: "Haircut", icon: "Scissors" },
    { id: "2", name: "Spa", icon: "Droplets" },
    { id: "3", name: "Facial", icon: "Smile" },
    { id: "4", name: "Makeup", icon: "Palette" },
    { id: "5", name: "Massage", icon: "Hand" },
    { id: "6", name: "Nails", icon: "Gem" },
  ],
  locations: [
    { id: "1", name: "Delhi", image: "delhi", salonCount: 250 },
    { id: "2", name: "Mumbai", image: "mumbai", salonCount: 320 },
    { id: "3", name: "Bangalore", image: "bangalore", salonCount: 180 },
    { id: "4", name: "Chennai", image: "chennai", salonCount: 145 },
    { id: "5", name: "Hyderabad", image: "hyderabad", salonCount: 165 },
    { id: "6", name: "Pune", image: "pune", salonCount: 120 },
  ],
  featuredSalons: [
    {
      id: "1",
      name: "Luxe Beauty Lounge",
      image: "salon1",
      rating: 4.9,
      reviewCount: 328,
      location: "Connaught Place, Delhi",
      startingPrice: 499,
      services: ["Haircut", "Spa", "Facial"],
    },
    {
      id: "2",
      name: "Glamour Studio",
      image: "salon2",
      rating: 4.8,
      reviewCount: 256,
      location: "Bandra, Mumbai",
      startingPrice: 599,
      services: ["Makeup", "Hair Styling", "Nail Art"],
    },
    {
      id: "3",
      name: "Zen Wellness Spa",
      image: "salon3",
      rating: 4.9,
      reviewCount: 412,
      location: "Koramangala, Bangalore",
      startingPrice: 799,
      services: ["Massage", "Spa", "Facial"],
    },
    {
      id: "4",
      name: "Style Icon Salon",
      image: "salon4",
      rating: 4.7,
      reviewCount: 189,
      location: "Jubilee Hills, Hyderabad",
      startingPrice: 399,
      services: ["Haircut", "Beard Trim", "Hair Color"],
    },
    {
      id: "5",
      name: "Aura Beauty Bar",
      image: "salon5",
      rating: 4.8,
      reviewCount: 275,
      location: "T Nagar, Chennai",
      startingPrice: 549,
      services: ["Facial", "Makeup", "Waxing"],
    },
  ],
};
