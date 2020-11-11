import React, { useState } from "react";
import "../../Styles/Components/accordion.css";

import DataHolderDelete from "../DataHolderActions/DataHolderDelete";
import Table from "../Table/Table";

import { GiDatabase } from "react-icons/gi";

function Accordion({ dataholder }) {
  const [activeClass, setactiveClass] = useState(false);

  const openAccordion = () => {
    setactiveClass(!activeClass);
  };

  return (
    <div className="accordion__container">
      <div className="accordion__wrapper">
        <div
          className={`accordion__accordionbtn ${activeClass ? "active" : null}`}
          onClick={openAccordion}
        >
          <div className="accordionbtn__contentwrapper">
            <div className="accordionbtncontent__holdertitle">
              {dataholder.DHName}
            </div>
            <div
              className={`accordionbtncontent__holderlocation ${
                activeClass ? "active" : null
              }`}
            >
              <span>
                <GiDatabase />
              </span>
              /{dataholder.DMName}/{dataholder.DHName}
            </div>
          </div>
        </div>
        <div className="accordion__actionwrapper">
          <DataHolderDelete dataholder={dataholder} />
        </div>
      </div>
      <div
        className={`accordion__accordionpanel ${activeClass ? "active" : null}`}
      >
        <Table dataholder={dataholder} />
      </div>
    </div>
  );
}

export default Accordion;
