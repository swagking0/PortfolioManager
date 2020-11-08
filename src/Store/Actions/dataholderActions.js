/**
 * Action create data holder
 */

export const createDataHolder = (dataholder) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();
    const DMName = dataholder.DMName;
    const DMId = dataholder.DMId;

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
