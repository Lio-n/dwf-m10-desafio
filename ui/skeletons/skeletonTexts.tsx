import { Skeleton } from "@mui/material";

const SkeletonH1 = ({ width }: { width: string }) => {
  return <Skeleton width={width} height="4rem" />;
};

const SkeletonH2 = ({ width }: { width: string }) => {
  return <Skeleton width={width} height="2.2rem" />;
};

const SkeletonH3 = ({ width }: { width: string }) => {
  return <Skeleton width={width} height="1.9rem" />;
};

const SkeletonBody = ({ width }: { width: string }) => {
  return <Skeleton width={width} height="1rem" />;
};

export { SkeletonH1, SkeletonH2, SkeletonH3, SkeletonBody };
