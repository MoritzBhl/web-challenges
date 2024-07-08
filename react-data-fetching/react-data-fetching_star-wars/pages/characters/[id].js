import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   console.log(res);
//   if (!res.ok) {
//     const error = new Error("An error occurred while fetching the data.");
//     error.info = await res.json();
//     error.status = res.status;
//     console.log("Ex");
//     throw error;
//   }
//   console.log(res.json());
//   return res.json();
// };

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const fetcher = async (url) => {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      console.log("Ex");
      throw error;
    }
    console.log(res.json());
    return res.json();
  };

  const router = useRouter();
  const { id } = router.query;

  const URL = `https://swapi.dev/api/peopl/${id}`;
  const { data, error, isLoading } = useSWR(URL, fetcher);

  console.log(data);

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>{error.status}</h1>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
