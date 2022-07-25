import { useEnableMenu } from "lib/hooks";
import { BurgerIngredients, MenuBurger } from "./menuBurger";
import { PopupMenu } from "./popupMenu";

const Menu = () => {
  const [enable, setEnable] = useEnableMenu();
  return (
    <div style={{ display: "grid" }}>
      <MenuBurger onClick={() => setEnable(!enable)}>
        <BurgerIngredients />
      </MenuBurger>
      {enable && <PopupMenu />}
    </div>
  );
};

export { Menu };
