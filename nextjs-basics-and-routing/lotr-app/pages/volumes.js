import Link from "next/link.js";
import { introduction } from "@/data.js";

export default function Volume() {
  return (
    <>
      <h1>Lord of the rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
        <li>
          <Link href="volumes/the-two-towers">The two towers</Link>
        </li>
      </ul>
    </>
  );
}
