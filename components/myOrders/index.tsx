import { useGetOrders } from "lib/hooks";
import { useEffect, useState } from "react";
import { Body } from "ui";
import { Item } from "./styled";

const MisOrdenes = () => {
  const orders = useGetOrders();
  const [productIds, setProductIds] = useState<string[]>(undefined);

  useEffect(() => {
    if (!!orders?.length && orders !== undefined) {
      const ids: string[] = orders.map((item) => item.product_id);

      setProductIds(ids);
    }
  }, [orders]);

  return (
    <div style={{ display: "grid", gap: "1rem", textAlign: "center" }}>
      {productIds ? (
        productIds.map((id, index) => (
          <Item key={index} href={`/item/${id}`}>{`${index + 1}° producto`}</Item>
        ))
      ) : (
        <Body fontWeight="light">No hay ordenes generadas</Body>
      )}
    </div>
  );
};

export { MisOrdenes };
