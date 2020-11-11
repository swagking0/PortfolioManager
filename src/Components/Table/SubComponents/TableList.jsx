import React from "react";
import TableListItem from "./TableListItem";

function TableList({ dataholder }) {
  return (
    <div className="tablelist__container">
      <div className="tablelist__wrapper">
        {Object.keys(dataholder)
          .filter((dataitem) => dataitem.includes("Field_"))
          .map((key) => {
            return (
              <TableListItem
                key={key}
                fieldname={key}
                fieldvalue={dataholder[key]}
                dataholder={dataholder}
              />
            );
          })}
      </div>
    </div>
  );
}

export default TableList;
