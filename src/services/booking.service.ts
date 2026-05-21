import { z } from "zod";
import { bookingRepository } from "../repositories/booking.repository";
import { paymentRepository } from "../repositories/payment.repository";
import { catalogRepository } from "../repositories/catalog.repository";
import { notificationRepository } from "../repositories/notification.repository";
import { userRepository } from "../repositories/user.repository";
import { getCourseById, getTripById } from "../lib/catalog";

const reserveSchema = z.object({
	itemType: z.enum(["course", "trip"]),
	itemId: z.string().min(1),
	lang: z.enum(["en", "pl", "ru"]).optional(),
	preferredDate: z.string().optional()
});

export class BookingService {
	async reserve(userId: string, payload: unknown) {
		const parsed = reserveSchema.safeParse(payload);
		if (!parsed.success) {
			throw new Error(parsed.error.errors.map((e) => e.message).join(", "));
		}

		const { itemType, itemId, lang = "en" } = parsed.data;
		const item = itemType === "course" ? getCourseById(itemId) : getTripById(itemId);

		if (!item) {
			throw new Error("Item not found");
		}

		if (item.seats <= 0) {
			throw new Error("No seats available");
		}

		const existing = bookingRepository.findActiveByUserAndItem(userId, itemId, itemType);
		if (existing) {
			throw new Error("You already have a confirmed booking for this item");
		}

		const booking = bookingRepository.createPendingBooking(userId, itemId, itemType);
		bookingRepository.updateStatus(booking.id, "confirmed");
		catalogRepository.decrementSeats(itemType, itemId);

		paymentRepository.createPayment(booking.id, `reservation_${booking.id}`, item.price, "reserved");

		const admin = await userRepository.findAdmin();
		if (admin) {
			notificationRepository.createNotification(
				admin.id,
				`New reservation: ${item.title} (${booking.id})`
			);
		}

		const siteUrl = (import.meta.env.PUBLIC_SITE_URL as string | undefined) ?? "http://localhost:4321";

		return {
			bookingId: booking.id,
			url: `${siteUrl}/${lang}/booking-success?booking_id=${booking.id}`
		};
	}
}

export const bookingService = new BookingService();
