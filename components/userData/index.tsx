import { MisOrdenes } from "components/myOrders";
import { getSavedToken } from "lib/api/methods";
import { useMe } from "lib/hooks";
import { useState } from "react";
import { H3 } from "ui";
import { MisDatos } from "./myData";
import { Root, SelectData } from "./styled";

const UserData = () => {
  const userData = useMe();
  const [enableOrders, setEnableOrders] = useState<boolean>(true);

  return (
    <Root>
      <SelectData>
        <H3 fontWeight="regular" color="var(--gray)" onClick={() => setEnableOrders(true)}>
          Mis Datos
        </H3>
        <H3 fontWeight="regular" color="var(--gray)" onClick={() => setEnableOrders(false)}>
          Mis Ordenes
        </H3>
      </SelectData>
      {userData && (
        <>
          {!enableOrders && <MisOrdenes />}
          {enableOrders && <MisDatos userData={userData} />}
        </>
      )}
    </Root>
  );
};

export { UserData };
