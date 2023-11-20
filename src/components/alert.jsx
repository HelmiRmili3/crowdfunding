import React from "react";

const Alert = ({ status, message }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "success":
        return "bg-success text-white";
      case "error":
        return "bg-error text-white";
      default:
        return "";
    }
  };

  return (
    <div
      className={` flex items-center fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 ${getStatusStyles()} rounded shadow-md`}
      style={{
        zIndex: 9999, // Adjust the z-index as needed
      }}
    >

      <svg
        className="flex-shrink-0 w-4 h-4 m-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      {message}
    </div>
  );
};

export default Alert;
