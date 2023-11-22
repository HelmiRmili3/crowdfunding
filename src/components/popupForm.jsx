import React, { useState } from "react";
import InputField from "./inputFiled";
import { useAdmin } from "../../src/contexts/adminContext";

const PopupForm = ({ isOpen, onClose, role }) => {
  const { create } = useAdmin();
  const [formData, setFormData] = useState({
    imagePicker: "",
    cin: "",
    role: role,
    password: "",
    description: "",
    metamaskWallet: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData) {
      try {
        await create(formData);
        onClose();
      } catch (error) {}
    } else {
      console.log("data not found");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-gray-600">
      <div className="bg-white p-4 w-4/6 rounded shadow-md overflow-hidden">
        <h2 className="text-lg font-semibold mb-4">Form</h2>
        <div className="max-h-80 overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Image Picker"
              name="imagePicker"
              type="text"
              value={formData.imagePicker}
              onChange={handleInputChange}
            />
            <InputField
              label="Cin Number"
              name="cin"
              type="text"
              value={formData.cin}
              onChange={handleInputChange}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <InputField
              label="Description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleInputChange}
            />
            <InputField
              label="Metamask Wallet"
              name="metamaskWallet"
              type="text"
              value={formData.metamaskWallet}
              onChange={handleInputChange}
            />
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
