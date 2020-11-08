import React from "react";

function DataholderItemList({ dataholders }) {
  return (
    <div>
      {dataholders &&
        dataholders.map((dataholder) => {
          return (
            <div key={dataholder.id}>
              <div>{dataholder.DMName}</div>
              <div>{dataholder.DHName}</div>
            </div>
          );
        })}
    </div>
  );
}

export default DataholderItemList;
