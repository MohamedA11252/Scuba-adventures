import Database from 'better-sqlite3';
import { createClient } from '@libsql/client';
import { createTables } from './schema';
import path from 'path';
import os from 'os';

const TURSO_DB_URL = process.env.TURSO_DB_URL || '';
const TURSO_DB_TOKEN = process.env.TURSO_DB_TOKEN || '';
const isVercel = process.env.VERCEL === '1';

// ---- Local better-sqlite3 (sync) ----
let localDb: Database.Database | null = null;
if (!TURSO_DB_URL) {
  const dbPath = isVercel ? path.join(os.tmpdir(), 'local.db') : 'local.db';
  try {
    localDb = new Database(dbPath);
    localDb.pragma('foreign_keys = ON');
    localDb.pragma('journal_mode = WAL');
    createTables(localDb);

    const columnExists = (db: Database.Database, table: string, column: string) => {
      const rows = db.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[];
      return rows.some((row) => row.name === column);
    };
    const ensureColumn = (db: Database.Database, table: string, column: string, definition: string) => {
      if (!columnExists(db, table, column)) {
        db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
      }
    };
    ensureColumn(localDb, 'courses', 'image_url', 'TEXT');
    ensureColumn(localDb, 'courses', 'next_start', 'TEXT');
    ensureColumn(localDb, 'courses', 'short_description', 'TEXT');
    ensureColumn(localDb, 'courses', 'long_description', 'TEXT');
    ensureColumn(localDb, 'trips', 'image_url', 'TEXT');
  } catch {
    localDb = null;
  }
}

// ---- Turso (async) ----
let tursoClient: ReturnType<typeof createClient> | null = null;
if (TURSO_DB_URL) {
  try {
    tursoClient = createClient({ url: TURSO_DB_URL, authToken: TURSO_DB_TOKEN });
  } catch {
    tursoClient = null;
  }
}

const isTurso = !!tursoClient;
const isLocal = !!localDb;

// ---- Ensure Turso tables exist ----
if (tursoClient) {
  (async () => {
    try {
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE, hashed_password TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'USER', created_at INTEGER NOT NULL
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY, user_id TEXT NOT NULL, expires_at INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS instructors (
        id TEXT PRIMARY KEY, name TEXT NOT NULL, bio TEXT, avatar_url TEXT
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS courses (
        id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL,
        short_description TEXT, long_description TEXT, price REAL NOT NULL, duration INTEGER NOT NULL,
        difficulty TEXT NOT NULL, seats INTEGER NOT NULL, certification TEXT NOT NULL,
        instructor_id TEXT, image_url TEXT, next_start TEXT, created_at INTEGER NOT NULL,
        FOREIGN KEY (instructor_id) REFERENCES instructors(id)
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS trips (
        id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL,
        price REAL NOT NULL, duration INTEGER NOT NULL, seats INTEGER NOT NULL,
        destination TEXT NOT NULL, departure_date INTEGER NOT NULL, image_url TEXT, created_at INTEGER NOT NULL
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS specialties (
        id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS bookings (
        id TEXT PRIMARY KEY, user_id TEXT NOT NULL, item_id TEXT NOT NULL, item_type TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending', created_at INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS payments (
        id TEXT PRIMARY KEY, booking_id TEXT NOT NULL, stripe_payment_intent_id TEXT NOT NULL UNIQUE,
        amount REAL NOT NULL, status TEXT NOT NULL, created_at INTEGER NOT NULL,
        FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS gallery (
        id TEXT PRIMARY KEY, image_url TEXT NOT NULL, title TEXT, created_at INTEGER NOT NULL
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS notifications (
        id TEXT PRIMARY KEY, user_id TEXT NOT NULL, message TEXT NOT NULL,
        is_read INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )`);
      await tursoClient!.execute(`CREATE TABLE IF NOT EXISTS page_content (
        id TEXT PRIMARY KEY, page TEXT NOT NULL, section TEXT NOT NULL,
        key TEXT NOT NULL, lang TEXT NOT NULL DEFAULT 'en', value TEXT NOT NULL,
        updated_at INTEGER NOT NULL
      )`);
      await tursoClient!.execute(`CREATE UNIQUE INDEX IF NOT EXISTS idx_page_content_key ON page_content(page, section, key, lang)`);
      await tursoClient!.execute(`
        CREATE TABLE IF NOT EXISTS comments (
        id TEXT PRIMARY KEY,
        author TEXT NOT NULL,
        content TEXT NOT NULL,
        post_id TEXT NOT NULL,
        level TEXT NOT NULL,
        rating INTEGER NOT NULL,
        created_at INTEGER NOT NULL
     )`);
    } catch {}
  })();
}

// ---- Exports ----
export const db = localDb;
export { tursoClient, isTurso };
export const isDbAvailable = isTurso || isLocal;

export async function dbAll<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<T[]> {
  if (tursoClient) {
    const rs = await tursoClient.execute({ sql, args: (params ?? []) as any });
    return rs.rows as unknown as T[];
  }
  if (localDb) {
    return (params ? localDb.prepare(sql).all(...params) : localDb.prepare(sql).all()) as T[];
  }
  return [];
}

export async function dbGet<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<T | null> {
  if (tursoClient) {
    const rs = await tursoClient.execute({ sql, args: (params ?? []) as any });
    return (rs.rows[0] as unknown as T) ?? null;
  }
  if (localDb) {
    return (params ? localDb.prepare(sql).get(...params) : localDb.prepare(sql).get()) as T | null;
  }
  return null;
}

export async function dbRun(sql: string, params?: unknown[]): Promise<{ changes: number; lastInsertRowid: number | bigint | null }> {
  if (tursoClient) {
    const rs = await tursoClient.execute({ sql, args: (params ?? []) as any });
    return { changes: Number(rs.rowsAffected), lastInsertRowid: null };
  }
  if (localDb) {
    const info = params ? localDb.prepare(sql).run(...params) : localDb.prepare(sql).run();
    return { changes: info.changes, lastInsertRowid: info.lastInsertRowid };
  }
  return { changes: 0, lastInsertRowid: null };
}