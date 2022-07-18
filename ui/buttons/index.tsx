import styled from "styled-components";

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

export { Button };
