import styled from "styled-components";

type TextProps = {
  children: string;
  color?: string;
  fontWeight?: "bold" | "regular" | "light" | "thin";
};
const weight = { bold: 700, regular: 400, light: 300, thin: 200 };

const H1 = styled.h1<TextProps>`
  font-weight: ${({ fontWeight = "bold" }) => weight[fontWeight]};
  color: ${({ color }) => color || "#000"};
`;

const H2 = ({ children, color, fontWeight }: TextProps) => {
  return (
    <H1 as="h2" color={color} fontWeight={fontWeight}>
      {children}
    </H1>
  );
};

const H3 = ({ children, color, fontWeight }: TextProps) => {
  return (
    <H1 as="h3" color={color} fontWeight={fontWeight}>
      {children}
    </H1>
  );
};

const Body = ({ children, color, fontWeight }: TextProps) => {
  return (
    <H1 as="p" color={color} fontWeight={fontWeight}>
      {children}
    </H1>
  );
};

export { H1, H2, H3, Body };
