import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const DropdownContainer = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown-content"
        unmountOnExit
      >
        <div>{children}</div>
      </CSSTransition>
    </div>
  );
};

export default DropdownContainer;
