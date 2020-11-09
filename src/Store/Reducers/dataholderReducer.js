import { notify } from "../../Components/Notification/Notification";

const initState = {};

function dataholderReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_DATAHOLDER":
      notify("data holder created successfully.");
      return state;
    case "ERROR_DATAHOLDER":
      notify(action.err.message);
      return state;
    case "DELETE_DATAHOLDER":
      notify("data holder delected successfully.");
      return state;
    case "ERROR_DELETEDATAHOLDER":
      notify(action.err.message);
      return state;
    default:
      return state;
  }
}

export default dataholderReducer;
