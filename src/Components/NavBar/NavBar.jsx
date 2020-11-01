import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../../Styles/Components/navbar.css";

import SignedInLinks from "./SubComponents/SignedInLinks";
import SignedOutLinks from "./SubComponents/SignedOutLinks";

/**
 *  Importing actions here
 */
import { logOut } from "../../Store/Actions/authActions";
/* +++++++++++++++++++ */

/**
 * React Redux import here
 */
import { connect } from "react-redux";
/* ++++++++++++++++++ */

class NavBar extends Component {
  handleLogOut = () => {
    this.props.logOut();
  };

  render() {
    const { uid } = this.props;
    const links = uid ? (
      <SignedInLinks handleLogOut={this.handleLogOut} />
    ) : (
      <SignedOutLinks />
    );
    return (
      <div className="navbar__container">
        <div className="navbar__wrapper">
          <div className="navbar__leftwrapper">
            <NavLink exact to="/">
              <div className="navbar__logowrapper">
                <h2 className="navbar__brandlogo">profile manager.</h2>
              </div>
            </NavLink>
          </div>
          <div className="navbar__rightwrapper">{links}</div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
