import styled from "styled-components";

const Root = styled.div`
  display: grid;
  gap: 1rem;
`;

const SelectData = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: solid 2px #d3d3d3;
  padding-bottom: 0.5rem;
  justify-content: center;

  & > h3 {
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;
  }

  & > h3:hover {
    background-color: #d3d3d33d;
    color: var(--black);
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

export { Root, Form, SelectData };
