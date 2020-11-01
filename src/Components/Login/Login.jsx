import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../Styles/Components/login.css";

import IntroBrand from "./SubComponents/IntroBrand";
import LoginForm from "../Forms/LoginForm";

/**
 * React Redux
 */
import { connect } from "react-redux";
/* ++++++++++++++++++ */

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    const { uid } = this.props;
    if (uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login__container">
        <div className="login__wrapper">
          <div className="login__leftwrapper">
            <IntroBrand />
          </div>
          <div className="login__rightwrapper">
            <div className="loginright__loginformwrapper">
              <div className="loginright__loginformtitlewrapper">
                <h3>login</h3>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(Login);
