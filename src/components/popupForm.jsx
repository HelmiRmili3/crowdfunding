import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import InputField from "./inputFiled";
import { useAdmin } from "../../src/contexts/adminContext";
import ClickableButtonTextField from "./qrCodeButton";

const PopupForm = ({ isOpen, onClose, role }) => {
  const { create } = useAdmin();
  const initData = {
    name: "",
    imagePicker: "",
    cin: "",
    role: role,
    password: "",
    description: "",
    metamaskWallet: "",
  };
  const [formData, setFormData] = useState(initData);
  const [openScanner, setOpenScanner] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setFormData({ ...formData, cin: data.text });
    }
  };

  const handleError = (error) => {
    console.error(error);
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handerScanner = (e) => {
    e.preventDefault();
    setOpenScanner(!openScanner);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData) {
      try {
        await create(formData);
        setFormData(initData);
        onClose();
      } catch (error) {
        console.error(error);
      }
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
              label="Name"
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <InputField
              label="Image Picker"
              name="imagePicker"
              type="text"
              placeholder="Image URL"
              value={formData.imagePicker}
              onChange={handleInputChange}
            />
            <ClickableButtonTextField
              label="Cin/Matricule"
              name="cin"
              type="text"
              value={formData.cin}
              placeholder="Cin/Matricule"
              onChange={handleInputChange}
              onClick={handerScanner}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <InputField
              label="Description"
              name="description"
              type="text"
              placeholder="Description of you"
              value={formData.description}
              onChange={handleInputChange}
            />
            <InputField
              label="Metamask Wallet"
              name="metamaskWallet"
              type="text"
              placeholder="Votre metamask wallet"
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
          {openScanner && (
            <QrScanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "0%" }}
              facingMode="environment" // Use the front camera if available
            />
          )}
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
