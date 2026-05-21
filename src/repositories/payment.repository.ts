import { db } from "../db/client";

export type PaymentRow = {
	id: string;
	booking_id: string;
	stripe_payment_intent_id: string;
	amount: number;
	status: string;
	created_at: number;
};

export class PaymentRepository {
	createPayment(bookingId: string, stripePaymentIntentId: string, amount: number, status: string) {
		const id = `pay_${crypto.randomUUID()}`;
		const createdAt = Date.now();

		db.prepare(
			"INSERT INTO payments (id, booking_id, stripe_payment_intent_id, amount, status, created_at) VALUES (?, ?, ?, ?, ?, ?)"
		).run(id, bookingId, stripePaymentIntentId, amount, status, createdAt);

		return { id };
	}

	findByUserId(userId: string): PaymentRow[] {
		return db
			.prepare(
				`SELECT p.*
				 FROM payments p
				 JOIN bookings b ON p.booking_id = b.id
				 WHERE b.user_id = ?
				 ORDER BY p.created_at DESC`
			)
			.all(userId) as PaymentRow[];
	}

	getTotalRevenue() {
		const row = db
			.prepare(
				"SELECT COALESCE(SUM(amount), 0) AS total FROM payments WHERE status IN ('paid', 'reserved')"
			)
			.get() as { total: number };
		return row.total;
	}
}

export const paymentRepository = new PaymentRepository();
