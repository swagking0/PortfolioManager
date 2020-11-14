import React, { Component } from "react";
import "../../Styles/Components/form.css";
import { notify } from "../Notification/Notification";

/**
 * Importing actions here
 */
import { deleteDataHolder } from "../../Store/Actions/dataholderActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
/* +++++++++++++++++++ */

class DeleteDataHolderForm extends Component {
  state = {
    DHId: "",
    DHName: this.props.dataholder.DHName,
    DMId: this.props.dataholder.DMId,
    DMName: this.props.dataholder.DMName,
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
        TotalDH: this.props.AD[0].TotalDH - 1,
      },
      () => {
        if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
          if (this.state.DHId === this.props.dataholder.id) {
            this.props.deleteDataHolder(this.state);
          } else {
            notify("Entered ID is worng. Please, try again.");
          }
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
          <div className="form__informationfield">
            <p>
              are you sure that you want to delete{" "}
              <span className="form__infohighlighter">
                {this.props.dataholder.DHName}
              </span>{" "}
              data holder?
            </p>
          </div>
          <div className="form__informationfield">
            <p>
              copy the id below{" "}
              <span className="form__infohighlighter">
                {this.props.dataholder.id}
              </span>{" "}
              to confirm
            </p>
          </div>
          <div className="form__textfield">
            <input
              type="text"
              id="DHId"
              required
              onChange={this.handleOnChange}
            />
            <label htmlFor="DHId">data holder id</label>
          </div>
          <div className="form__informationfield">
            <p>
              <span className="form__infohighlighter">Note:</span> all the data
              within data holder{" "}
              <span className="form__infohighlighter">
                {this.props.dataholder.DHName}
              </span>{" "}
              will be deleted permanently
            </p>
          </div>
          <div className="form__btnwrapper">
            <input type="submit" value="delete" />
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
    deleteDataHolder: (dataholder) => {
      dispatch(deleteDataHolder(dataholder));
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
)(DeleteDataHolderForm);
