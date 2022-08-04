import React from "react";
import styled from "styled-components";
import { Image, RootBase, SkeletonCardItem } from "ui";
import { ProductInfo } from "./productInfo";

const Container = styled.div`
  /* box model */
  display: grid;
  min-width: min-content;
  max-width: 30rem;
  padding: 1rem;
  gap: 1rem;
  /* styled */
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);

  @media (min-width: 930px) {
    & {
      display: flex;
      max-width: 56rem;
      gap: 2rem;
    }
    & > img {
      height: 20rem;
      width: 50%;
    }
  }
`;

const ShowItem = ({ product }: { product: Product }) => {
  return (
    <RootBase>
      {product ? (
        <Container>
          <Image src={product.picture_url} borderRadius="10px" alt={product.title} />

          <ProductInfo
            title={product.title}
            unit_price={product.unit_price}
            description={product.description}
            id={product.objectID}
          />
        </Container>
      ) : (
        <SkeletonCardItem />
      )}
    </RootBase>
  );
};

export { ShowItem };
