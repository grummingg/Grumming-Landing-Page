import { type User, type InsertUser, type SalonConfig, defaultSalonConfig } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getSalonConfig(): Promise<SalonConfig>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private salonConfig: SalonConfig;

  constructor() {
    this.users = new Map();
    this.salonConfig = { ...defaultSalonConfig };
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getSalonConfig(): Promise<SalonConfig> {
    return this.salonConfig;
  }
}

export const storage = new MemStorage();
