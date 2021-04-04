import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MessageError() {
  toast.configure();
  toast.error('Não foram encontrados dados para pesquisa');
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default MessageError;
