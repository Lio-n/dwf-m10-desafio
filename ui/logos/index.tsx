import { H2 } from "ui";
import ShoppingCartLogo from "./shopping-cart_copy.svg";

const Logo = ({ className, theme }: { className?: string; theme?: "light" | "dark" }) => {
  const styles = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };
  return (
    <div className={className} style={styles}>
      <ShoppingCartLogo stroke={theme == "dark" ? "#000" : "#fff"} />
      <H2 color={theme == "dark" ? "#000" : "#fff"}>Cómpralo</H2>
    </div>
  );
};

export { ShoppingCartLogo, Logo };
