import { H2 } from "ui";
import { Footer, FooterLink } from "./styled";

const FooterCustom = () => {
  return (
    <Footer>
      <H2 fontWeight="regular" color="var(--white)">
        Redes
      </H2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <FooterLink name="instagram" />
        <FooterLink name="github" />
        <FooterLink name="linkedin" />
      </div>
    </Footer>
  );
};

export { FooterCustom };
