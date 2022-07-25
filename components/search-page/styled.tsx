import styled from "styled-components";
import { Body, NextPagination, PrevPagination, RootBase } from "ui";

const Root = styled(RootBase)`
  gap: 2rem;
`;

const SearchResult = ({ pagination }: { pagination: Pagination }) => {
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

export { Root, SearchResult, ShowPaginatino };
