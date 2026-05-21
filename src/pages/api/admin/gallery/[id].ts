import type { APIContext } from "astro";
import { requireAdmin } from "../../../../lib/admin-auth";
import { catalogAdminService } from "../../../../services/catalog-admin.service";

export async function DELETE(context: APIContext): Promise<Response> {
	const denied = requireAdmin(context);
	if (denied) return denied;

	const { id } = context.params;
	if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });

	try {
		catalogAdminService.deleteGalleryItem(id);
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), { status: 400 });
	}
}
