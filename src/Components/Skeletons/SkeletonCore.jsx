import React from "react";
import "../../Styles/Components/skeleton.css";
function SkeletonCore({ type }) {
  const skeletonClassType = `skeleton ${type}`;
  return <div className={skeletonClassType}></div>;
}

export default SkeletonCore;
