import React from "react";

const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        min={0}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border rounded"
      />
    </div>
  );
};

export default InputField;
