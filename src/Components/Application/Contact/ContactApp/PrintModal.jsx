import React, { Fragment, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { Cancel, Print, PrintViews } from "../../../../Constant";
import PrintPreview from "../PrintPreview";

const PrintModal = ({ printmodal, selectedUser, toggleCallback }) => {
  const printModalToggle = () => {
    toggleCallback(false);
  };

  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <Fragment>
      <Modal isOpen={printmodal} toggle={printModalToggle}>
        <ModalHeader toggle={printModalToggle}>{PrintViews}</ModalHeader>
        <ModalBody className="list-persons">
          <div ref={contentRef}>
            <PrintPreview selectedUser={selectedUser} />
          </div>
          <Btn attrBtn={{ color: "secondary", className: "me-1", onClick: handlePrint }}>{Print}</Btn>
          <Btn attrBtn={{ color: "primary", onClick: printModalToggle }}>{Cancel}</Btn>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default PrintModal;
