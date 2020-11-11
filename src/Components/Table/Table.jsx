import React from "react";
import "../../Styles/Components/table.css";
import TableAdd from "./SubComponents/TableAdd";
import TableList from "./SubComponents/TableList";

function Table({ dataholder }) {
  return (
    <div className="table__container">
      <div className="table__wrapper">
        <div className="table__addwrapper">
          <TableAdd dataholder={dataholder} />
        </div>
        <div className="table__tablebodywrapper">
          <TableList dataholder={dataholder} />
        </div>
      </div>
    </div>
  );
}

export default Table;
