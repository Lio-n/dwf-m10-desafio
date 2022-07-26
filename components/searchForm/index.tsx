import { Input } from "ui";
import { SearchButton } from "./styled";
import { useRouter } from "next/router";

const SearchForm = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;

    if (!query) return;
    router.push(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ position: "relative", width: "60vw" }}>
      <Input placeholder="Search a product" style={{ paddingLeft: "3rem" }} name="search" />
      <SearchButton />
    </form>
  );
};

export { SearchForm };
