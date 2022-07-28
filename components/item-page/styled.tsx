import styled from "styled-components";
import { Link } from "ui";

const Form = styled.form`
  display: grid;
  gap: 1rem;

  @media (min-width: 930px) {
    & {
      max-width: 46.5%;
    }
  }
`;

const UpdateMyData = ({ children }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {children}
      <Link href="/perfil">Actualizar mis datos</Link>
    </div>
  );
};

export { Form, UpdateMyData };
