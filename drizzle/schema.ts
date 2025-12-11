import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Tabella per raccogliere i dati dei docenti che usano il calcolatore GPS
 * Nessuna autenticazione richiesta - solo raccolta lead per contatto
 */
export const gpsLeads = mysqlTable("gps_leads", {
  id: int("id").autoincrement().primaryKey(),
  
  // Dati personali
  nome: varchar("nome", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  cellulare: varchar("cellulare", { length: 20 }).notNull(),
  
  // Dati GPS
  classeConcorso: varchar("classe_concorso", { length: 50 }).notNull(),
  votoLaurea: int("voto_laurea").notNull(),
  lode: int("lode").default(0).notNull(), // 0 = no, 1 = sì
  
  // Titoli culturali
  numC2: int("num_c2").default(0).notNull(),
  numClil: int("num_clil").default(0).notNull(),
  numBiannale: int("num_biannale").default(0).notNull(),
  certificazioniInformatiche: int("certificazioni_informatiche").default(0).notNull(), // 0 = no, 1 = sì
  
  // Punteggio calcolato
  punteggioLaurea: decimal("punteggio_laurea", { precision: 5, scale: 2 }).notNull(),
  punteggioTitoli: decimal("punteggio_titoli", { precision: 5, scale: 2 }).notNull(),
  punteggioTotale: decimal("punteggio_totale", { precision: 5, scale: 2 }).notNull(),
  
  // Metadata
  createdAt: timestamp("created_at").defaultNow().notNull(),
  ipAddress: varchar("ip_address", { length: 45 }), // IPv4 o IPv6
  userAgent: text("user_agent"),
});

export type GpsLead = typeof gpsLeads.$inferSelect;
export type InsertGpsLead = typeof gpsLeads.$inferInsert;