import { useFeacturedProducts } from "lib/hooks";
import { CardProduct } from "./cardProduct";

const FeaturedProducts = () => {
  const results = useFeacturedProducts();
  console.log({ results });
  return (
    <div>
      <h1>Ssg - Product:</h1>
      <ul>
        {results &&
          results.map(({ title, picture_url, id }) => {
            return <CardProduct key={id} title={title} picture_url={picture_url} />;
          })}
      </ul>
    </div>
  );
};

export { FeaturedProducts };
