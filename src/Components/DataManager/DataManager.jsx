import React, { Component } from "react";
import "../../Styles/Components/datamanager.css";

import { MdCreateNewFolder } from "react-icons/md";

import DataManagerModal from "./SubComponents/DataManagerModal";

class DataManager extends Component {
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
      <div className="datamanager__container">
        <div className="datamanager__wrapper">
          <div className="datamanager__button" onClick={this.openModal}>
            create data manager
            <span>
              <MdCreateNewFolder />
            </span>
          </div>
          <DataManagerModal
            showModal={this.state.showModal}
            openModal={this.openModal}
          />
        </div>
      </div>
    );
  }
}

export default DataManager;
