import { H2 } from "ui";
import ShoppingCartLogo from "./shopping-cart_copy.svg";

const Logo = ({ className, theme }: { className?: string; theme?: "light" | "dark" }) => {
  const styles = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };
  return (
    <a href="/" className={className} style={styles}>
      <ShoppingCartLogo stroke={theme == "dark" ? "var(--black)" : "var(--white)"} />
      <H2 color={theme == "dark" ? "var(--black)" : "var(--white)"}>Cómpralo</H2>
    </a>
  );
};

export { ShoppingCartLogo, Logo };
