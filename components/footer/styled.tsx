import styled from "styled-components";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "ui";

const Footer = styled.footer`
  display: grid;
  gap: 0.5rem;
  padding: 3rem 2rem;
  background-color: var(--black);
`;

const icons = {
  instagram: [<InstagramIcon key="instagram" />, "https://www.instagram.com/tropical_sn0w/"],
  linkedin: [<LinkedinIcon key="linkedin" />, "https://www.linkedin.com/in/leonardo-fontan/"],
  github: [<GithubIcon key="github" />, "https://github.com/Lio-n"],
};

const FooterLink = ({ name }: FooterLinkProps) => {
  const [Icon, path] = icons[name];

  return (
    <a href={`${path}`} target="_blank" rel="noreferrer">
      {Icon}
    </a>
  );
};

export { Footer, FooterLink };
