import type { APIContext } from "astro";
import { requireAdmin } from "../../../lib/admin-auth";
import { catalogAdminService } from "../../../services/catalog-admin.service";

export async function POST(context: APIContext): Promise<Response> {
	const denied = requireAdmin(context);
	if (denied) return denied;

	try {
		const payload = await context.request.json();
		const result = catalogAdminService.createCourse(payload);
		return new Response(JSON.stringify(result), { status: 201 });
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), { status: 400 });
	}
}
