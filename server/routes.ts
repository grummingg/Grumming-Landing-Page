import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { landingPageConfigSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/config", async (req, res) => {
    try {
      const config = await storage.getLandingPageConfig();
      res.json(config);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch configuration" });
    }
  });

  app.post("/api/config", async (req, res) => {
    try {
      const validated = landingPageConfigSchema.parse(req.body);
      const savedConfig = await storage.saveLandingPageConfig(validated);
      res.json(savedConfig);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "Failed to save configuration" });
      }
    }
  });

  return httpServer;
}
