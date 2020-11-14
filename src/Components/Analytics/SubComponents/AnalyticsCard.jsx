import React from "react";

function AnalyticsCard({ cardTitle, statusTitle, value }) {
  return (
    <div className="analyticscard__container">
      <div className="analyticscard__wrapper">
        <div className="analyticscard__titlewrapper">
          <span>{cardTitle}</span>
          <div className="analyticscard__indicator"></div>
        </div>
        <div className="analyticscard__contentwrapper">
          <div className="analyticscard__statustitlewrapper">
            <span>{statusTitle}</span>
          </div>
          <div className="analyticscard__analyticsvaluewrapper">
            <span>{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;
