import { notify } from "../../Components/Notification/Notification";

const initState = {};

function datamanagerReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_DATAMANAGER":
      notify("data manager created successfully.");
      return state;
    case "ERROR_DATAMANAGER":
      notify(action.err.message);
      return state;
    case "DELETE_DATAMANAGER":
      notify("data manager delected successfully.");
      return state;
    case "ERROR_DELETEDATAMANAGER":
      notify(action.err.message);
      return state;
    default:
      return state;
  }
}

export default datamanagerReducer;
