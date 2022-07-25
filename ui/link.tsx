import styled from "styled-components";

const Link = styled.a<{ color?: string }>`
  display: block;
  margin-top: 0.5rem;
  color: ${({ color }) => color || "var(--dark-pink)"};
  font-weight: 600;

  &:hover {
    text-decoration: 2px underline;
  }
`;

export { Link };
