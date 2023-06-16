import React from "react";
import "./style.css";

const Modal = ({ active, setActive, className, children }) => {
  const modalContentClassName = `modal__content ${className}`;
  return (
    <div
      className={active ? "modal active " : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={modalContentClassName}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="exit-button" onClick={() => setActive(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
