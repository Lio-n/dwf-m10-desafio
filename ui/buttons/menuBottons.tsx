import styled from "styled-components";
import { ProfileUserIcon, SigninIcon, SignoutIcon, SignupIcon } from "ui";

const icons = {
  Ingresar: [<SigninIcon />, "/login"],
  "Crear Cuenta": [<SignupIcon />, "/login"],
  "Mi perfil": [<ProfileUserIcon />, "/perfil"],
  "Cerrar Sesión": [<SignoutIcon />, "/logout"],
};

const Link = styled.a<{ href: string }>`
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: var(--gray);
  padding: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: rgb(245, 245, 245);
    color: var(--black);
  }
`;

const MenuBotton = ({ name }: MenuLinkProps) => {
  const [Icon, path] = icons[name];
  return (
    <Link href={`${path}`}>
      {Icon}
      <span>{name}</span>
    </Link>
  );
};

export { MenuBotton };
