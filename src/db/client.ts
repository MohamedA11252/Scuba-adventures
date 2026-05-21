import Database from 'better-sqlite3';
import { createTables } from './schema';

const sqlite = new Database('local.db');
sqlite.pragma('foreign_keys = ON');
sqlite.pragma('journal_mode = WAL');
createTables(sqlite);

const columnExists = (db: Database.Database, table: string, column: string) => {
	const rows = db.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[];
	return rows.some((row) => row.name === column);
};

const ensureColumn = (db: Database.Database, table: string, column: string, definition: string) => {
	if (!columnExists(db, table, column)) {
		db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${definition}`);
	}
};

ensureColumn(sqlite, 'courses', 'image_url', 'TEXT');
ensureColumn(sqlite, 'courses', 'next_start', 'TEXT');
ensureColumn(sqlite, 'courses', 'short_description', 'TEXT');
ensureColumn(sqlite, 'courses', 'long_description', 'TEXT');
ensureColumn(sqlite, 'trips', 'image_url', 'TEXT');

export const db = sqlite;
