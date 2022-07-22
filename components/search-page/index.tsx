import { ListOfProducts } from "components";
import { Body, NextPagination, PrevPagination } from "ui";
import { useGetProductsByQuery } from "lib/hooks";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ShowProducts = ({ q }) => {
  const [options, setOptions] = useState({ query: q, offset: 0 });
  const [pagination, setPagination] = useState({ limit: 0, offset: 0, total: 0 });
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
      {data?.results && <SearchResult pagination={pagination} />}

      {data?.results && <ListOfProducts products={data?.results} />}
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

const Root = styled.div`
  display: grid;
  gap: 2rem;
  text-align: center;
  padding: 4rem 1rem 3rem;
`;

const SearchResult = ({ pagination }) => {
  const { offset, total, limit } = pagination;

  return (
    <Body fontWeight="light" color="var(--gray)">{`${
      limit > total ? total : limit + offset
    } resultados de ${total}`}</Body>
  );
};

const ShowPaginatino = ({ pagination, handleNextResults, handlePrevResults }) => {
  const { offset, total, limit } = pagination;

  return (
    <div style={{ margin: "1rem 0", display: "flex", gap: "1rem", justifyContent: "center" }}>
      {offset > 0 && <PrevPagination onChange={handlePrevResults} />}
      {total > limit + offset && <NextPagination onChange={handleNextResults} />}
    </div>
  );
};

export { ShowProducts };
