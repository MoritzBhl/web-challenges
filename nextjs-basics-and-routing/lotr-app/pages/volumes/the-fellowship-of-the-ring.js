import { volumes } from "@/data.js";
import Image from "next/image";
import Link from "next/link";

export default function Fellowship() {
  const fellowshipOfRing = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h1>{fellowshipOfRing.title}</h1>
      <p>{fellowshipOfRing.description}</p>
      <ul>
        <li>{fellowshipOfRing.books[0].title}</li>
        <li>{fellowshipOfRing.books[1].title}</li>
        <Image
          src="/the-fellowship-of-the-ring.png"
          width={140}
          height={230}
          alt="The fellowship of the ring"
        />
      </ul>
      <Link href="/volumes">All volumes</Link>
      <p></p>
      <Link href="/volumes/the-return-of-the-king">Next volume</Link>
    </>
  );
}
