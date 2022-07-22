import { Layout, ShowProducts } from "components";
import { useRouter } from "next/router";
import { NextPage } from "next/types";

const Search: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Layout>
      <ShowProducts q={q} />
    </Layout>
  );
};

export default Search;
