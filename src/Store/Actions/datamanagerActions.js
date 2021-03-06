/**
 * Action create data manager
 */

export const createDataManager = (datamanager) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();

    db.collection("AD").doc("appData").update({
      TotalDM: datamanager.TotalDM,
    });

    db.collection("DM")
      .add({
        ...datamanager,
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
    const docDBName = datamanager.DMName;

    db.collection("AD").doc("appData").update({
      TotalDM: datamanager.TotalDM,
    });

    db.collection("DM")
      .doc(docID)
      .collection(docDBName)
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      });

    db.collection("DM")
      .doc(docID)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_DATAMANAGER", datamanager });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_DELETEDATAMANAGER", err });
      });
  };
};
