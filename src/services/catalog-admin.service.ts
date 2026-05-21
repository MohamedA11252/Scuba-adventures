import { catalogRepository } from "../repositories/catalog.repository";
import { courseSchema, tripSchema, specialtySchema, gallerySchema } from "../validations/catalog.schemas";

const slugId = (prefix: string, title: string) =>
	`${prefix}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${crypto.randomUUID().slice(0, 6)}`;

export class CatalogAdminService {
	getInstructors() {
		return catalogRepository.findAllInstructors();
	}

	createCourse(payload: unknown) {
		const parsed = courseSchema.safeParse(payload);
		if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

		const data = parsed.data;
		const id = data.id ?? slugId("course", data.title);

		catalogRepository.createCourse({
			id,
			title: data.title,
			description: data.description,
			short_description: data.shortDescription ?? null,
			long_description: data.longDescription ?? null,
			price: data.price,
			duration: data.duration,
			difficulty: data.difficulty,
			seats: data.seats,
			certification: data.certification,
			instructor_id: data.instructorId ?? null,
			image_url: data.imageUrl || null,
			next_start: data.nextStart ?? null
		});

		return { id };
	}

	updateCourse(id: string, payload: unknown) {
		const parsed = courseSchema.partial().safeParse(payload);
		if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

		const data = parsed.data;
		catalogRepository.updateCourse(id, {
			title: data.title,
			description: data.description,
			short_description: data.shortDescription,
			long_description: data.longDescription,
			price: data.price,
			duration: data.duration,
			difficulty: data.difficulty,
			seats: data.seats,
			certification: data.certification,
			instructor_id: data.instructorId,
			image_url: data.imageUrl === "" ? null : data.imageUrl,
			next_start: data.nextStart
		});

		return { id };
	}

	deleteCourse(id: string) {
		catalogRepository.deleteCourse(id);
	}

	createTrip(payload: unknown) {
		const parsed = tripSchema.safeParse(payload);
		if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

		const data = parsed.data;
		const id = data.id ?? slugId("trip", data.title);

		catalogRepository.createTrip({
			id,
			title: data.title,
			description: data.description,
			price: data.price,
			duration: data.duration,
			seats: data.seats,
			destination: data.destination,
			departure_date: Date.parse(data.departureDate),
			image_url: data.imageUrl || null
		});

		return { id };
	}

	updateTrip(id: string, payload: unknown) {
		const parsed = tripSchema.partial().safeParse(payload);
		if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

		const data = parsed.data;
		catalogRepository.updateTrip(id, {
			title: data.title,
			description: data.description,
			price: data.price,
			duration: data.duration,
			seats: data.seats,
			destination: data.destination,
			departure_date: data.departureDate ? Date.parse(data.departureDate) : undefined,
			image_url: data.imageUrl === "" ? null : data.imageUrl
		});

		return { id };
	}

	deleteTrip(id: string) {
		catalogRepository.deleteTrip(id);
	}

	createSpecialty(payload: unknown) {
		const parsed = specialtySchema.safeParse(payload);
		if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

		const data = parsed.data;
		const id = data.id ?? slugId("spec", data.title);

		catalogRepository.createSpecialty({
			id,
			title: data.title,
			description: data.description
		});

		return { id };
	}

	updateSpecialty(id: string, payload: unknown) {
		const parsed = specialtySchema.partial().safeParse(payload);
		if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

		if (!parsed.data.title || !parsed.data.description) {
			throw new Error("Title and description are required");
		}

		catalogRepository.updateSpecialty(id, parsed.data.title, parsed.data.description);
		return { id };
	}

	deleteSpecialty(id: string) {
		catalogRepository.deleteSpecialty(id);
	}

	createGalleryItem(payload: unknown) {
		const parsed = gallerySchema.safeParse(payload);
		if (!parsed.success) throw new Error(parsed.error.errors.map((e) => e.message).join(", "));

		const data = parsed.data;
		const id = data.id ?? `gallery-${crypto.randomUUID().slice(0, 8)}`;

		catalogRepository.createGalleryItem({
			id,
			image_url: data.imageUrl,
			title: data.title ?? null
		});

		return { id };
	}

	deleteGalleryItem(id: string) {
		catalogRepository.deleteGalleryItem(id);
	}
}

export const catalogAdminService = new CatalogAdminService();
