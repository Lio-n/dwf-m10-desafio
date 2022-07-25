import { OutsideAlerter } from "components";
import { useEnableMenu, useGetToken } from "lib/hooks";
import styled, { css, keyframes } from "styled-components";
import { Logo } from "ui";
import { UserLogged, UserLogout } from "./typeOfMenu";

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
  background-color: var(--white);
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
  const hasToken = useGetToken();

  return (
    <>
      {enable && (
        <OutsideAlerter onChange={() => setEnable(!enable)}>
          <LayoutPopup expanded={enable ? "true" : undefined}>
            <Logo theme="dark" />
            <div>{hasToken ? <UserLogged /> : <UserLogout />}</div>
          </LayoutPopup>
        </OutsideAlerter>
      )}
    </>
  );
};

export { PopupMenu };
