import { volumes } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Towers() {
  const twoTowers = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <h1>{twoTowers.title}</h1>
      <p>{twoTowers.description}</p>
      <ul>
        <li>{twoTowers.books[0].title}</li>
        <li>{twoTowers.books[1].title}</li>
        <Image
          src="/the-two-towers.png"
          width={140}
          height={230}
          alt="The two Towers"
        />
      </ul>
      <Link href="/volumes">All Volumes</Link>
      <p></p>
      <Link href="/volumes/the-return-of-the-king">Previous volume</Link>
    </>
  );
}
