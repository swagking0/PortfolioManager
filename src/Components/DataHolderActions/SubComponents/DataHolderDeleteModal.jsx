import React, { useEffect, useRef, useCallback } from "react";

import { RiCloseCircleLine } from "react-icons/ri";

import DeleteDataHolderForm from "../../Forms/DeleteDataHolderForm";

function DataHolderDeleteModal({ showModal, openModal, dataholder }) {
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
        <div className="dataholderdelete__container">
          <div ref={node} className="dataholderdelete__wrapper">
            <div className="dataholderdelete__closebtnwrapper">
              <div className="dataholderdelete__closebtn" onClick={openModal}>
                close{" "}
                <span>
                  <RiCloseCircleLine />
                </span>
              </div>
            </div>
            <DeleteDataHolderForm
              dataholder={dataholder}
              openModal={openModal}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DataHolderDeleteModal;
