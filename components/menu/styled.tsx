import { OutsideAlerter } from "components/layoutDetectOutSide";
import { SignOut } from "components/signOut";
import { useEnableMenu } from "lib/hooks";
import styled, { css, keyframes } from "styled-components";
import { Logo, SigninIcon, SignupIcon } from "ui";

const translate = keyframes`
  from {
    right:-240px
  }
  to {
    right: 0px;
  }
`;

const LayoutPopup = styled.div<{ expanded: string }>`
  /* positioning */
  position: absolute;
  /* box model */
  display: none;
  place-content: baseline;
  max-width: 35rem;
  width: 15rem;
  margin: auto;
  padding: 1rem 0 0 2rem;
  height: 100vh;
  gap: 2rem;
  /* styled */
  color: blue;
  background-color: #fff;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);

  ${(props) =>
    props.expanded &&
    css`
      display: grid;
      animation: ${translate} 0.1s linear;
      right: 0px;
      top: 0;
    `};
`;

const PopupMenu = () => {
  const [enable, setEnable] = useEnableMenu();

  return (
    <>
      {enable && (
        <OutsideAlerter onChange={() => setEnable(!enable)}>
          <LayoutPopup expanded={enable ? "true" : undefined}>
            <Logo theme="dark" />
            <div>{undefined ? <UserLogged /> : <Default />}</div>
          </LayoutPopup>
        </OutsideAlerter>
      )}
    </>
  );
};

const Link = styled.a<{ href: string }>`
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: #444;
  padding: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: rgb(245, 245, 245);
    color: #000;
  }
`;

const UserLogged = () => {
  return (
    <>
      <Link href="/login">Ingresar</Link>
      <Link href="/profile">Mi perfil</Link>
      <SignOut />
    </>
  );
};

const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
    >
      <Link href="/login">
        <SigninIcon /> Ingresar
      </Link>
      <Link href="/login">
        <SignupIcon /> Crear cuenta
      </Link>
    </div>
  );
};

export { PopupMenu };
