import { Skeleton } from "@mui/material";
import styled from "styled-components";
import { SkeletonH1, SkeletonH2, SkeletonBody } from "./skeletonTexts";

const SkeletonCardItem = () => {
  return (
    <Root>
      <Skeleton className="skeleton__image" variant="rectangular" width="100%" height="17rem" />
      <ItemInfo>
        <SkeletonH2 width="10rem" />
        <SkeletonH2 width="7rem" />
        <SkeletonH1 width="100%" />

        <div>
          <SkeletonBody width="15rem" />
          <SkeletonBody width="25rem" />
          <SkeletonBody width="22rem" />
          <SkeletonBody width="23rem" />
        </div>
      </ItemInfo>
    </Root>
  );
};

const Root = styled.div`
  /* positioning */
  position: relative;
  z-index: -1;
  /* box model */
  display: grid;
  min-width: min-content;
  max-width: 30rem;
  padding: 1rem;
  gap: 1rem;
  margin: 0 auto;
  /* styled */
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);

  & > .skeleton__image {
    border-radius: 10px;
  }

  @media (min-width: 930px) {
    & {
      display: flex;
      max-width: 60rem;
      gap: 2rem;
    }
    & > .skeleton__image {
      height: 20rem;
      max-width: 27rem;
    }
  }
`;

const ItemInfo = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 930px) {
    & {
      max-width: 50%;
    }
  }
`;

export { SkeletonCardItem };
