import styled from "styled-components";
import { RootBase } from "ui";

const Layout = styled.div`
  /* box model */
  padding: 1.25rem 1.8rem;
  width: 22rem;
  max-width: 35rem;
  margin: auto;
  /* visual */
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  background-color: var(--white);
`;

const Root = styled(RootBase)`
  height: 70vh;
`;

export { Layout, Root };
