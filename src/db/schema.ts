import type Database from 'better-sqlite3';

export const createTables = (db: any) => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT NOT NULL UNIQUE,
            hashed_password TEXT NOT NULL,
            role TEXT NOT NULL DEFAULT 'USER',
            created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS sessions (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            expires_at INTEGER NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS instructors (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            bio TEXT,
            avatar_url TEXT
        );

        CREATE TABLE IF NOT EXISTS comments (
            id TEXT PRIMARY KEY,
            author TEXT NOT NULL,
            content TEXT NOT NULL,
            post_id TEXT NOT NULL,
            level TEXT NOT NULL,
            rating INTEGER NOT NULL,
            created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS courses (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            price REAL NOT NULL,
            duration INTEGER NOT NULL,
            difficulty TEXT NOT NULL,
            seats INTEGER NOT NULL,
            certification TEXT NOT NULL,
            instructor_id TEXT,
            image_url TEXT,
            next_start TEXT,
            created_at INTEGER NOT NULL,
            FOREIGN KEY (instructor_id) REFERENCES instructors(id)
        );

        CREATE TABLE IF NOT EXISTS trips (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            price REAL NOT NULL,
            duration INTEGER NOT NULL,
            seats INTEGER NOT NULL,
            destination TEXT NOT NULL,
            departure_date INTEGER NOT NULL,
            image_url TEXT,
            created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS specialties (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS bookings (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            item_id TEXT NOT NULL,
            item_type TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'pending',
            created_at INTEGER NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS payments (
            id TEXT PRIMARY KEY,
            booking_id TEXT NOT NULL,
            stripe_payment_intent_id TEXT NOT NULL UNIQUE,
            amount REAL NOT NULL,
            status TEXT NOT NULL,
            created_at INTEGER NOT NULL,
            FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS gallery (
            id TEXT PRIMARY KEY,
            image_url TEXT NOT NULL,
            title TEXT,
            created_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS notifications (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            message TEXT NOT NULL,
            is_read INTEGER NOT NULL DEFAULT 0,
            created_at INTEGER NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS page_content (
            id TEXT PRIMARY KEY,
            page TEXT NOT NULL,
            section TEXT NOT NULL,
            key TEXT NOT NULL,
            lang TEXT NOT NULL DEFAULT 'en',
            value TEXT NOT NULL,
            updated_at INTEGER NOT NULL
        );
        CREATE UNIQUE INDEX IF NOT EXISTS idx_page_content_key ON page_content(page, section, key, lang);
    `);
};
