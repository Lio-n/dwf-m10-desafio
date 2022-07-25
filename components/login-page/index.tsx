import { useRouter } from "next/router";
import React, { useState } from "react";
import { getToken, sendCode } from "lib/api";
import { useForm } from "react-hook-form";
import { AlertError, AlertWait, Button, TextField } from "ui";
import { useSetToken } from "lib/hooks";
import { Layout, Root } from "./styled";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [customAlert, setCustomAlert] = useState<JSX.Element>(undefined);

  const setToken = useSetToken();
  const { register, handleSubmit } = useForm();

  const onSubmitEmail = ({ email }) => {
    sendCode(email);
    setEmail(email);
  };

  const onSubmitCode = async ({ code }) => {
    setCustomAlert(<AlertWait message="Por favor, espere..." />);

    const token: string = await getToken({ email, code });

    if (token) {
      setToken(token);
      router.push("/");
    } else {
      setCustomAlert(<AlertError message="Codigo incorrecto" />);
    }
  };

  return (
    <Root>
      <Layout>
        {!email && (
          <form onSubmit={handleSubmit(onSubmitEmail)} style={{ display: "grid", gap: "1rem" }}>
            <TextField
              props={{ ...register("email", { required: true }) }}
              label="Email"
              type="email"
            />

            <Button>Enviar</Button>
          </form>
        )}
        {email && (
          <form onSubmit={handleSubmit(onSubmitCode)} style={{ display: "grid", gap: "1rem" }}>
            <TextField
              props={{ ...register("code", { required: true }) }}
              label="Code"
              type="number"
            />
            {customAlert}
            <Button>Enviar</Button>
          </form>
        )}
      </Layout>
    </Root>
  );
};

export { Login };
