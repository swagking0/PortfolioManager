import React, { Component } from "react";
import "../../Styles/Components/form.css";
import { notify } from "../Notification/Notification";

/**
 * Importing actions here
 */
import { deleteDataManager } from "../../Store/Actions/datamanagerActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
/* +++++++++++++++++++ */

class DeleteDataManagerForm extends Component {
  state = {
    DMId: "",
    DMName: this.props.datamanager.DMName,
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
      if (this.state.DMId === this.props.datamanager.id) {
        this.props.deleteDataManager(this.state);
      } else {
        notify("Entered ID is worng. Please, try again.");
      }
    } else {
      notify("You do not have enough permission to perform this action.");
    }
    this.props.openModal();
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
                {this.props.datamanager.DMName}
              </span>{" "}
              data manager?
            </p>
          </div>
          <div className="form__informationfield">
            <p>
              copy the id below{" "}
              <span className="form__infohighlighter">
                {this.props.datamanager.id}
              </span>{" "}
              to confirm
            </p>
          </div>
          <div className="form__textfield">
            <input
              type="text"
              id="DMId"
              required
              onChange={this.handleOnChange}
            />
            <label htmlFor="DMId">data manager id</label>
          </div>
          <div className="form__informationfield">
            <p>
              <span className="form__infohighlighter">Note:</span> all the data
              holders within data manager{" "}
              <span className="form__infohighlighter">
                {this.props.datamanager.DMName}
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
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDataManager: (datamanager) => {
      dispatch(deleteDataManager(datamanager));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteDataManagerForm);
