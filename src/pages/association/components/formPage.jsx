import React, { useState } from "react";
import web3 from "web3";
import InputField from "../../../components/inputFiled";

import { useAssociation } from "../../../contexts/associationContext";
import RadioButtons from "../../../components/radioButtons";

const FormPage = ({ isOpen, onClose }) => {
  const initData = {
    title: "",
    description: "",
    period: 0,
    amount: 0,
    imageUrl: "",
  };
  const { createProject, setIsLoading } = useAssociation();
  const [pdfFile, setPdfFile] = useState();
  const [comapin, setComapin] = useState(initData);
  const [selectedOption, setSelectedOption] = useState("");
  const [value, setValue] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComapin({ ...comapin, [name]: value });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setPdfFile(selectedFile);
    setValue(selectedFile.name);
    // if (selectedFile) {
    //   // Set the selected file

    //   // Set the file name in the input field
    //   const fileNameInput = document.getElementById("pdfFile");
    //   if (fileNameInput) {
    //     fileNameInput.value = ;
    //   }
    // }
    console.log(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: comapin.title,
      description: comapin.description,
      period: comapin.period * 86400,
      amount: web3.utils.toWei(comapin.amount, "ether"),
      imageUrl: comapin.imageUrl,
    };
    try {
      await createProject(data, pdfFile).then((e) => {
        setComapin(initData);
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    onClose();
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
              label="Title"
              name="title"
              type="text"
              value={comapin.title}
              onChange={handleInputChange}
            />
            <InputField
              label="Description"
              name="description"
              type="text"
              value={comapin.description}
              onChange={handleInputChange}
            />
            <InputField
              label="Period (day)"
              name="period"
              type="number"
              value={comapin.period}
              onChange={handleInputChange}
            />
            {/* <RadioButtons
              selectedOption={selectedOption}
              handleOptionChange={handleOptionChange}
            /> */}
            <InputField
              label="Amount (eth)"
              name="amount"
              type="number"
              value={comapin.amount}
              onChange={handleInputChange}
            />
            <InputField
              label="Image URL"
              name="imageUrl"
              type="text"
              value={comapin.imageUrl}
              onChange={handleInputChange}
            />
            <InputField
              label="PDF File"
              name="pdfFile"
              type="file"
              value=""
              onChange={handleFileChange}
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

export default FormPage;
