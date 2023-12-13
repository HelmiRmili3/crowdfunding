

const RadioButtons = ({ selectedOption, handleOptionChange }) => {
  return (
    <div>
      {/* <label className="block text-gray-700">Select an option:</label> */}

      <div className="mt-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          <span className="ml-2"> 1 Day</span>
        </label>

        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          <span className="ml-2"> 2 Day</span>
        </label>
        
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          <span className="ml-2"> 7 Days</span>
        </label>
        
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
          <span className="ml-2"> 1 Month</span>
        </label>
        {/* Add more options as needed */}
      </div>

      {/* <p className="mt-4">Selected Option: {selectedOption}</p> */}
    </div>
  );
};

export default RadioButtons;
