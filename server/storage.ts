import { type ContactMessage, type InsertContactMessage, type ReportIssue, type InsertReportIssue } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createReportIssue(issue: InsertReportIssue): Promise<ReportIssue>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<string, ContactMessage>;
  private reportIssues: Map<string, ReportIssue>;

  constructor() {
    this.contactMessages = new Map();
    this.reportIssues = new Map();
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }

  async createReportIssue(insertIssue: InsertReportIssue): Promise<ReportIssue> {
    const id = randomUUID();
    const issue: ReportIssue = { ...insertIssue, id };
    this.reportIssues.set(id, issue);
    return issue;
  }
}

export const storage = new MemStorage();
