import { useIsLogged } from "lib/hooks";
import styled from "styled-components";
import { H1, H2, Link, RootBase } from "ui";

const Root = styled(RootBase)`
  gap: 2rem;
  margin: 0 auto;
`;

const Thanks = () => {
  useIsLogged();

  return (
    <Root>
      <H1>¡Felicitaciones!</H1>
      <H2>Tu compra se realizó con exito</H2>
      <Link href="/">Volver al inicio</Link>
    </Root>
  );
};

export { Thanks };
