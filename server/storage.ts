import pg from 'pg';
const { Pool } = pg;
import type { User, InsertUser, Waitlist, InsertWaitlist, Contact, InsertContact, Newsletter, InsertNewsletter } from '@shared/schema';

class Storage {
  private pool: Pool;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is required');
    }

    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10
    });
  }

  async createContactEntry(entry: InsertContact): Promise<Contact> {
    const result = await this.pool.query(
      'INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [entry.name, entry.email, entry.phone, entry.subject, entry.message]
    );
    return result.rows[0];
  }

  async getContactEntries(): Promise<Contact[]> {
    const result = await this.pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return result.rows;
  }

  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const result = await this.pool.query(
      'INSERT INTO waitlist (name, email, company, interest) VALUES ($1, $2, $3, $4) RETURNING *',
      [entry.name, entry.email, entry.company, entry.interest]
    );
    return result.rows[0];
  }

  async getWaitlistEntries(): Promise<Waitlist[]> {
    const result = await this.pool.query('SELECT * FROM waitlist ORDER BY created_at DESC');
    return result.rows;
  }

  async createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter> {
    const result = await this.pool.query(
      'INSERT INTO newsletter (email) VALUES ($1) RETURNING *',
      [entry.email]
    );
    return result.rows[0];
  }

  async getNewsletterEntries(): Promise<Newsletter[]> {
    const result = await this.pool.query('SELECT * FROM newsletter ORDER BY created_at DESC');
    return result.rows;
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await this.pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [user.username, user.password]
    );
    return result.rows[0];
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
  }
}

export const storage = new Storage();

import {
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  newsletter, type Newsletter, type InsertNewsletter,
  type Contact, type InsertContact
} from "@shared/schema";

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
  private newsletterEntries: Map<number, Newsletter>;

  currentUserId: number;
  currentWaitlistId: number;
  currentNewsletterId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.newsletterEntries = new Map();

    this.currentUserId = 1;
    this.currentWaitlistId = 1;
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
  async createContactEntry(entry: InsertContact): Promise<Contact> {
    throw new Error("Method not implemented.");
  }
  async getContactEntries(): Promise<Contact[]> {
    throw new Error("Method not implemented.");
  }
}