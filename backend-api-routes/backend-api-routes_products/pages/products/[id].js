import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data: products, error, isLoading } = useSWR(`/api/products/${id}`);

  if (error) return <div>failed to load</div>;
  if (isLoading || !products) return <div>loading...</div>;
  return (
    <div>
      <Link href={"/products"}>Back to all Fish</Link>
      <h2>{products.name}</h2>
      <p>{products.description}</p>
      <h2>
        {products.price}
        {products.currency}
      </h2>
    </div>
  );
}
