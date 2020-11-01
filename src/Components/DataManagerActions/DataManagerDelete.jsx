import React, { Component } from "react";
import "../../Styles/Components/datamanageractions.css";

import DataManagerDeleteModal from "./SubComponents/DataManagerDeleteModal";

import { RiDeleteBin6Line } from "react-icons/ri";

class DataManagerDelete extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div className="datamanageraction__container">
        <div className="datamanageraction__wrapper">
          <div className="datamanageraction__button" onClick={this.openModal}>
            <span>
              <RiDeleteBin6Line />
            </span>
          </div>
          <DataManagerDeleteModal
            showModal={this.state.showModal}
            openModal={this.openModal}
            datamanager={this.props.datamanager}
          />
        </div>
      </div>
    );
  }
}

export default DataManagerDelete;
