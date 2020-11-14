/**
 * Action create data holder
 */
export const createDataHolder = (dataholder) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();
    const DMName = dataholder.DMName;
    const DMId = dataholder.DMId;

    db.collection("AD").doc("appData").update({
      TotalDH: dataholder.TotalDH,
    });

    db.collection("DM")
      .doc(DMId)
      .collection(DMName)
      .add({ ...dataholder })
      .then(() => {
        dispatch({ type: "CREATE_DATAHOLDER", dataholder });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_DATAHOLDER", err });
      });
  };
};

/**
 * Action delete data manager
 */

export const deleteDataHolder = (dataholder) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();
    const DHdocID = dataholder.DHId;
    const DMId = dataholder.DMId;
    const DMName = dataholder.DMName;

    db.collection("AD").doc("appData").update({
      TotalDH: dataholder.TotalDH,
    });

    db.collection("DM")
      .doc(DMId)
      .collection(DMName)
      .doc(DHdocID)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_DATAHOLDER", dataholder });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_DELETEDATAHOLDER", err });
      });
  };
};
