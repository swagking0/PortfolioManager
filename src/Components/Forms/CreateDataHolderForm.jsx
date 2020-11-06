import React, { Component } from "react";
import "../../Styles/Components/form.css";

class CreateDataHolderForm extends Component {
  state = {
    DMName: this.props.dmname,
    DHName: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
            <label htmlFor="DMName">data holder name</label>
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

export default CreateDataHolderForm;
