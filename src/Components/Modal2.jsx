import React from "react";

const Modal2 = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className=" p-6 rounded-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-xl ">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal2;
