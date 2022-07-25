import { UserData } from "components";
import { useIsLogged } from "lib/hooks";
import styled from "styled-components";
import { H1 } from "ui";

const Root = styled.div`
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 30rem;
  padding: 4rem 1rem 7rem;
`;

const Perfil = () => {
  useIsLogged();

  return (
    <Root>
      <H1>Perfil</H1>
      <UserData />
    </Root>
  );
};

export { Perfil };
