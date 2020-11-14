import React from "react";
import "../../Styles/Components/analytics.css";

import AnalyticsManager from "./SubComponents/AnalyticsManager";

function Analytics({ ad }) {
  return (
    <div className="analytics__container">
      <div className="analytics__wrapper">
        <AnalyticsManager ad={ad} />
      </div>
    </div>
  );
}

export default Analytics;
