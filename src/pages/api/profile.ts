import type { APIContext } from "astro";
import { z } from "zod";
import { userRepository } from "../../repositories/user.repository";

const profileSchema = z.object({
	displayName: z.string().min(1).max(80).optional(),
	email: z.string().email().optional()
});

export async function PATCH(context: APIContext): Promise<Response> {
	if (!context.locals.user) {
		return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
	}

	const payload = await context.request.json();
	const parsed = profileSchema.safeParse(payload);

	if (!parsed.success) {
		return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
	}

	const { displayName, email } = parsed.data;

	if (email) {
		const existing = await userRepository.findByEmail(email);
		if (existing && existing.id !== context.locals.user.id) {
			return new Response(JSON.stringify({ error: "Email already in use" }), { status: 400 });
		}
	}

	userRepository.updateProfile(context.locals.user.id, { email, displayName });

	return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
