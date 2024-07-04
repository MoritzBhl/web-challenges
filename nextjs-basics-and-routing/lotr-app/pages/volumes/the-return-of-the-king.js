import { volumes } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function King() {
  const returnOfKing = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <h1>{returnOfKing.title}</h1>
      <p>{returnOfKing.description}</p>
      <ul>
        <li>{returnOfKing.books[0].title}</li>
        <li>{returnOfKing.books[1].title}</li>
        <Image
          src="/the-return-of-the-king.png"
          width={140}
          height={230}
          alt="The return of the king"
        />
      </ul>
      <Link href="/volumes">All Volumes</Link>
      <p></p>
      <Link href="/volumes/the-two-towers">Next volume</Link>
      <p></p>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous volume</Link>
    </>
  );
}
