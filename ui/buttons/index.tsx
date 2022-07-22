import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "ui";

const Button = styled.button<{ color?: string }>`
  /* box model */
  width: 100%;
  min-width: min-content;
  padding: 0.5rem;
  /* typography */
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  /* visual */
  cursor: pointer;
  height: 45px;
  border-radius: 5px;

  background-color: ${({ color }) => color || "#4F7CAC"};
  color: #fff;
  border: ${({ color }) => color || "#4F7CAC"} 2px solid;

  &:hover {
    background-color: transparent;
    color: ${({ color }) => color || "#4F7CAC"};
    border: ${({ color }) => color || "#4F7CAC"} 2px solid;
  }
`;

const PaginationButton = styled.button`
  /* box model*/
  display: flex;
  place-items: center;
  width: max-content;
  padding: 0.5rem;
  /* visual */
  cursor: pointer;
  background-color: transparent;
  border-radius: 10px;
  border: solid 2px;
  color: var(--gray);
  /* typography */
  font-size: 1rem;
  font-weight: bolder;
`;

const NextPagination = ({ onChange }) => {
  return (
    <PaginationButton onClick={() => onChange()} style={{ paddingRight: 0 }}>
      Siguiente <ChevronRight />
    </PaginationButton>
  );
};

const PrevPagination = ({ onChange }) => {
  return (
    <PaginationButton onClick={() => onChange()} style={{ paddingLeft: 0 }}>
      <ChevronLeft />
      Anterior
    </PaginationButton>
  );
};

export { Button, PrevPagination, NextPagination };
