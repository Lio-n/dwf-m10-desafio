import { ListOfProducts } from "components";
import { useFeacturedProducts } from "lib/hooks";
import { H1 } from "ui";
import styled from "styled-components";

const Root = styled.div`
  display: grid;
  place-items: center;
  padding: 4rem 1rem 3rem;
  gap: 4rem;
`;

const FeaturedProducts = () => {
  const results = useFeacturedProducts();
  console.log({ results });

  return (
    <Root>
      <H1>Productos destacados</H1>
      <ListOfProducts products={results} />
    </Root>
  );
};

export { FeaturedProducts };
