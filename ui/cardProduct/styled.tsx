import styled from "styled-components";

const CardLayout = styled.div`
  border-radius: 4px;
  min-width: min-content;
  max-width: 22rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: baseline;
  gap: 1rem;
  padding: 1.5rem;
`;

export { CardLayout, CardInfo };
