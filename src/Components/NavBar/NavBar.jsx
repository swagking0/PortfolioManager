import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../../Styles/Components/navbar.css";
import SubNavBar from "./SubComponents/SubNavBar";

import { RiCloseFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

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
  state = {
    showSideBar: false,
  };

  handleSideBar = () => {
    this.setState({
      showSideBar: !this.state.showSideBar,
    });
  };

  handleLogOut = () => {
    this.setState(
      {
        showSideBar: !this.state.showSideBar,
      },
      () => {
        this.props.logOut();
      }
    );
  };

  render() {
    const { uid } = this.props;

    return (
      <div className="navbar__container">
        <div className="navbar__wrapper">
          <div className="navbar__logowrapper">
            <NavLink to={uid ? "/" : "/about"} className="navbar__logo">
              <span>profile manager.</span>
            </NavLink>
          </div>
          <div
            className="navbar__sidemenuopenwrapper"
            onClick={this.handleSideBar}
          >
            <span>
              {this.state.showSideBar ? (
                <RiCloseFill />
              ) : (
                <HiOutlineDotsHorizontal />
              )}
            </span>
          </div>
          <SubNavBar
            showSideBar={this.state.showSideBar}
            handleSideBar={this.handleSideBar}
            uid={uid}
            handleLogOut={this.handleLogOut}
          />
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
