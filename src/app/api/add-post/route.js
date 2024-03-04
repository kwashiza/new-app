import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('Username');
  const post = searchParams.get('Post');

  try {
    if (!username || !post) throw new Error('Username and message required');
    await sql`INSERT INTO comment (Username, Post) VALUES (${username}, ${post});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  };

  const comment  = await sql`SELECT * FROM comment;`;
  return NextResponse.json({ comment }, { status: 200 });
}