import { Skeleton } from "@heroui/skeleton";
import React from "react";

export const SkeletonProducts = () => {
  return (
    <Skeleton className="rounded-lg">
      <div className="h-14 rounded-lg bg-white" />
    </Skeleton>
  );
};
