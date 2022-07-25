import { Menu, SearchForm } from "components";
import { Logo } from "ui";
import { Header } from "./styled";

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
