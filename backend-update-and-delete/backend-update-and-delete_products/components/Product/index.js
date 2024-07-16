import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { useId, useState } from "react";
import styled from "styled-components";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.log(response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const { reviews } = data;

  return (
    <ProductCard>
      {isEditMode && <ProductForm onSubmit={handleEditProduct} />}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        EDIT
      </button>
      <button
        type="button"
        onClick={() => {
          handleDeleteProduct(id);
        }}
      >
        DELETE
      </button>
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
