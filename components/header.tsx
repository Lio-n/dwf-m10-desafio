import styled from "styled-components";
import { Menu, SearchForm } from "components";
import { Logo } from "ui";

const Header = styled.header`
  /* box model */
  display: flex;
  justify-content: space-around;
  padding: 1rem 1.75rem;
  /* styled */
  background-color: var(--black);
  color: #fff;

  .shopping_cart_logo {
    display: none !important;
  }

  @media (min-width: 790px) {
    .shopping_cart_logo {
      display: flex !important;
    }
  }
`;

const HeaderCustom = () => {
  return (
    <Header>
      <Logo className="shopping_cart_logo" />
      <SearchForm />
      <Menu />
    </Header>
  );
};

export { HeaderCustom };
