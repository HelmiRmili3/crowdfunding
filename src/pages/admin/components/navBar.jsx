import React, { useState } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState("item1");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full bg-gray-100 p-2 ">
      {/* Navigation Bar */}
      <nav className="w-2/3 mx-auto py-4 bg-gray-300 rounded-t-lg">
        <ul className="flex justify-center space-x-4 ">
          <li
            className={`cursor-pointer ${
              activeItem === "item1"
                ? " p-2 text-blue-600"
                : "p-2 text-gray-700"
            }`}
            onClick={() => handleItemClick("item1")}
          >
            Associations
          </li>
          <li
            className={`cursor-pointer ${
              activeItem === "item2" ? "p-2 text-blue-600" : "p-2 text-gray-700"
            }`}
            onClick={() => handleItemClick("item2")}
          >
            Donors
          </li>
          <li
            className={`cursor-pointer ${
              activeItem === "item3" ? "p-2 text-blue-600" : "p-2 text-gray-700"
            }`}
            onClick={() => handleItemClick("item3")}
          >
            Evaluator
          </li>
          <button className="p-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded-lg">
            Disconnect
          </button>
        </ul>
      </nav>

      {/* Body Section */}
      <div className="w-2/3 mx-auto p-4 bg-white rounded-b-lg shadow-lg">
        {activeItem === "item1" && (
          <>
            <h1>Body Section 1</h1>
            <p>
              Find definitions and references for functions and other symbols in
              this file by clicking a symbol below or in the code.Find
              definitions and references for functions and other symbols in this
              file by clicking a symbol below or in the code.Find definitions
              and references for functions and other symbols in this file by
              clicking a symbol below or in the code.
            </p>
          </>
        )}
        {activeItem === "item2" && (
          <>
            <h1>Body Section 2</h1>
            <p>This is the content of Body Section 2.</p>
          </>
        )}
        {activeItem === "item3" && (
          <>
            <h1>Body Section 3</h1>
            <p>This is the content of Body Section 3.</p>
          </>
        )}
      </div>

      {/* Disconnect Button */}
    </div>
  );
}

export default Navbar;
