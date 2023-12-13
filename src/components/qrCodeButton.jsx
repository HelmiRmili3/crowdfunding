// ClickableButtonTextField.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

const ClickableButtonTextField = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
  onClick,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative flex mt-1">
        <input
          type={type}
          id={name}
          name={name}
          className="py-2 px-4 w-full border rounded-l"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-r hover:bg-blue-700 focus:outline-none flex items-center"
          onClick={onClick}
        >
          <FontAwesomeIcon icon={faQrcode} className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default ClickableButtonTextField;
