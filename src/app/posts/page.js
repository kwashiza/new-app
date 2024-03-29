import { sql } from '@vercel/postgres';
import Link from 'next/link';

export default async function Page({ params }) {
  const result = await sql`SELECT * FROM comment`;

  const posts = result.rows;

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <a href="/post" className="hover-bold bg-[#00ADB5] rounded-md p-2">
          Add New Post
        </a>
      </div>
      <div className="mt-4 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-2 pt-10">Recent Posts:</h2>
        {Array.isArray(posts) &&
          posts.map((post) => (
            <div key={post.id} className="border rounded p-2 mb-2">
              <p className="font-bold text-[arial]">{post.username}</p>
              <p>{post.post}</p>
            </div>
          ))}
      </div>
    </div>
  );
}