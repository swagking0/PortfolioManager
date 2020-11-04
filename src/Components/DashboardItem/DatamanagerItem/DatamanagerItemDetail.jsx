import React from "react";

function DatamanagerItemDetail(props) {
  let { params } = props.match;
  return (
    <div className="datamanageritemdetail__container">
      <h1>{params.dmname}</h1>
      <h3>{params.id}</h3>
      <p>Hello I am a data manager created by you!</p>
    </div>
  );
}

export default DatamanagerItemDetail;
