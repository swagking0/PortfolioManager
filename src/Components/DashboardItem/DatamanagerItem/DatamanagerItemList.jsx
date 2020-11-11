import React, { useState } from "react";

import DataManagerDelete from "../../DataManagerActions/DataManagerDelete";
import DatamanagerItemSummary from "./DatamanagerItemSummary";

import { Link } from "react-router-dom";

function DatamanagerItemList({ datamanagers }) {
  const [lastLength] = useState(datamanagers.length ? datamanagers.length : 5);

  const storelastlenght = () => {
    localStorage.setItem("lastLength", JSON.stringify(lastLength));
  };

  return (
    <div className="datamanager__itemholder">
      {datamanagers &&
        datamanagers.map((datamanager) => {
          storelastlenght();
          return (
            <div className="datamanager__itemwrapper" key={datamanager.id}>
              <Link
                to={"/datamanager/" + datamanager.id + "/" + datamanager.DMName}
              >
                <DatamanagerItemSummary datamanager={datamanager} />
              </Link>
              <DataManagerDelete datamanager={datamanager} />
            </div>
          );
        })}
    </div>
  );
}

export default DatamanagerItemList;
