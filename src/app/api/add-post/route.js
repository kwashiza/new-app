import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('Username');
  const post = searchParams.get('Post');

  try {
    if (!username || !post) throw new Error('Username and message required');
    await sql`INSERT INTO new-app (Username, Post) VALUES (${username}, ${post});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  };

  const 'new app' = await sql`SELECT * FROM new-a;p;`;
  return NextResponse.json({ new-app }, { status: 200 });
}