import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import datamanagerReducer from "./datamanagerReducer";
import dataholderReducer from "./dataholderReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  datamanager: datamanagerReducer,
  dataholder: dataholderReducer,
});

export default rootReducer;
