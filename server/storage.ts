import mysql from 'mysql2/promise';
import type { User, InsertUser, Waitlist, InsertWaitlist, Contact, InsertContact, Newsletter, InsertNewsletter } from '@shared/schema';

class Storage {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      host: process.env.MYSQL_HOST || '132.148.103.60',
      user: process.env.MYSQL_USER || 'User1',
      password: process.env.MYSQL_PASSWORD || 'Contactform@2025',
      database: process.env.MYSQL_DATABASE || 'Contactform',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  async createContactEntry(entry: InsertContact): Promise<Contact> {
    const [result] = await this.pool.execute(
      'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [entry.name, entry.email, entry.phone, entry.subject, entry.message]
    );
    return { ...entry, id: (result as any).insertId, created_at: new Date() };
  }

  async getContactEntries(): Promise<Contact[]> {
    const [rows] = await this.pool.execute('SELECT * FROM contacts ORDER BY created_at DESC');
    return rows as Contact[];
  }

  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const [result] = await this.pool.execute(
      'INSERT INTO waitlist (name, email, company, interest) VALUES (?, ?, ?, ?)',
      [entry.name, entry.email, entry.company, entry.interest]
    );
    return { ...entry, id: (result as any).insertId, created_at: new Date() };
  }

  async getWaitlistEntries(): Promise<Waitlist[]> {
    const [rows] = await this.pool.execute('SELECT * FROM waitlist ORDER BY created_at DESC');
    return rows as Waitlist[];
  }

  async createNewsletterEntry(entry: InsertNewsletter): Promise<Newsletter> {
    const [result] = await this.pool.execute(
      'INSERT INTO newsletter (email) VALUES (?)',
      [entry.email]
    );
    return { ...entry, id: (result as any).insertId, created_at: new Date() };
  }

  async getNewsletterEntries(): Promise<Newsletter[]> {
    const [rows] = await this.pool.execute('SELECT * FROM newsletter ORDER BY created_at DESC');
    return rows as Newsletter[];
  }

  async createUser(user: InsertUser): Promise<User> {
    const [result] = await this.pool.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [user.username, user.password]
    );
    return { ...user, id: (result as any).insertId };
  }

  async getUser(id: number): Promise<User | undefined> {
    const [rows] = await this.pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return (rows as User[])[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [rows] = await this.pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    return (rows as User[])[0];
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