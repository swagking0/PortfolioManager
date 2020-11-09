import React from "react";
import Accordion from "../Accordion/Accordion";

function DataholderItemList({ dataholders }) {
  return (
    <div className="dataholderitemlist__wrapper">
      {dataholders &&
        dataholders.map((dataholder) => {
          return (
            <div key={dataholder.id}>
              <Accordion dataholder={dataholder} />
            </div>
          );
        })}
    </div>
  );
}

export default DataholderItemList;
