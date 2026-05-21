import { catalogRepository } from "../repositories/catalog.repository";
import { courses as mockCourses, trips as mockTrips, specialties as mockSpecialties, galleryImages as mockGallery } from "./mock-data";
import { courseImage, tripImage, SCUBA_IMAGES } from "./scuba-images";

export type Course = {
	id: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	difficulty: string;
	price: number;
	durationDays: number;
	seats: number;
	certification: string;
	instructor: string;
	nextStart: string;
	image: string;
	images: string[];
	equipment?: string;
	requirements?: string;
	includes?: string[];
	excludes?: string[];
};

export type Trip = {
	id: string;
	title: string;
	description: string;
	price: number;
	durationDays: number;
	seats: number;
	destination: string;
	departureDate: string;
	image: string;
};

const mapCourse = (row: ReturnType<typeof catalogRepository.findAllCourses>[number]): Course => ({
	id: row.id,
	title: row.title,
	shortDescription: row.short_description ?? row.description,
	longDescription: row.long_description ?? row.description,
	difficulty: row.difficulty,
	price: row.price,
	durationDays: row.duration,
	seats: row.seats,
	certification: row.certification,
	instructor: row.instructor_name ?? "Staff Instructor",
	nextStart: row.next_start ?? "TBA",
	image: row.image_url?.startsWith("/") ? row.image_url : courseImage(row.id),
	images: row.image_url?.startsWith("/") ? [row.image_url] : [courseImage(row.id)]
});

const mapTrip = (row: ReturnType<typeof catalogRepository.findAllTrips>[number]): Trip => ({
	id: row.id,
	title: row.title,
	description: row.description,
	price: row.price,
	durationDays: row.duration,
	seats: row.seats,
	destination: row.destination,
	departureDate: new Date(row.departure_date).toISOString().slice(0, 10),
	image: row.image_url?.startsWith("/") ? row.image_url : tripImage(row.id)
});

export const getCourses = (): Course[] => {
	const rows = catalogRepository.findAllCourses();
	if (rows.length === 0) return mockCourses;
	return rows.map(mapCourse);
};

export const getCourseById = (id: string): Course | undefined => {
	const row = catalogRepository.findCourseById(id);
	if (row) return mapCourse(row);
	return mockCourses.find((c) => c.id === id);
};

export const getTrips = (): Trip[] => {
	const rows = catalogRepository.findAllTrips();
	if (rows.length === 0) return mockTrips;
	return rows.map(mapTrip);
};

export const getTripById = (id: string): Trip | undefined => {
	const row = catalogRepository.findTripById(id);
	if (row) return mapTrip(row);
	return mockTrips.find((t) => t.id === id);
};

export const getSpecialties = () => {
	const rows = catalogRepository.findAllSpecialties();
	if (rows.length === 0) return mockSpecialties;
	return rows;
};

export const getGalleryImages = (): string[] => {
	const rows = catalogRepository.findAllGallery();
	if (rows.length === 0) return mockGallery;
	return rows.map((r) => (r.image_url.startsWith("/") ? r.image_url : r.image_url));
};

export const getHeroImage = () => SCUBA_IMAGES.hero;
