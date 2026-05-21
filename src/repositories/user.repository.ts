import { db } from '../db/client';
import type { User } from '../types';

const mapUser = (row: any): User => ({
    id: row.id,
    email: row.email,
    hashedPassword: row.hashed_password,
    role: row.role,
    createdAt: new Date(row.created_at),
});

export class UserRepository {
    async findByEmail(email: string): Promise<User | undefined> {
        const row = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
        return row ? mapUser(row) : undefined;
    }

    async findById(id: string): Promise<User | undefined> {
        const row = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
        return row ? mapUser(row) : undefined;
    }

    async findAdmin(): Promise<User | undefined> {
        const row = db.prepare("SELECT * FROM users WHERE role = 'ADMIN' LIMIT 1").get();
        return row ? mapUser(row) : undefined;
    }

    async create(user: Omit<User, 'createdAt'>): Promise<User> {
        const createdAt = Date.now();
        db.prepare(
            'INSERT INTO users (id, email, hashed_password, role, created_at) VALUES (?, ?, ?, ?, ?)'
        ).run(user.id, user.email, user.hashedPassword, user.role, createdAt);

        return {
            ...user,
            createdAt: new Date(createdAt),
        };
    }

    findAll(limit = 10) {
        return db
            .prepare('SELECT id, email, role, created_at FROM users ORDER BY created_at DESC LIMIT ?')
            .all(limit) as { id: string; email: string; role: string; created_at: number }[];
    }

    countAll() {
        return (db.prepare('SELECT COUNT(*) AS count FROM users').get() as { count: number }).count;
    }

    updateProfile(userId: string, data: { email?: string; displayName?: string }) {
        if (data.email) {
            db.prepare('UPDATE users SET email = ? WHERE id = ?').run(data.email, userId);
        }
    }
}

export const userRepository = new UserRepository();
