import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { useId } from "react";
import styled from "styled-components";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log("data", data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { reviews } = data;
  console.log("review", reviews);

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
      <ul>
        Rating:
        {data.reviews ? (
          <List>{reviews.map((review) => review.text)}</List>
        ) : null}
      </ul>
    </ProductCard>
  );
}

const List = styled.li`
  list-style: none;
`;
