import { Layout, Login } from "components";
import { NextPage } from "next/types";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginPage;
