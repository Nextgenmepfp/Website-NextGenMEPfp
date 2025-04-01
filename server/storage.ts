import {
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  // contacts, type Contact, type InsertContact, //Removed as replaced by new import
  newsletter, type Newsletter, type InsertNewsletter
} from "@shared/schema";
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { contacts, type Contact, type InsertContact } from '@shared/schema';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:contacts.db',
});

export const db = drizzle(client);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Waitlist methods
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistEntries(): Promise<Waitlist[]>;

  // Contact methods
  createContactEntry(entry: InsertContact): Promise<Contact>;
  getContactEntries(): Promise<Contact[]>;

  // Newsletter methods
  createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter>;
  getNewsletterEntries(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, Waitlist>;
  // private contactEntries: Map<number, Contact>; //Removed
  private newsletterEntries: Map<number, Newsletter>;

  currentUserId: number;
  currentWaitlistId: number;
  // currentContactId: number; //Removed
  currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    // this.contactEntries = new Map(); //Removed
    this.newsletterEntries = new Map();

    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    // this.currentContactId = 1; //Removed
    this.currentNewsletterId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Waitlist methods
  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentWaitlistId++;
    const waitlistEntry: Waitlist = {
      ...entry,
      id,
      createdAt: new Date()
    };
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }


  // Newsletter methods
  async createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter> {
    // Check for existing email to maintain uniqueness
    const exists = Array.from(this.newsletterEntries.values()).find(
      (newsletter) => newsletter.email === entry.email
    );

    if (exists) {
      return exists;
    }

    const id = this.currentNewsletterId++;
    const newsletterEntry: Newsletter = {
      ...entry,
      id,
      createdAt: new Date()
    };
    this.newsletterEntries.set(id, newsletterEntry);
    return newsletterEntry;
  }

  async getNewsletterEntries(): Promise<Newsletter[]> {
    return Array.from(this.newsletterEntries.values());
  }
}


export class Storage implements IStorage {
  async createContactEntry(contact: InsertContact): Promise<Contact> {
    const result = await db.insert(contacts).values({
      ...contact,
      createdAt: new Date()
    }).returning();
    return result[0];
  }

  async getContactEntries(): Promise<Contact[]> {
    return db.select().from(contacts).all();
  }
  async getUser(id: number): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async getUserByUsername(username: string): Promise<User | undefined> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: InsertUser): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    throw new Error("Method not implemented.");
  }
  async getWaitlistEntries(): Promise<Waitlist[]> {
    throw new Error("Method not implemented.");
  }
  async createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter> {
    throw new Error("Method not implemented.");
  }
  async getNewsletterEntries(): Promise<Newsletter[]> {
    throw new Error("Method not implemented.");
  }
}

export const storage = new Storage();