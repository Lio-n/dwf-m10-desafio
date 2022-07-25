import styled from "styled-components";

const Header = styled.header`
  /* box model */
  display: flex;
  justify-content: space-around;
  padding: 1rem 1.75rem;
  width: 100%;
  /* styled */
  background-color: var(--black);
  color: var(--white);
  /* positioning */
  position: fixed;
  top: 0;

  .shopping_cart_logo {
    display: none !important;
  }

  @media (min-width: 790px) {
    .shopping_cart_logo {
      display: flex !important;
    }
  }
`;

export { Header };
