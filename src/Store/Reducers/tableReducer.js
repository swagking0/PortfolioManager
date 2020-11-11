import { notify } from "../../Components/Notification/Notification";

const initState = {};

function tableReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_DATAITEM":
      notify("new data field created successfully.");
      return state;
    case "ERROR_DATAITEM":
      notify(action.err.message);
      return state;
    case "UPDATE_DATAITEM":
      notify("data field updated successfully.");
      return state;
    case "ERROR_UPDATEDATAITEM":
      notify(action.err.message);
      return state;
    case "DELETE_DATAITEM":
      notify("data field deleted successfully.");
      return state;
    case "ERROR_DELETEDATAITEM":
      notify(action.err.message);
      return state;
    default:
      return state;
  }
}

export default tableReducer;
