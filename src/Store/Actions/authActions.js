/**
 * Action login
 */

export const logIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "LOG_IN" });
      })
      .catch((err) => {
        dispatch({ type: "LOG_IN_ERROR", err });
      });
  };
};

/**
 * Action logout
 */

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((err) => {
        dispatch({ type: "LOG_OUT_ERROR", err });
      });
  };
};
