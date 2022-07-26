import { Body, BuyButton, H2 } from "ui";
import { useRouter } from "next/router";
import { useGetToken, useMe } from "lib/hooks";
import React, { useState } from "react";
import { generateOrder } from "lib/api";
import { Form, UpdateMyData } from "./styled";

const ProductInfo = ({ title, unit_price, description, id }: ProductInfoProps) => {
  const token = useGetToken();
  const userData = useMe();
  const [customAlert, setCustomAlert] = useState<JSX.Element>(undefined);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      router.push(`/login`);
      return;
    }

    if (!userData.address && !userData.full_name) {
      setCustomAlert(
        <Body color="var(--dark-pink)" fontWeight="regular">
          Debes actualizar tus datos personales antes de continuar
        </Body>
      );
      return;
    }

    const { init_point } = await generateOrder({ additionalInfo: { description }, productId: id });

    if (init_point) router.push(`${init_point}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H2>{title}</H2>
      <H2 color="var(--green)">{"$" + unit_price}</H2>

      <BuyButton />
      {customAlert && <UpdateMyData>{customAlert}</UpdateMyData>}
      <Body fontWeight="regular">{description}</Body>
    </Form>
  );
};

export { ProductInfo };
