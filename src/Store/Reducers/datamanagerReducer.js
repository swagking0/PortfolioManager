const initState = {};

function datamanagerReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_DATAMANAGER":
      return state;
    case "ERROR_DATAMANAGER":
      return state;
    case "DELETE_DATAMANAGER":
      return state;
    case "ERROR_DELETEDATAMANAGER":
      return state;
    default:
      return state;
  }
}

export default datamanagerReducer;
