import { H3, Image } from "ui";
import { CardInfo, CardLayout } from "./styled";

const CardProduct = ({ title, picture_url, unit_price, id }: CardProductProps) => {
  return (
    <CardLayout>
      <a href={`/item/${id}`}>
        <Image src={picture_url} alt={title} />
        <CardInfo>
          <H3>{title}</H3>
          <H3>{"$" + unit_price}</H3>
        </CardInfo>
      </a>
    </CardLayout>
  );
};

export { CardProduct };
