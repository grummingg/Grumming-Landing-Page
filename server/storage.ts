import { type SalonConfig, defaultSalonConfig, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getSalonConfig(): Promise<SalonConfig>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private salonConfig: SalonConfig;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.salonConfig = { ...defaultSalonConfig };
    this.contactMessages = new Map();
  }

  async getSalonConfig(): Promise<SalonConfig> {
    return this.salonConfig;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
