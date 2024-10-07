import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Completed({ valid }) {
  const notify = () => toast('Formulario enviado com sucesso!');
  return (
    <div>
      {' '}
      <div>
        <button onClick={notify}>Submit</button>
        <ToastContainer />
      </div>
    </div>
  );
}
