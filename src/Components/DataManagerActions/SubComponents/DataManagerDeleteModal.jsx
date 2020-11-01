import React, { useEffect, useRef, useCallback } from "react";

import { RiCloseCircleLine } from "react-icons/ri";

import DeleteDataManagerForm from "../../Forms/DeleteDataManagerForm";

function DataManagerDeleteModal({ showModal, openModal, datamanager }) {
  const node = useRef();
  const handleClickOutside = useCallback(
    (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      openModal();
    },
    [openModal]
  );

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, handleClickOutside]);
  return (
    <>
      {showModal ? (
        <div className="datamanagerdelete__container">
          <div ref={node} className="datamanagerdelete__wrapper">
            <div className="datamanagerdelete__closebtnwrapper">
              <div className="datamanagerdelete__closebtn" onClick={openModal}>
                close{" "}
                <span>
                  <RiCloseCircleLine />
                </span>
              </div>
            </div>
            <DeleteDataManagerForm
              datamanager={datamanager}
              openModal={openModal}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DataManagerDeleteModal;
