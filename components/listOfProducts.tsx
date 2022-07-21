import styled from "styled-components";
import { CardProduct } from "ui";

const Root = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2.5rem;
  width: 100%;
`;

// Should : Tipar products?
const ListOfProducts = ({ products }) => {
  return (
    <Root>
      {products &&
        products.map(({ title, picture_url, unit_price, id }) => {
          return (
            <CardProduct key={id} title={title} picture_url={picture_url} unit_price={unit_price} />
          );
        })}
    </Root>
  );
};

export { ListOfProducts };
