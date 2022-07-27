import { Layout, Login } from "components";
import Head from "next/head";
import { NextPage } from "next/types";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login de la page"></meta>
      </Head>
      <Layout>
        <Login />
      </Layout>
    </>
  );
};

export default LoginPage;
