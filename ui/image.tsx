import styled from "styled-components";

const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 17rem;
  border-radius: 4px 4px 0 0;
`;

const Image = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

export { Image };
