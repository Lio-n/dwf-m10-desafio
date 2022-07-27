import { Body, Image } from "ui";
import { CardInfo, CardLayout } from "./styled";

const CardProduct = ({ title, picture_url, unit_price, id }: CardProductProps) => {
  return (
    <CardLayout>
      <a href={`/item/${id}`}>
        <Image src={picture_url} alt={title} />
        <CardInfo>
          <Body>{title}</Body>
          <Body>{"$" + unit_price}</Body>
        </CardInfo>
      </a>
    </CardLayout>
  );
};

export { CardProduct };
