import { NextPage } from "next/types";
import { Layout, Home } from "components";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="e-commerce utilizando Next.js y una arquitectura basada en capas"
        ></meta>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
