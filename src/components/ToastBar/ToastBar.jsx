import React from 'react';
import ToastBarIcon from './ToastBarIcon';
import ToastBarMessage from './ToastBarMessage';

const ToastBar = () => {
  return (
    <div className="fixed right-4 top-30 ">
      <ToastBarIcon />
      <ToastBarMessage />
    </div>
  );
};

export default ToastBar;
