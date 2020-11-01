import React from "react";
import ReactDOM from "react-dom";

import "./Styles/index.css";

import App from "./App";
import Loader from "./Components/Loader/Loader";

/**
 * Redux imports here
 */
import { createStore, applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./Config/firebaseConfig";
import { createFirestoreInstance } from "redux-firestore";
import { isLoaded } from "react-redux-firebase";
/* ++++++++++++++++++++++++++  */

/**
 * rootReducer import here
 */
import rootReducer from "./Store/Reducers/rootReducer";

/**
 * Redux code here
 */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);
/* +++++++++++++++++++++++++ */

/**
 * React Redux Firebase code here
 */
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};
/* ++++++++++++++++++++++++ */

/**
 * Cheacking auth is loaded
 */
const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  }
  return children;
};

const RootComponent = (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(RootComponent, document.getElementById("root"));
