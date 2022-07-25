import { patchMe } from "lib/api";
import { useMe } from "lib/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Body, Button, TextField, AlertSuccess } from "ui";
import { Form } from "./styled";

const MisDatos = ({ userData }: { userData: UserData }) => {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <Body fontWeight="regular">{"Email: " + userData.email}</Body>
      <MisDatosForm />
    </div>
  );
};

const MisDatosForm = () => {
  const userData = useMe();

  const { register, handleSubmit } = useForm();
  const [isUpdated, setIsUpdated] = useState<boolean>(undefined);

  const onSubmit = async (data) => {
    const res = await patchMe({ ...data });
    setIsUpdated(res);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        props={{ ...register("full_name", { required: true }) }}
        label="Nombre Completo"
        defaultValue={userData.full_name}
      />
      <TextField
        props={{ ...register("address", { required: true }) }}
        label="Dirección"
        defaultValue={userData.address}
      />
      <Button>Guardar</Button>

      {isUpdated && <AlertSuccess message="Datos Actualizados" />}
    </Form>
  );
};

export { MisDatos, MisDatosForm };
