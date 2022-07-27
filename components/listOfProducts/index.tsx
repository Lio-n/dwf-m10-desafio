import styled from "styled-components";
import { CardProduct } from "ui";
import { SkeletonListOfProducts } from "./styled";

const Root = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2.5rem;
  width: 100%;
`;

const ListOfProducts = ({ products }: { products: Product[] }) => {
  return (
    <Root>
      {products ? (
        products.map(({ title, picture_url, unit_price, objectID }, index) => {
          return (
            <li key={index} style={{ minWidth: "min-content", maxWidth: "22rem", width: "100%" }}>
              <CardProduct
                id={objectID}
                title={title}
                picture_url={picture_url}
                unit_price={unit_price}
              />
            </li>
          );
        })
      ) : (
        <SkeletonListOfProducts />
      )}
    </Root>
  );
};

export { ListOfProducts };
