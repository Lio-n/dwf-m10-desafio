import { FooterCustom, HeaderCustom } from "components";
import styled from "styled-components";

const Root = styled.div`
  height: 100vh;
  display: grid;
  align-content: space-between;
`;

const Layout = ({ children }: any) => {
  return (
    <Root>
      <HeaderCustom />
      {children}
      <FooterCustom />
    </Root>
  );
};

export { Layout };
