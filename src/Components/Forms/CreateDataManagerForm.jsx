import React, { Component } from "react";
import "../../Styles/Components/form.css";
import { notify } from "../Notification/Notification";

/**
 * Importing actions here
 */
import { createDataManager } from "../../Store/Actions/datamanagerActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
/* +++++++++++++++++++ */

class CreateDataManagerForm extends Component {
  state = {
    DMName: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
      this.props.createDataManager(this.state);
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
          <div className="form__textfield">
            <input
              type="text"
              id="DMName"
              required
              onChange={this.handleOnChange}
            />
            <label htmlFor="DMName">data manager name</label>
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
  return {
    uid: uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createDataManager: (datamanager) =>
      dispatch(createDataManager(datamanager)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDataManagerForm);
