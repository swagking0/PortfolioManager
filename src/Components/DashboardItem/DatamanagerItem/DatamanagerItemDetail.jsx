import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../../Styles/Components/datamanageritemdetail.css";
import { FaSitemap } from "react-icons/fa";

import DatamanagerItemDetailModal from "./SubComponents/DatamanagerItemDetailModal";

import DataholderItemList from "../../DataHolderItem/DataholderItemList";

/**
 * React Redux
 */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
/* ++++++++++++++++++ */

class DatamanagerItemDetail extends Component {
  state = {
    showModal: false,
    dmname: this.props.match.params.dmname,
    dmid: this.props.match.params.id,
  };

  openModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { uid, dh } = this.props;

    if (!uid) {
      return <Redirect to="/about" />;
    }

    return (
      <div className="datamanageritemdetail__container">
        <div className="datamanageritemdetail__wrapper">
          <div className="datamanageritemdetail__btnwrapper">
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
              dmid={this.state.dmid}
            />
          </div>
          <div className="datamanageritemdetail__displaywrapper">
            {dh && <DataholderItemList dataholders={dh} />}
            <div>{!dh && "Loding..."}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const uid = state.firebase.auth.uid;
  const { dmname, id } = ownProps.match.params;
  let dhname = "DHData_" + id;
  const dh = state.firestore.ordered[dhname];
  return {
    uid: uid,
    dmname: dmname,
    dmid: id,
    dh: dh,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (props.uid) {
      return [
        {
          collection: "DM",
          doc: props.dmid,
          subcollections: [{ collection: props.dmname }],
          storeAs: "DHData_" + props.dmid,
        },
      ];
    }
    return [];
  })
)(DatamanagerItemDetail);
