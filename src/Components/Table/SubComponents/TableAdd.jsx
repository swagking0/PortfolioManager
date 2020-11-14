import React, { Component } from "react";
import { notify } from "../../Notification/Notification";

/**
 * Importing actions here
 */
import { createDataItem } from "../../../Store/Actions/tableActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
/* +++++++++++++++++++ */

class TableAdd extends Component {
  state = {
    field: "",
    value: "",
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        TotalDF: this.props.AD[0].TotalDF + 1,
      },
      () => {
        if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
          this.props.createDataItem(this.state);
        } else {
          notify("You do not have enough permission to perform this action.");
        }
      }
    );
    e.target.reset();
  };

  render() {
    return (
      <div className="tableadd__container">
        <div className="tableadd__wrapper">
          <form
            className="tableadd__formmain"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <div className="tableadd__textfield">
              <input
                type="text"
                id="field"
                required
                onChange={this.handleOnChange}
              />
              <label htmlFor="field">field name</label>
            </div>
            <div className="tableadd__textfield">
              <textarea
                type="text"
                id="value"
                required
                onChange={this.handleOnChange}
              />
              <label htmlFor="value">value</label>
            </div>
            <input type="submit" value="add" />
          </form>
        </div>
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
    createDataItem: (dataitem) => {
      dispatch(createDataItem(dataitem));
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
)(TableAdd);
