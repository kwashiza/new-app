import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-center">
      <div className="p-4 pt-20">
          <h1 className="text-5xl font-bold"><new-app></new-app></h1>
        </div>
        <ol className="flex flex-row p-3 items-center justify-center">
          <li className="m-4">
            <Link
              href="/"
              className="hover:underline"
              style={{ color: '#00ADB5' }}
            >
              Home
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="/posts"
              className="hover:underline"
              style={{ color: '#00ADB5' }}
            >
              Posts
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="/about"
              className="hover:underline"
              style={{ color: '#00ADB5' }}
            >
              About
            </Link>
          </li>
        </ol>
      </div>
    
  );
}