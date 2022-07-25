import { Layout, Logout } from "components";
import { NextPage } from "next/types";

const LogoutPage: NextPage = () => {
  return (
    <Layout>
      <Logout />
    </Layout>
  );
};

export default LogoutPage;
