import styled from "styled-components";

type TextProps = {
  color?: string;
  fontWeight?: "bold" | "regular" | "light" | "thin";
};
const weight = { bold: 700, regular: 400, light: 300, thin: 200 };

const styles = `
  font-weight: ${({ fontWeight = "bold" }) => weight[fontWeight]};
  color: ${({ color }) => color};
`;

const H1 = styled.h1<TextProps>`
  ${styles}
`;

const H2 = styled.h2<TextProps>`
  ${styles}
`;

const H3 = styled.h3<TextProps>`
  ${styles}
`;

const Body = styled.p<TextProps>`
  ${styles}
`;

export { H1, H2, H3, Body };
