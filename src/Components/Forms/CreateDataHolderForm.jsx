import React, { Component } from "react";
import "../../Styles/Components/form.css";

/**
 * Importing actions here
 */
import { createDataHolder } from "../../Store/Actions/dataholderActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
/* +++++++++++++++++++ */

class CreateDataHolderForm extends Component {
  state = {
    DMName: this.props.dmname,
    DMId: this.props.dmid,
    DHName: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createDataHolder(this.state);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createDataHolder: (dataholder) => {
      dispatch(createDataHolder(dataholder));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateDataHolderForm);
