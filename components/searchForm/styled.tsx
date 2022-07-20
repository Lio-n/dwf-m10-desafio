import styled from "styled-components";
import { SearchIcon } from "ui";

const Button = styled.button`
  /* positioning */
  position: absolute;
  left: 0;
  /* box model */
  padding: 0 0.5rem;
  height: 100%;
  /* styled */
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`;
const SearchButton = () => {
  return (
    <Button>
      <SearchIcon />
    </Button>
  );
};
export { SearchButton };
