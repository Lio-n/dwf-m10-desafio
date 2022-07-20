import styled from "styled-components";
import { GithubIcon, H2, InstagramIcon, LinkCustom, LinkedinIcon } from "ui";

const Footer = styled.footer`
  background-color: var(--black);
  padding: 3rem 2rem;
  display: grid;
  gap: 0.5rem;
`;

const FooterCustom = () => {
  return (
    <Footer>
      <H2 fontWeight="regular" color="#fff">
        Redes
      </H2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <LinkCustom href="https://www.instragram.com">
          <InstagramIcon />
        </LinkCustom>
        <LinkCustom href="https://www.linkedin.com">
          <LinkedinIcon />
        </LinkCustom>
        <LinkCustom href="https://github.com/Lio-n">
          <GithubIcon />
        </LinkCustom>
      </div>
    </Footer>
  );
};

export { FooterCustom };
