import styled from "styled-components";
import { SearchIcon } from "ui";

const Button = styled.button`
  /* positioning */
  position: absolute;
  left: 0;
  top: 0;
  /* box model */
  display: grid;
  place-content: center;
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
