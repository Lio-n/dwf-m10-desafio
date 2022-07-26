import { ListOfProducts } from "components";
import { useGetProductsByQuery } from "lib/hooks";
import { useEffect, useState } from "react";
import { SkeletonBody } from "ui";
import { Root, SearchResult, ShowPaginatino } from "./styled";

const ShowProducts = ({ q }: { q: string | string[] }) => {
  const [options, setOptions] = useState<BaseQuery>({
    query: q,
    offset: 0,
  });
  const [pagination, setPagination] = useState<Pagination>({
    limit: 0,
    offset: 0,
    total: 0,
  });
  const data = useGetProductsByQuery({ ...options });

  useEffect(() => {
    if (q) setOptions({ ...options, query: q });
    if (data?.pagination) setPagination(data.pagination);
  }, [data, q]);

  const handleNextResults = () => setOptions({ query: q, offset: pagination.limit });

  const handlePrevResults = () => {
    const offset = pagination.total - (pagination.limit + pagination.offset);
    setOptions({ query: q, offset });
  };

  return (
    <Root>
      {data?.results ? <SearchResult pagination={pagination} /> : <SkeletonBody width="150px" />}

      <ListOfProducts products={data?.results} />
      {data?.results && (
        <ShowPaginatino
          pagination={pagination}
          handlePrevResults={handlePrevResults}
          handleNextResults={handleNextResults}
        />
      )}
    </Root>
  );
};

export { ShowProducts };
