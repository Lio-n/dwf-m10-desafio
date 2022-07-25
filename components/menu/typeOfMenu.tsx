import styled from "styled-components";
import { MenuBotton } from "ui";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const UserLogged = () => {
  return (
    <Root>
      <MenuBotton name="Mi perfil" />
      <MenuBotton name="Cerrar Sesión" />
    </Root>
  );
};

const UserLogout = () => {
  return (
    <Root>
      <MenuBotton name="Ingresar" />
      <MenuBotton name="Crear Cuenta" />
    </Root>
  );
};

export { UserLogged, UserLogout };
