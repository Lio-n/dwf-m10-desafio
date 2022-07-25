import { NextPage } from "next/types";
import { Layout, Home } from "components";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
