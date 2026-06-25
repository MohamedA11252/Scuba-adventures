import type { APIRoute } from 'astro';

// TODO: Import your database client or ORM here
// example: import { db, Comments } from '../db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { author, content, postId } = data;

    if (!author || !content || !postId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Insert row into your database
    // const newComment = await db.insert(Comments).values({ author, content, postId, createdAt: new Date() });

    return new Response(
      JSON.stringify({ success: true, message: 'Comment saved successfully' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const GET: APIRoute = async () => {
  try {
    // TODO: Fetch comments from your database
    // const comments = await db.select().from(Comments);
    
    const mockComments = [
      { id: 1, author: "John Doe", content: "Test comment content", postId: "101", createdAt: new Date() }
    ];

    return new Response(
      JSON.stringify({ success: true, data: mockComments }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to fetch comments' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};