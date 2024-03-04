import { sql } from '@vercel/postgres';
import submit from '@/component/submit';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default async function page() {
  async function handlePost(formData) {
    'use server';

    console.log(formData);
    const username = formData.get('username');
    const post = formData.get('post');

    await sql`INSERT INTO comment (username, post) VALUES (${username}, ${post})`;

    revalidatePath('/posts');

    redirect('/posts');
  }

  return (
    <main className="flex flex-col items-center mt-1">
      <h1 className="text-3xl font-bold">New post</h1>
      <form className="flex flex-col gap-1" action={handlePost}>
        <div className="flex flex-col gap-1 items-center justify-center mt-2">
          <label htmlFor="username">username: </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-white border-zinc-400 border-[2px] rounded-lg p-1 text-center text-[#00ADB5]"
          />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <label htmlFor="post">Message: </label>
          <input
            type="text"
            name="post"
            id="post"
            className="bg-white border-zinc-400 border-[2px] rounded-lg p-1 text-center text-[#00ADB5]"
          />
        </div>
        <submit />
      </form>
    </main>
  );
}