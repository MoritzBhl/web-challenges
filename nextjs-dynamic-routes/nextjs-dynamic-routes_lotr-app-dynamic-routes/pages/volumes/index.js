import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement() {
    const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
    return router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Head>
        <title>Volumes</title>
        <meta name="viewport" content="initial-sclae=1.0,width=device-width" />
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
        <br></br>
        <button type="button" onClick={getRandomElement}>
          Random Volume
        </button>
      </ul>
    </>
  );
}
