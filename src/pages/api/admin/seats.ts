import type { APIContext } from "astro";
import { z } from "zod";
import { catalogRepository } from "../../../repositories/catalog.repository";

const schema = z.object({
	itemType: z.enum(["course", "trip"]),
	itemId: z.string().min(1),
	seats: z.number().int().min(0).max(999)
});

export async function PATCH(context: APIContext): Promise<Response> {
	if (!context.locals.user || context.locals.user.role !== "ADMIN") {
		return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
	}

	const payload = await context.request.json();
	const parsed = schema.safeParse(payload);

	if (!parsed.success) {
		return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
	}

	const { itemType, itemId, seats } = parsed.data;

	if (itemType === "course") {
		catalogRepository.updateCourseSeats(itemId, seats);
	} else {
		catalogRepository.updateTripSeats(itemId, seats);
	}

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
