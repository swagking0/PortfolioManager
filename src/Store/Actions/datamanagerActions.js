/**
 * Action create data manager
 */

export const createDataManager = (datamanager) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();

    db.collection("DM")
      .doc(datamanager.DMName)
      .set({
        ...datamanager,
      });

    db.collection(datamanager.DMName)
      .add({
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_DATAMANAGER", datamanager });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_DATAMANAGER", err });
      });
  };
};

/**
 * Action delete data manager
 */

export const deleteDataManager = (datamanager) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();
    const docID = datamanager.DMId;

    db.collection("DM").doc(docID).delete();

    db.collection(docID)
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
        dispatch({ type: "DELETE_DATAMANAGER", docID });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_DELETEDATAMANAGER", err });
      });
  };
};
