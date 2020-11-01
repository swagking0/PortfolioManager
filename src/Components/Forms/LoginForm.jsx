import React, { Component } from "react";
import "../../Styles/Components/form.css";

/**
 *  Importing actions here
 */
import { logIn } from "../../Store/Actions/authActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
/* ++++++++++++++++++ */

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    return (
      <div className="form__formwrapper">
        <form
          className="form__formmain"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form__textfield">
            <input
              type="text"
              id="email"
              required
              onChange={this.handleOnChange}
            />
            <label htmlFor="email">email</label>
          </div>
          <div className="form__textfield">
            <input
              type="password"
              id="password"
              required
              onChange={this.handleOnChange}
            />
            <label htmlFor="password">password</label>
          </div>
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (creds) => dispatch(logIn(creds)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
