import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/salon-config", async (req, res) => {
    try {
      const config = await storage.getSalonConfig();
      res.json(config);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch salon configuration" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid form data", errors: parsed.error.flatten().fieldErrors });
      }
      const message = await storage.createContactMessage(parsed.data);
      res.status(201).json({ message: "Thank you! Your message has been sent successfully.", id: message.id });
    } catch (error) {
      res.status(500).json({ message: "Failed to send message. Please try again." });
    }
  });

  return httpServer;
}
