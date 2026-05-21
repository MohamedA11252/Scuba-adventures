import { db } from "../db/client";

export type BookingStatus = "pending" | "confirmed" | "cancelled";

export type BookingRow = {
	id: string;
	user_id: string;
	item_id: string;
	item_type: string;
	status: BookingStatus;
	created_at: number;
	user_email?: string;
};

export class BookingRepository {
	createPendingBooking(userId: string, itemId: string, itemType: "course" | "trip") {
		const id = `booking_${crypto.randomUUID()}`;
		const createdAt = Date.now();

		db.prepare(
			"INSERT INTO bookings (id, user_id, item_id, item_type, status, created_at) VALUES (?, ?, ?, ?, ?, ?)"
		).run(id, userId, itemId, itemType, "pending", createdAt);

		return { id, userId, itemId, itemType, status: "pending" as BookingStatus };
	}

	updateStatus(bookingId: string, status: BookingStatus) {
		db.prepare("UPDATE bookings SET status = ? WHERE id = ?").run(status, bookingId);
	}

	findActiveByUserAndItem(userId: string, itemId: string, itemType: string) {
		return db
			.prepare(
				`SELECT * FROM bookings
				 WHERE user_id = ? AND item_id = ? AND item_type = ? AND status = 'confirmed'
				 LIMIT 1`
			)
			.get(userId, itemId, itemType) as BookingRow | undefined;
	}

	findByUserId(userId: string): BookingRow[] {
		return db
			.prepare("SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC")
			.all(userId) as BookingRow[];
	}

	findAllWithUsers(): BookingRow[] {
		return db
			.prepare(
				`SELECT b.*, u.email AS user_email
				 FROM bookings b
				 JOIN users u ON b.user_id = u.id
				 ORDER BY b.created_at DESC
				 LIMIT 20`
			)
			.all() as BookingRow[];
	}

	countAll() {
		return (db.prepare("SELECT COUNT(*) AS count FROM bookings").get() as { count: number }).count;
	}

	countConfirmed() {
		return (
			db.prepare("SELECT COUNT(*) AS count FROM bookings WHERE status = 'confirmed'").get() as {
				count: number;
			}
		).count;
	}
}

export const bookingRepository = new BookingRepository();
