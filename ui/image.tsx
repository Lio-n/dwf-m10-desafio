import styled from "styled-components";

const Img = styled.img<{ borderRadius?: string }>`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 17rem;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "4px 4px 0 0")};
`;

const Image = ({ src, borderRadius, alt }: ImageProps) => {
  return <Img src={src} borderRadius={borderRadius} alt={alt} />;
};

export { Image };
