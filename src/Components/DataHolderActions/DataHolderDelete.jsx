import React, { Component } from "react";
import "../../Styles/Components/dataholderactions.css";

import DataHolderDeleteModal from "./SubComponents/DataHolderDeleteModal";

import { RiDeleteBin6Line } from "react-icons/ri";

class DataHolderDelete extends Component {
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
      <div className="dataholderaction__container">
        <div className="dataholderaction__wrapper">
          <div className="dataholderaction__button" onClick={this.openModal}>
            <span>
              <RiDeleteBin6Line />
            </span>
          </div>
          <DataHolderDeleteModal
            showModal={this.state.showModal}
            openModal={this.openModal}
            dataholder={this.props.dataholder}
          />
        </div>
      </div>
    );
  }
}

export default DataHolderDelete;
