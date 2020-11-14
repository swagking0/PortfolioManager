import React, { Component } from "react";
import AnalyticsCard from "./AnalyticsCard";

class AnalyticsManager extends Component {
  handleZero = (ln) => {
    if (ln < 10) {
      return "0" + ln;
    } else {
      return ln;
    }
  };

  render() {
    return (
      <div className="analyticsmanager__wrapper">
        {this.props.ad && (
          <>
            <AnalyticsCard
              cardTitle="total data managers"
              statusTitle="active"
              value={this.handleZero(this.props.ad[0].TotalDM)}
            />
            <AnalyticsCard
              cardTitle="total data holders"
              statusTitle="active"
              value={this.handleZero(this.props.ad[0].TotalDH)}
            />
            <AnalyticsCard
              cardTitle="total data fields"
              statusTitle="active"
              value={this.handleZero(this.props.ad[0].TotalDF)}
            />
          </>
        )}
        {!this.props.ad && "loading..."}
      </div>
    );
  }
}

export default AnalyticsManager;
