import React, { Component } from "react";
import "../../../Styles/Components/datamanageritemdetail.css";
import { FaSitemap } from "react-icons/fa";

import DatamanagerItemDetailModal from "./SubComponents/DatamanagerItemDetailModal";

class DatamanagerItemDetail extends Component {
  state = {
    showModal: false,
    dmname: this.props.match.params.dmname,
  };

  openModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div className="datamanageritemdetail__container">
        <div className="datamanageritemdetail__wrapper">
          <div
            className="datamanageritemdetail__button"
            onClick={this.openModal}
          >
            create data holder{" "}
            <span>
              <FaSitemap />
            </span>
          </div>
          <DatamanagerItemDetailModal
            showModal={this.state.showModal}
            openModal={this.openModal}
            dmname={this.state.dmname}
          />
        </div>
      </div>
    );
  }
}

export default DatamanagerItemDetail;
