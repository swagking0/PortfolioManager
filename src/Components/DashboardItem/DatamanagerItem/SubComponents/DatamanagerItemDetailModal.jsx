import React, { useEffect, useRef, useCallback } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import CreateDataHolderForm from "../../../Forms/CreateDataHolderForm";

function DatamanagerItemDetailModal({ showModal, openModal, dmname }) {
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
        <div className="datamanageritemdetailmodal__container">
          <div ref={node} className="datamanageritemdetailmodal__wrapper">
            <div className="datamanageritemdetailmodal__closebtnwrapper">
              <div
                className="datamanageritemdetailmodal__closebtn"
                onClick={openModal}
              >
                close{" "}
                <span>
                  <RiCloseCircleLine />
                </span>
              </div>
            </div>
            <CreateDataHolderForm openModal={openModal} dmname={dmname} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DatamanagerItemDetailModal;
