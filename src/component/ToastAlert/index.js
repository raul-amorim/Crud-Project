import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastAlert = ({ open, mensagem }) => {
    return (
        <div>
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