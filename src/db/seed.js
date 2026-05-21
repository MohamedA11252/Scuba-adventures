import { Argon2id } from "oslo/password";
import Database from "better-sqlite3";

const db = new Database("local.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    hashed_password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'USER',
    created_at INTEGER NOT NULL
  );
`);

const adminEmail = process.env.ADMIN_EMAIL || "admin@scubaadventures.com";
const adminPassword = process.env.ADMIN_PASSWORD || "AdminPass123";

const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(adminEmail);

if (!existing) {
  const id = `admin_${crypto.randomUUID()}`;
  const hashed = await new Argon2id().hash(adminPassword);
  db.prepare(
    "INSERT INTO users (id, email, hashed_password, role, created_at) VALUES (?, ?, ?, ?, ?)"
  ).run(id, adminEmail, hashed, "ADMIN", Date.now());
  console.log(`Admin user created: ${adminEmail}`);
} else {
  console.log("Admin user already exists.");
}

process.exit(0);
