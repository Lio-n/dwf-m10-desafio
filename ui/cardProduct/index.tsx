import { H3, Image } from "ui";
import { CardInfo, CardLayout } from "./styled";

const CardProduct = ({ title, picture_url, unit_price }) => {
  return (
    <CardLayout>
      <Image src={picture_url} alt={title} />
      <CardInfo>
        <H3>{title}</H3>
        <H3>{"$" + unit_price}</H3>
      </CardInfo>
    </CardLayout>
  );
};

export { CardProduct };
