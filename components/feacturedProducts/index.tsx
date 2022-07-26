import { ListOfProducts } from "components";
import { useFeacturedProducts } from "lib/hooks";
import { H1, RootBase } from "ui";
import styled from "styled-components";

const Root = styled(RootBase)`
  gap: 4rem;
`;

const FeaturedProducts = () => {
  const results = useFeacturedProducts();

  return (
    <Root>
      <H1>Productos destacados</H1>
      <ListOfProducts products={results} />
    </Root>
  );
};

export { FeaturedProducts };
