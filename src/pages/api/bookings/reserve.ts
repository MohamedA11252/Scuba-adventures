import type { APIContext } from "astro";
import { bookingService } from "../../../services/booking.service";

export async function POST(context: APIContext): Promise<Response> {
	if (!context.locals.user) {
		return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" }
		});
	}

	const payload = await context.request.json();

	try {
		const result = await bookingService.reserve(context.locals.user.id, payload);
		return new Response(JSON.stringify(result), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
}
