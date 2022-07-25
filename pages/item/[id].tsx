import React from "react";
import { NextPage } from "next/types";
import { Layout, ShowItem } from "components";
import { getAPI } from "lib/api/methods";

const ItemPage: NextPage = ({ product }: { product: Product }) => {
  return (
    <Layout>
      <div style={{ padding: "4rem 1rem 4rem" }}>
        <ShowItem product={product} />
      </div>
    </Layout>
  );
};

export default ItemPage;

export async function getStaticPaths() {
  const { results } = await getAPI({ path: `/search?q` });

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
