import React, { Component } from "react";

import SkeletonDatamanagerItem from "../../Skeletons/SubComponents/SkeletonDatamanagerItem";
import DataManager from "../../DataManager/DataManager";
import DatamanagerItemList from "../../DashboardItem/DatamanagerItem/DatamanagerItemList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class DashboardManager extends Component {
  render() {
    const { dm } = this.props;
    const getlastLength = JSON.parse(localStorage.getItem("lastLength"));
    return (
      <div className="dashboardmanager__container">
        <div className="dashboardmanager__wrapper">
          <div className="dashboardmanager__manageritemwrapper">
            <div className="datamanageritem__wrapper">
              <DataManager />
              {dm && <DatamanagerItemList datamanagers={dm} />}
              <div className="datamanager__skeletonholder">
                {!dm &&
                  [...Array(getlastLength).keys()].map((n) => (
                    <SkeletonDatamanagerItem key={n} />
                  ))}
              </div>
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
    dm: state.firestore.ordered.DM,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (props.uid) {
      return [{ collection: "DM" }];
    }
    return [];
  })
)(DashboardManager);
