import { HomePage } from "components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "components";

const Home: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Layout>
      <HomePage q={q} />
    </Layout>
  );
};

export default Home;
