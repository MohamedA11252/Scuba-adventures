import type { APIContext } from "astro";
import { requireAdmin } from "../../../lib/admin-auth";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(context: APIContext): Promise<Response> {
	const denied = requireAdmin(context);
	if (denied) return denied;

	try {
		const formData = await context.request.formData();
		const file = formData.get("file");

		if (!file || !(file instanceof File)) {
			return new Response(JSON.stringify({ error: "No file provided" }), { status: 400 });
		}

		if (!ALLOWED_TYPES.has(file.type)) {
			return new Response(JSON.stringify({ error: "Invalid file type" }), { status: 400 });
		}

		if (file.size > MAX_BYTES) {
			return new Response(JSON.stringify({ error: "File too large (max 5MB)" }), { status: 400 });
		}

		const ext = file.type.split("/")[1] === "jpeg" ? "jpg" : file.type.split("/")[1];
		const filename = `${Date.now()}-${crypto.randomUUID().slice(0, 8)}.${ext}`;
		const uploadDir = path.join(process.cwd(), "public", "uploads");

		await mkdir(uploadDir, { recursive: true });

		const buffer = Buffer.from(await file.arrayBuffer());
		await writeFile(path.join(uploadDir, filename), buffer);

		const url = `/uploads/${filename}`;
		return new Response(JSON.stringify({ url }), { status: 201 });
	} catch (error: any) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
}
