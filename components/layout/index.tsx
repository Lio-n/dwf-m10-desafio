import { FooterCustom, HeaderCustom } from "components";
import styled from "styled-components";

const Root = styled.div`
  height: 100vh;
  display: grid;
  align-content: space-between;
`;
const Content = styled.section`
  display: grid;
  margin: 0 auto;
`;
const Layout = ({ children }: any) => {
  return (
    <Root>
      <HeaderCustom />
      <Content>{children}</Content>
      <FooterCustom />
    </Root>
  );
};

export { Layout };
