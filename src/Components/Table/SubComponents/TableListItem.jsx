import React, { Component } from "react";
import { RiEditFill, RiDeleteBin6Line } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import {
  updateDataItem,
  deleteDataItem,
} from "../../../Store/Actions/tableActions";
import { notify } from "../../Notification/Notification";

/**
 * React Redux
 */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
/* +++++++++++++++++++ */

class TableListItem extends Component {
  state = {
    fieldname: this.props.fieldname,
    fieldvalue: this.props.fieldvalue,
    updatefieldvalue: this.props.fieldvalue,
    isinEditMode: false,
    DHId: this.props.dataholder.id,
    DHName: this.props.dataholder.DHName,
    DMId: this.props.dataholder.DMId,
    DMName: this.props.dataholder.DMName,
    TotalDF: 0,
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleEdit = () => {
    this.setState({
      isinEditMode: !this.state.isinEditMode,
    });
  };

  handleUpdate = () => {
    if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
      this.setState(
        {
          isinEditMode: !this.state.isinEditMode,
          fieldvalue: this.state.updatefieldvalue,
        },
        () => {
          if (this.state.fieldvalue !== this.props.fieldvalue) {
            this.props.updateDataItem(this.state);
          }
        }
      );
    } else {
      this.setState({
        isinEditMode: !this.state.isinEditMode,
      });
      notify("You do not have enough permission to perform this action.");
    }
  };

  handleDelete = () => {
    this.setState(
      {
        TotalDF: this.props.AD[0].TotalDF - 1,
      },
      () => {
        if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
          this.props.deleteDataItem(this.state);
        } else {
          this.setState({
            isinEditMode: !this.state.isinEditMode,
          });
          notify("You do not have enough permission to perform this action.");
        }
      }
    );
  };

  renderEditView = () => {
    return (
      <>
        <div className="tablelistitem__itemwrapper">
          <textarea
            type="text"
            id="updatefieldvalue"
            defaultValue={this.state.fieldvalue}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="actionbtn__btnwrapper">
          <div className="actionbtn__btn" onClick={this.handleEdit}>
            <span>
              <MdCancel />
            </span>
          </div>
          <div className="actionbtn__btn" onClick={this.handleUpdate}>
            <span>
              <TiTick />
            </span>
          </div>
          <div className="actionbtn__btn" onClick={this.handleDelete}>
            <span>
              <RiDeleteBin6Line />
            </span>
          </div>
        </div>
      </>
    );
  };

  renderDefaultView = () => {
    return (
      <>
        <div className="tablelistitem__itemwrapper">
          <div>{this.state.fieldvalue}</div>
        </div>
        <div className="actionbtn__btnwrapper" onClick={this.handleEdit}>
          <div className="actionbtn__btn">
            <span>
              <RiEditFill />
            </span>
          </div>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="tablelistitem__wrapper">
        <div className="tablelistitem__itemwrapper">
          <span>{this.state.fieldname}</span>
        </div>
        {this.state.isinEditMode
          ? this.renderEditView()
          : this.renderDefaultView()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  const { AD } = state.firestore.ordered;
  return {
    uid: uid,
    AD: AD,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDataItem: (dataitem) => {
      dispatch(updateDataItem(dataitem));
    },
    deleteDataItem: (dataitem) => {
      dispatch(deleteDataItem(dataitem));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    if (props.uid) {
      return [
        {
          collection: "AD",
          doc: "appData",
        },
      ];
    }
    return [];
  })
)(TableListItem);
