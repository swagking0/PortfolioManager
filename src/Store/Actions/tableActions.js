/**
 * Action create data item
 */
export const createDataItem = (dataitem) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();
    const ActiveDHId = dataitem.DHId;
    const ActiveDHName = dataitem.DHName;
    const ActiveDMId = dataitem.DMId;
    const ActiveDMName = dataitem.DMName;
    const SetField = "Field_" + dataitem.field;
    const SetValue = dataitem.value;

    db.collection("DM")
      .doc(ActiveDMId)
      .collection(ActiveDMName)
      .doc(ActiveDHId)
      .update({
        DHId: ActiveDHId,
        DHName: ActiveDHName,
        DMId: ActiveDMId,
        DMName: ActiveDMName,
        [SetField.split(" ").join("")]: SetValue,
      })
      .then(() => {
        dispatch({ type: "CREATE_DATAITEM", dataitem });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_DATAITEM", err });
      });
  };
};

/**
 * Action update data item
 */

export const updateDataItem = (dataitem) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();
    const ActiveDHId = dataitem.DHId;
    const ActiveDMId = dataitem.DMId;
    const ActiveDMName = dataitem.DMName;
    const UpdateFieldName = dataitem.fieldname;
    const UpdateFieldValue = dataitem.fieldvalue;

    db.collection("DM")
      .doc(ActiveDMId)
      .collection(ActiveDMName)
      .doc(ActiveDHId)
      .update({
        [UpdateFieldName]: UpdateFieldValue,
      })
      .then(() => {
        dispatch({ type: "UPDATE_DATAITEM", dataitem });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_UPDATEDATAITEM", err });
      });
  };
};

/**
 * Action delete data item
 */

export const deleteDataItem = (dataitem) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const db = firebase.firestore();
    const ActiveDHId = dataitem.DHId;
    const ActiveDMId = dataitem.DMId;
    const ActiveDMName = dataitem.DMName;
    const UpdateFieldName = dataitem.fieldname;

    db.collection("DM")
      .doc(ActiveDMId)
      .collection(ActiveDMName)
      .doc(ActiveDHId)
      .update({
        [UpdateFieldName]: firebase.firestore.FieldValue.delete(),
      })
      .then(() => {
        dispatch({ type: "DELETE_DATAITEM", dataitem });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_DELETEDATAITEM", err });
      });
  };
};
