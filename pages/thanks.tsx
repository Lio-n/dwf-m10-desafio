import { Layout, Thanks } from "components";
import Head from "next/head";
import { NextPage } from "next/types";

const ThanksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thanks</title>
      </Head>
      <Layout>
        <Thanks />
      </Layout>
    </>
  );
};

export default ThanksPage;
