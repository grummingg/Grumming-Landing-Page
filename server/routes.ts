import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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

  return httpServer;
}
