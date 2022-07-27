import { Layout, Logout } from "components";
import Head from "next/head";
import { NextPage } from "next/types";

const LogoutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Logout</title>
      </Head>
      <Layout>
        <Logout />
      </Layout>
    </>
  );
};

export default LogoutPage;
