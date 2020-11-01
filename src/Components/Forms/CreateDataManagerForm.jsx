import React, { Component } from "react";
import "../../Styles/Components/form.css";

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
    this.props.createDataManager(this.state);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createDataManager: (datamanager) =>
      dispatch(createDataManager(datamanager)),
  };
};

export default connect(null, mapDispatchToProps)(CreateDataManagerForm);
