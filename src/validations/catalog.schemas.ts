import { z } from "zod";

export const courseSchema = z.object({
	id: z.string().min(1).optional(),
	title: z.string().min(2),
	description: z.string().min(10),
	shortDescription: z.string().min(10).optional(),
	longDescription: z.string().min(10).optional(),
	price: z.number().positive(),
	duration: z.number().int().positive(),
	difficulty: z.string().min(2),
	seats: z.number().int().min(0),
	certification: z.enum(["PADI", "SSI"]),
	instructorId: z.string().optional().nullable(),
	imageUrl: z.string().optional(),
	nextStart: z.string().optional()
});

export const tripSchema = z.object({
	id: z.string().min(1).optional(),
	title: z.string().min(2),
	description: z.string().min(10),
	price: z.number().positive(),
	duration: z.number().int().positive(),
	seats: z.number().int().min(0),
	destination: z.string().min(2),
	departureDate: z.string().min(1),
	imageUrl: z.string().optional()
});

export const specialtySchema = z.object({
	id: z.string().min(1).optional(),
	title: z.string().min(2),
	description: z.string().min(10)
});

export const gallerySchema = z.object({
	id: z.string().min(1).optional(),
	imageUrl: z.string().min(1),
	title: z.string().optional()
});
