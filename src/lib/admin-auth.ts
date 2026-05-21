import type { APIContext } from "astro";

export const requireAdmin = (context: APIContext) => {
	if (!context.locals.user || context.locals.user.role !== "ADMIN") {
		return new Response(JSON.stringify({ error: "Forbidden" }), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
	}
	return null;
};
