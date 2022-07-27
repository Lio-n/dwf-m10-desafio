import { Layout, Perfil } from "components";
import Head from "next/head";
import { NextPage } from "next/types";

const PerfilPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Perfil</title>
      </Head>
      <Layout>
        <Perfil />
      </Layout>
    </>
  );
};

export default PerfilPage;
