import styled from "styled-components";
import { H2, ShoppingCartLogo } from "ui";
import Menu from "./menu";

const Header = styled.header`
  background-color: #000;
  height: 20vh;
  color: #fff;
`;

const HeaderCustom = () => {
  return (
    <Header>
      <div>
        <ShoppingCartLogo />
        <H2>Cómpralo</H2>
      </div>
      <Menu />
    </Header>
  );
};

export { HeaderCustom };
