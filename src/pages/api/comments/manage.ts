import type { APIContext } from "astro";
import { dbRun, dbGet } from "../../../db/client";

export async function POST(context: APIContext): Promise<Response> {
  if (!context.locals.user || context.locals.user.role !== "ADMIN") {
    return new Response(JSON.stringify({ error: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const payload = await context.request.json();
    const { action, commentId } = payload;

    if (!commentId || !action) {
      return new Response(JSON.stringify({ error: "Missing action or commentId" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (action === "toggle-feature") {
      const row = await dbGet<{ featured: number }>("SELECT featured FROM comments WHERE id = ?", [commentId]);
      if (!row) {
        return new Response(JSON.stringify({ error: "Comment not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }
      const newValue = row.featured ? 0 : 1;
      await dbRun("UPDATE comments SET featured = ? WHERE id = ?", [newValue, commentId]);
      return new Response(JSON.stringify({ ok: true, featured: newValue }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (action === "delete") {
      await dbRun("DELETE FROM comments WHERE id = ?", [commentId]);
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
