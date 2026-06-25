import { createClient } from '@libsql/client';
import { Argon2id } from 'oslo/password';
import { courses as mockCourses, specialties as mockSpecialties } from '../lib/scuba-images.js';

const TURSO_DB_URL = process.env.TURSO_DB_URL;
const TURSO_DB_TOKEN = process.env.TURSO_DB_TOKEN;

if (!TURSO_DB_URL || !TURSO_DB_TOKEN) {
  console.error('ERROR: TURSO_DB_URL and TURSO_DB_TOKEN must be set');
  process.exit(1);
}

const turso = createClient({ url: TURSO_DB_URL, authToken: TURSO_DB_TOKEN });

// Create tables
const tables = [
  `CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY, email TEXT NOT NULL UNIQUE, hashed_password TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'USER', created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY, user_id TEXT NOT NULL, expires_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`,
  `CREATE TABLE IF NOT EXISTS instructors (
    id TEXT PRIMARY KEY, name TEXT NOT NULL, bio TEXT, avatar_url TEXT
  )`,
  `CREATE TABLE IF NOT EXISTS comments (
    id TEXT PRIMARY KEY,
    author TEXT NOT NULL,
    content TEXT NOT NULL,
    post_id TEXT NOT NULL,
    created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL,
    short_description TEXT, long_description TEXT, price REAL NOT NULL, duration INTEGER NOT NULL,
    difficulty TEXT NOT NULL, seats INTEGER NOT NULL, certification TEXT NOT NULL,
    instructor_id TEXT, image_url TEXT, next_start TEXT, created_at INTEGER NOT NULL,
    FOREIGN KEY (instructor_id) REFERENCES instructors(id)
  )`,
  `CREATE TABLE IF NOT EXISTS trips (
    id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL,
    price REAL NOT NULL, duration INTEGER NOT NULL, seats INTEGER NOT NULL,
    destination TEXT NOT NULL, departure_date INTEGER NOT NULL, image_url TEXT, created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS specialties (
    id TEXT PRIMARY KEY, title TEXT NOT NULL, description TEXT NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS bookings (
    id TEXT PRIMARY KEY, user_id TEXT NOT NULL, item_id TEXT NOT NULL, item_type TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending', created_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`,
  `CREATE TABLE IF NOT EXISTS payments (
    id TEXT PRIMARY KEY, booking_id TEXT NOT NULL, stripe_payment_intent_id TEXT NOT NULL UNIQUE,
    amount REAL NOT NULL, status TEXT NOT NULL, created_at INTEGER NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
  )`,
  `CREATE TABLE IF NOT EXISTS gallery (
    id TEXT PRIMARY KEY, image_url TEXT NOT NULL, title TEXT, created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY, user_id TEXT NOT NULL, message TEXT NOT NULL,
    is_read INTEGER NOT NULL DEFAULT 0, created_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`,
];

for (const sql of tables) {
  await turso.execute(sql);
}
console.log('Tables ready');

// Seed admin user
const adminEmail = process.env.ADMIN_EMAIL || 'admin@scubaadventures.com';
const adminPassword = process.env.ADMIN_PASSWORD || 'AdminPass123';

const existing = await turso.execute({
  sql: 'SELECT id FROM users WHERE email = ?',
  args: [adminEmail],
});

if (existing.rows.length === 0) {
  const id = `admin_${crypto.randomUUID()}`;
  const hashed = await new Argon2id().hash(adminPassword);
  await turso.execute({
    sql: 'INSERT INTO users (id, email, hashed_password, role, created_at) VALUES (?, ?, ?, ?, ?)',
    args: [id, adminEmail, hashed, 'ADMIN', Date.now()],
  });
  console.log(`Admin user created: ${adminEmail}`);
} else {
  console.log('Admin user already exists');
}

// Seed courses
const courseCount = await turso.execute('SELECT COUNT(*) AS count FROM courses');
const existingCourses = Number(courseCount.rows[0]?.count ?? 0);

if (existingCourses === 0) {
  for (const c of mockCourses) {
    await turso.execute({
      sql: `INSERT INTO courses (id, title, description, short_description, long_description, price, duration, difficulty, seats, certification, instructor_id, image_url, next_start, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [c.id, c.title, c.shortDescription, c.shortDescription, c.longDescription ?? c.shortDescription, c.price, c.durationDays, c.difficulty, c.seats, c.certification, null, c.image, c.nextStart ?? null, Date.now()],
    });
  }
  console.log(`Seeded ${mockCourses.length} courses`);
} else {
  console.log(`Courses table already has ${existingCourses} rows, skipping`);
}

// Seed specialties
const specCount = await turso.execute('SELECT COUNT(*) AS count FROM specialties');
const existingSpecs = Number(specCount.rows[0]?.count ?? 0);

if (existingSpecs === 0) {
  for (const s of mockSpecialties) {
    await turso.execute({
      sql: 'INSERT INTO specialties (id, title, description) VALUES (?, ?, ?)',
      args: [s.id, s.title, s.shortDescription ?? s.longDescription ?? s.title],
    });
  }
  console.log(`Seeded ${mockSpecialties.length} specialties`);
} else {
  console.log(`Specialties table already has ${existingSpecs} rows, skipping`);
}

console.log('All done!');
process.exit(0);