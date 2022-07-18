import styled from "styled-components";

const Content = styled.section`
  display: grid;
  margin: 0 auto;
`;
const Layout = ({ children }: any) => {
  return (
    <div>
      <header>Soy el Header</header>
      <Content>{children}</Content>
      <footer>Soy el Footer</footer>
    </div>
  );
};

export { Layout };
