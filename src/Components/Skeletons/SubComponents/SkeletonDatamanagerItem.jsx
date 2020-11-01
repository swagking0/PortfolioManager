import React from "react";
import SkeletonCore from "../SkeletonCore";

function SkeletonDatamanagerItem() {
  return (
    <div className="skeleton__datamanageritem">
      <SkeletonCore type="title" />
      <SkeletonCore type="text" />
    </div>
  );
}

export default SkeletonDatamanagerItem;
