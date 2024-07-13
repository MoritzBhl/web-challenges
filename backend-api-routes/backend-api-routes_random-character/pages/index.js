import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const {
    data: randomCharacter,
    error,
    isLoading,
  } = useSWR("/api/random-character", { fetcher, refreshInterval: 5000 });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <ul>
        <strong>{randomCharacter.name}</strong>
        <li>{randomCharacter.gender}</li>
        <li>{randomCharacter.age}</li>
        <li>{randomCharacter.birthday}</li>
        <li>{randomCharacter.socialSecurityNumber}</li>
        <li>{randomCharacter.twitterName}</li>
        <li>{randomCharacter.geohash}</li>
      </ul>
    </>
  );
}
