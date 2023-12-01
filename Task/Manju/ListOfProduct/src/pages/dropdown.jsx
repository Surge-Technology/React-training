import React, { useState } from "react";
import "./dropdown.css";


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : "Select an option"}
        <i className={`arrow ${isOpen ? "up" : "down"}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-menu-item" onClick={() => handleOptionSelect("Option 1")}>
            Option 1
          </div>
          <div className="dropdown-menu-item" onClick={() => handleOptionSelect("Option 2")}>
            Option 2
          </div>
          <div className="dropdown-menu-item" onClick={() => handleOptionSelect("Option 3")}>
            Option 3
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
