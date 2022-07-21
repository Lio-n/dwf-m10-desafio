import { useRouter } from "next/router";
import React, { useState } from "react";
import { getToken, sendCode } from "lib/api";
import { useForm } from "react-hook-form";
import { Button, TextField } from "ui";
import { useUser } from "lib/hooks";
import styled from "styled-components";

const Layout = styled.div`
  /* box model */
  padding: 1.25rem 1.8rem;
  width: 22rem;
  max-width: 35rem;
  margin: auto;
  /* visual */
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  background-color: #fff;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [userData, setUserData] = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitEmail = ({ email }) => {
    sendCode(email);
    setEmail(email);
  };

  // ToDo : Check if code is valid, add alert.
  const onSubmitCode = async ({ code }) => {
    const token = await getToken({ email, code });
    setUserData({ ...userData, token, email });

    router.push("/");
  };

  return (
    <Layout>
      {!email && (
        <form onSubmit={handleSubmit(onSubmitEmail)} style={{ display: "grid", gap: "1rem" }}>
          <TextField
            props={{ ...register("email", { required: true }) }}
            label="Email"
            type="email"
          />
          {errors.email && <span>This field is required</span>}

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
          {errors.code && <span>This field is required</span>}
          <Button>Enviar</Button>
        </form>
      )}
    </Layout>
  );
};

export { Login };
