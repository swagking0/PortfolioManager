import React, { useEffect, useRef, useCallback } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import CreateDataManagerForm from "../../Forms/CreateDataManagerForm";

function DataManagerModal({ showModal, openModal }) {
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
        <div className="datamanagermodal__container">
          <div ref={node} className="datamanagermodal__wrapper">
            <div className="datamanagermodal__closebtnwrapper">
              <div className="datamanagermodal__closebtn" onClick={openModal}>
                close{" "}
                <span>
                  <RiCloseCircleLine />
                </span>
              </div>
            </div>
            <CreateDataManagerForm openModal={openModal} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DataManagerModal;
