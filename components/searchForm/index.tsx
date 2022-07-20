import { Input } from "ui";
import { SearchButton } from "./styled";

const SearchForm = () => {
  return (
    <form style={{ position: "relative", width: "60vw" }}>
      <Input placeholder="Search a product" style={{ paddingLeft: "3rem" }} />
      <SearchButton />
    </form>
  );
};

export { SearchForm };
