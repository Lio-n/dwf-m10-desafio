import { Skeleton } from "@mui/material";
import { CardInfo, CardLayout } from "ui";
import { SkeletonH3 } from "./skeletonTexts";

const SkeletonCardProduct = () => {
  return (
    <CardLayout
      style={{
        position: "relative",
        zIndex: "-1",
      }}
    >
      <Skeleton variant="rectangular" width="352px" height="272px" />
      <CardInfo>
        <SkeletonH3 width="120px" />
        <SkeletonH3 width="75px" />
      </CardInfo>
    </CardLayout>
  );
};

export { SkeletonCardProduct };
