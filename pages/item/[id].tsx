import React from "react";
import { NextPage } from "next/types";
import { Layout, ShowItem } from "components";
import { getAPI } from "lib/api/methods";
import Head from "next/head";

const ItemPage: NextPage = ({ product }: { product: Product }) => {
  return (
    <>
      <Head>
        <title>Producto</title>
        <meta name="description" content="Un producto en particular"></meta>
      </Head>
      <Layout>
        <ShowItem product={product} />
      </Layout>
    </>
  );
};

export default ItemPage;

export async function getStaticPaths() {
  const { results } = await getAPI({ path: `/search?q=co` });

  return {
    paths: results.map(({ objectID }) => ({ params: { id: objectID } })),
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps(context: any) {
  const productId = context.params.id.toString();
  const { product } = await getAPI({ path: `/products/${productId}` });

  return {
    props: {
      product,
    },
  };
}
