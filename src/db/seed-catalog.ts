import Database from 'better-sqlite3';
import { createTables } from './schema';
import { courses as mockCourses, specialties as mockSpecialties } from '../lib/mock-data';

const db = new Database('local.db');
db.pragma('foreign_keys = ON');
createTables(db);

const existingCourses = db.prepare('SELECT COUNT(*) AS count FROM courses').get() as { count: number };
if (existingCourses.count === 0 || existingCourses.count !== mockCourses.length) {
	if (existingCourses.count > 0) {
		db.prepare('DELETE FROM courses').run();
		console.log(`Cleared ${existingCourses.count} existing courses`);
	}

	const insert = db.prepare(
		`INSERT INTO courses (id, title, description, short_description, long_description, price, duration, difficulty, seats, certification, instructor_id, image_url, next_start, created_at)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
	);

	for (const c of mockCourses) {
		insert.run(
			c.id,
			c.title,
			c.shortDescription,
			c.shortDescription,
			c.longDescription ?? c.shortDescription,
			c.price,
			c.durationDays,
			c.difficulty,
			c.seats,
			c.certification,
			null,
			c.image,
			c.nextStart ?? null,
			Date.now()
		);
	}
	console.log(`Seeded ${mockCourses.length} courses`);
} else {
	console.log(`Courses table already has ${existingCourses.count} rows, skipping`);
}

const existingSpecialties = db.prepare('SELECT COUNT(*) AS count FROM specialties').get() as { count: number };
if (existingSpecialties.count === 0 || existingSpecialties.count !== mockSpecialties.length) {
	if (existingSpecialties.count > 0) {
		db.prepare('DELETE FROM specialties').run();
		console.log(`Cleared ${existingSpecialties.count} existing specialties`);
	}

	const insert = db.prepare(
		'INSERT INTO specialties (id, title, description) VALUES (?, ?, ?)'
	);

	for (const s of mockSpecialties) {
		insert.run(s.id, s.title, s.shortDescription ?? s.longDescription ?? s.title);
	}
	console.log(`Seeded ${mockSpecialties.length} specialties`);
} else {
	console.log(`Specialties table already has ${existingSpecialties.count} rows, skipping`);
}

db.close();
