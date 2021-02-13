import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import './index.css';

const ToastAlert = ({ open, mensagem }) => {
    return (
        <div className="toastr">
          <div className="p-3 my-2 rounded">
            <Toast isOpen={open}>
              <ToastBody>
                {mensagem}
              </ToastBody>
            </Toast>
          </div>
        </div>
  );
};

export default ToastAlert;