import { useForm } from "react-hook-form";
import { Button, TextField } from "ui";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField props={{ ...register("name") }} label="Nombre" />
      <TextField props={{ ...register("email", { required: true }) }} label="Email" type="email" />
      {errors.email && <span>This field is required</span>}
      <Button>Enviar</Button>
    </form>
  );
};

export { Form };
