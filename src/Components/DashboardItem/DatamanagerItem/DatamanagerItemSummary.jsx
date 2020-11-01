import React, { Component } from "react";
import { RiDatabaseLine } from "react-icons/ri";

class DatamanagerItemSummary extends Component {
  render() {
    return (
      <div className="datamanager__item">
        <div className="datamanageritem__content">
          <div className="datamanageritem__title">
            <div className="datamanageritem__titlefirstletter">
              <span>{this.props.datamanager.DMName[0]}</span>
            </div>
            <span>{this.props.datamanager.DMName}</span>
            <span className="datamanageritem__icon">
              <RiDatabaseLine />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DatamanagerItemSummary;
