import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../Styles/Components/dashboard.css";

import DashboardManager from "./SubComponents/DashboardManager";

/**
 * React Redux
 */
import { connect } from "react-redux";
/* ++++++++++++++++++ */

class Dashboard extends Component {
  state = {
    managerName: "personal data",
  };
  render() {
    const { uid } = this.props;

    if (!uid) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="dashboard__container">
        <div className="dashboard__wrapper">
          <div className="dashboard__dashboardmanagerwrapper">
            <DashboardManager />
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

export default connect(mapStateToProps)(Dashboard);
