import { bookingRepository } from "../repositories/booking.repository";
import { paymentRepository } from "../repositories/payment.repository";
import { userRepository } from "../repositories/user.repository";
import { catalogRepository } from "../repositories/catalog.repository";
import { getCourseById, getTripById } from "../lib/catalog";

export class DashboardService {
	getUserDashboard(userId: string) {
		const bookings = bookingRepository.findByUserId(userId);
		const payments = paymentRepository.findByUserId(userId);

		const upcomingTrips = bookings
			.filter((b) => b.item_type === "trip" && b.status === "confirmed")
			.map((b) => {
				const trip = getTripById(b.item_id);
				return trip ? { title: trip.title, date: trip.departureDate, destination: trip.destination } : null;
			})
			.filter(Boolean);

		const purchasedCourses = bookings
			.filter((b) => b.item_type === "course" && b.status === "confirmed")
			.map((b) => getCourseById(b.item_id)?.title)
			.filter(Boolean);

		return {
			bookings,
			upcomingTrips,
			purchasedCourses,
			payments: payments.map((p) => ({
				amount: p.amount,
				status: p.status,
				date: new Date(p.created_at).toLocaleDateString()
			})),
			certifications: purchasedCourses.length
				? purchasedCourses.map((title) => ({ title, year: new Date().getFullYear() }))
				: [{ title: "No certifications yet", year: null }]
		};
	}

	getAdminDashboard() {
		const courses = catalogRepository.findAllCourses();
		const trips = catalogRepository.findAllTrips();
		const bookings = bookingRepository.findAllWithUsers();
		const users = userRepository.findAll(10);
		const specialties = catalogRepository.findAllSpecialties();
		const gallery = catalogRepository.findAllGallery();
		const instructors = catalogRepository.findAllInstructors();

		return {
			stats: {
				totalBookings: bookingRepository.countAll(),
				confirmedBookings: bookingRepository.countConfirmed(),
				activeCourses: catalogRepository.countCourses(),
				revenue: paymentRepository.getTotalRevenue(),
				totalUsers: userRepository.countAll(),
				specialties: specialties.length,
				galleryImages: gallery.length
			},
			courses,
			trips,
			bookings,
			users,
			specialties,
			gallery,
			instructors
		};
	}
}

export const dashboardService = new DashboardService();
