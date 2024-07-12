import useSWR from "swr";

export default function Products() {
  const { data: products, error, isLoading } = useSWR("/api/products");

  if (error) return <div>failed to load</div>;
  if (isLoading || !products) return <div>loading...</div>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>
            {product.description} and costs {product.price}
            {product.currency}`
          </p>
        </li>
      ))}
    </ul>
  );
}
