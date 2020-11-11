import React, { Component } from "react";
import "../../Styles/Components/form.css";

/**
 * Importing actions here
 */
import { deleteDataHolder } from "../../Store/Actions/dataholderActions";
/* +++++++++++++++++++ */

/**
 * React Redux
 */
import { connect } from "react-redux";
/* +++++++++++++++++++ */

class DeleteDataHolderForm extends Component {
  state = {
    DHId: "",
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
    if (this.state.DHId === this.props.dataholder.id) {
      this.props.deleteDataHolder(this.state);
      this.props.openModal();
    }
  };

  render() {
    return (
      <div className="form__wrapper">
        <form
          className="form__formmain"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form__informationfield">
            <p>
              are you sure that you want to delete{" "}
              <span className="form__infohighlighter">
                {this.props.dataholder.DHName}
              </span>{" "}
              data holder?
            </p>
          </div>
          <div className="form__informationfield">
            <p>
              copy the id below{" "}
              <span className="form__infohighlighter">
                {this.props.dataholder.id}
              </span>{" "}
              to confirm
            </p>
          </div>
          <div className="form__textfield">
            <input
              type="text"
              id="DHId"
              required
              onChange={this.handleOnChange}
            />
            <label htmlFor="DHId">data holder id</label>
          </div>
          <div className="form__informationfield">
            <p>
              <span className="form__infohighlighter">Note:</span> all the data
              within data holder{" "}
              <span className="form__infohighlighter">
                {this.props.dataholder.DHName}
              </span>{" "}
              will be deleted permanently
            </p>
          </div>
          <div className="form__btnwrapper">
            <input type="submit" value="delete" />
            <input type="reset" />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDataHolder: (dataholder) => {
      dispatch(deleteDataHolder(dataholder));
    },
  };
};

export default connect(null, mapDispatchToProps)(DeleteDataHolderForm);
