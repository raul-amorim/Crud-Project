import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const ModalForm = ({ children, isOpen }) => {

  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        {children}
      </ModalBody>
    </Modal>
  );
}

export default ModalForm;