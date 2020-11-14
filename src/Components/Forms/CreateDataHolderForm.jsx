import React, { Component } from "react";
import "../../Styles/Components/form.css";
import { notify } from "../Notification/Notification";

/**
 * Importing actions here
 */
import { createDataHolder } from "../../Store/Actions/dataholderActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
/* +++++++++++++++++++ */

class CreateDataHolderForm extends Component {
  state = {
    DMName: this.props.dmname,
    DMId: this.props.dmid,
    DHName: "",
    TotalDH: 0,
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
        TotalDH: this.props.AD[0].TotalDH + 1,
      },
      () => {
        if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
          this.props.createDataHolder(this.state);
        } else {
          notify("You do not have enough permission to perform this action.");
        }
        this.props.openModal();
      }
    );
  };

  render() {
    return (
      <div className="form__wrapper">
        <form
          className="form__formmain"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form__textfield">
            <input
              type="text"
              id="DHName"
              required
              onChange={this.handleOnChange}
            />
            <label htmlFor="DHName">data holder name</label>
          </div>
          <div className="form__btnwrapper">
            <input type="submit" value="create" />
            <input type="reset" />
          </div>
        </form>
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
    createDataHolder: (dataholder) => {
      dispatch(createDataHolder(dataholder));
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
)(CreateDataHolderForm);
