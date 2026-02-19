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

// Contact Form
export const contactMessageSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const insertContactMessageSchema = contactMessageSchema.omit({ id: true });

export type ContactMessage = z.infer<typeof contactMessageSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// Default salon data
export const defaultSalonConfig: SalonConfig = {
  categories: [
    { id: "1", name: "Haircut", icon: "Scissors" },
    { id: "2", name: "Spa", icon: "Bath" },
    { id: "3", name: "Skincare", icon: "Sparkles" },
    { id: "4", name: "Makeup", icon: "Brush" },
    { id: "5", name: "Hair Colour", icon: "Palette" },
    { id: "6", name: "Nails", icon: "Fingerprint" },
  ],
  locations: [
    { id: "1", name: "Delhi", image: "delhi", salonCount: 250 },
    { id: "2", name: "Mumbai", image: "mumbai", salonCount: 320 },
    { id: "3", name: "Bengaluru", image: "bangalore", salonCount: 180 },
    { id: "4", name: "Kolkata", image: "kolkata", salonCount: 200 },
    { id: "5", name: "Chennai", image: "chennai", salonCount: 145 },
    { id: "6", name: "Hyderabad", image: "hyderabad", salonCount: 165 },
    { id: "7", name: "Ahmedabad", image: "ahmedabad", salonCount: 110 },
    { id: "8", name: "Pune", image: "pune", salonCount: 120 },
    { id: "9", name: "Jaipur", image: "jaipur", salonCount: 95 },
    { id: "10", name: "Surat", image: "surat", salonCount: 80 },
    { id: "11", name: "Kanpur", image: "kanpur", salonCount: 60 },
    { id: "12", name: "Lucknow", image: "lucknow", salonCount: 85 },
    { id: "13", name: "Nagpur", image: "nagpur", salonCount: 70 },
    { id: "14", name: "Visakhapatnam", image: "visakhapatnam", salonCount: 55 },
    { id: "15", name: "Patna", image: "patna", salonCount: 50 },
    { id: "16", name: "Bhopal", image: "bhopal", salonCount: 55 },
    { id: "17", name: "Indore", image: "indore", salonCount: 65 },
    { id: "18", name: "Vadodara", image: "vadodara", salonCount: 50 },
    { id: "19", name: "Ludhiana", image: "ludhiana", salonCount: 45 },
    { id: "20", name: "Agra", image: "agra", salonCount: 60 },
    { id: "21", name: "Varanasi", image: "varanasi", salonCount: 55 },
    { id: "22", name: "Chandigarh", image: "chandigarh", salonCount: 70 },
    { id: "23", name: "Coimbatore", image: "coimbatore", salonCount: 50 },
    { id: "24", name: "Kochi", image: "kochi", salonCount: 60 },
    { id: "25", name: "Thiruvananthapuram", image: "thiruvananthapuram", salonCount: 45 },
    { id: "26", name: "Madurai", image: "madurai", salonCount: 40 },
    { id: "27", name: "Nashik", image: "nashik", salonCount: 45 },
    { id: "28", name: "Ranchi", image: "ranchi", salonCount: 35 },
    { id: "29", name: "Guwahati", image: "guwahati", salonCount: 40 },
    { id: "30", name: "Bhubaneswar", image: "bhubaneswar", salonCount: 35 },
    { id: "31", name: "Udaipur", image: "udaipur", salonCount: 45 },
    { id: "32", name: "Amritsar", image: "amritsar", salonCount: 55 },
    { id: "33", name: "Hampi", image: "hampi", salonCount: 20 },
    { id: "34", name: "Rishikesh", image: "rishikesh", salonCount: 30 },
    { id: "35", name: "Deoghar", image: "deoghar", salonCount: 15 },
    { id: "36", name: "Gaya", image: "gaya", salonCount: 20 },
    { id: "37", name: "Noida", image: "noida", salonCount: 90 },
    { id: "38", name: "Ghaziabad", image: "ghaziabad", salonCount: 65 },
    { id: "39", name: "Gurugram", image: "gurugram", salonCount: 110 },
    { id: "40", name: "Faridabad", image: "faridabad", salonCount: 50 },
    { id: "41", name: "Amravati", image: "amravati", salonCount: 30 },
    { id: "42", name: "Bhavnagar", image: "bhavnagar", salonCount: 25 },
    { id: "43", name: "Haldia", image: "haldia", salonCount: 15 },
    { id: "44", name: "Sambalpur", image: "sambalpur", salonCount: 20 },
    { id: "45", name: "Shimoga", image: "shimoga", salonCount: 25 },
    { id: "46", name: "Mysore", image: "mysore", salonCount: 70 },
    { id: "47", name: "Mangalore", image: "mangalore", salonCount: 55 },
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
