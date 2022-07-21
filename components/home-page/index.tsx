import { FeaturedProducts } from "components";
import { useMe } from "lib/hooks";

const Home = ({ q }: { q: string | string[] }) => {
  const useData = useMe();

  return (
    <div>
      <h1>Soy la Home</h1>
      {/* <h2>{JSON.stringify(useData)}</h2> */}
      <FeaturedProducts />
    </div>
  );
};

export { Home };
