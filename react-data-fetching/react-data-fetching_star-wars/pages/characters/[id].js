import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Character() {
  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.status = res.status;
      throw error;
    }
    return res.json();
  };

  const router = useRouter();
  const { id } = router.query;

  const URL = `https://swapi.dev/api/people/${id}`;
  const { data: character, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>{error.status}</h1>;

  return (
    <Layout>
      <Card
        id={id}
        name={character.name}
        height={character.height}
        eyeColor={character.eye_color}
        birthYear={character.birth_year}
      />
    </Layout>
  );
}
