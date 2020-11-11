import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import datamanagerReducer from "./datamanagerReducer";
import dataholderReducer from "./dataholderReducer";
import tableReducer from "./tableReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  datamanager: datamanagerReducer,
  dataholder: dataholderReducer,
  table: tableReducer,
});

export default rootReducer;
