import React, { Component } from "react";
import { notify } from "../../Notification/Notification";

/**
 * Importing actions here
 */
import { createDataItem } from "../../../Store/Actions/tableActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
/* +++++++++++++++++++ */

class TableAdd extends Component {
  state = {
    field: "",
    value: "",
    DHId: this.props.dataholder.id,
    DHName: this.props.dataholder.DHName,
    DMId: this.props.dataholder.DMId,
    DMName: this.props.dataholder.DMName,
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.uid !== "9ALPoJY04RRCBqGnHzeB0qU1FzJ3") {
      this.props.createDataItem(this.state);
    } else {
      notify("You do not have enough permission to perform this action.");
    }
    e.target.reset();
  };

  render() {
    return (
      <div className="tableadd__container">
        <div className="tableadd__wrapper">
          <form
            className="tableadd__formmain"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <div className="tableadd__textfield">
              <input
                type="text"
                id="field"
                required
                onChange={this.handleOnChange}
              />
              <label htmlFor="field">field name</label>
            </div>
            <div className="tableadd__textfield">
              <textarea
                type="text"
                id="value"
                required
                onChange={this.handleOnChange}
              />
              <label htmlFor="value">value</label>
            </div>
            <input type="submit" value="add" />
          </form>
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
    createDataItem: (dataitem) => {
      dispatch(createDataItem(dataitem));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableAdd);
