import { useEnableMenu } from "lib/hooks";
import styled from "styled-components";
import { PopupMenu } from "./styled";

// # En base al (TOKEN ? isLogged = true : isLogged = false)
// # Se habilita un tipo de menu u otro.

const MenuBurger = styled.div`
  /* positioning */
  position: relative;
  /* box model */
  display: grid;
  place-items: center;
  width: 2rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const BurgerItem = styled.div`
  width: 100%;
  height: 5px;
  background-color: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &:before {
    transform: translateY(-10px);
  }
  &:after {
    transform: translateY(10px);
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
`;

const Menu = () => {
  const [enable, setEnable] = useEnableMenu();
  return (
    <div style={{ display: "grid" }}>
      <MenuBurger onClick={() => setEnable(!enable)}>
        <BurgerItem />
      </MenuBurger>
      {enable && <PopupMenu />}
    </div>
  );
};

export { Menu };
