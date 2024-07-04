import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ul>
        <li>
          <Link href="/volumes">Go to volumes</Link>
        </li>
      </ul>
    </div>
  );
}
