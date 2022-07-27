import { Layout, ShowProducts } from "components";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPage } from "next/types";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <Head>
        <title>Busqueda de Producto</title>
        <meta name="description" content="Lista de productos"></meta>
      </Head>
      <Layout>
        <ShowProducts q={q} />
      </Layout>
    </>
  );
};

export default SearchPage;
