import React from "react";

function CustomButtonAdd({ onOpen }) {
  return (
    <>
      <button onClick={onOpen}>
        <img
          src={require("../assets/icons8-add-48.png")}
          alt="User Avatar"
          className="w-full h-full rounded-lg w-16 h-16 color-grat-100 hover:bg-gray-300 p-10"
        />
      </button>
    </>
  );
}
export default CustomButtonAdd;
