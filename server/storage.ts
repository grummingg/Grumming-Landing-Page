import { type User, type InsertUser, type LandingPageConfig, defaultLandingPageConfig } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getLandingPageConfig(): Promise<LandingPageConfig>;
  saveLandingPageConfig(config: LandingPageConfig): Promise<LandingPageConfig>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private landingPageConfig: LandingPageConfig;

  constructor() {
    this.users = new Map();
    this.landingPageConfig = { ...defaultLandingPageConfig, id: randomUUID() };
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

  async getLandingPageConfig(): Promise<LandingPageConfig> {
    return this.landingPageConfig;
  }

  async saveLandingPageConfig(config: LandingPageConfig): Promise<LandingPageConfig> {
    this.landingPageConfig = { ...config, id: this.landingPageConfig.id };
    return this.landingPageConfig;
  }
}

export const storage = new MemStorage();
