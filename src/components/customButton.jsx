import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { truncateAddress } from "../utils/helper";
const CustomButton = () => {
  const { handleLogout, actor } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center pr-2 pl-1 py-1 border border-gray-300 text-sm font-medium rounded-full shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
        >
          <div className="w-10 h-10 p-1 rounded-full bg-gray-100">
            <img
              src={actor.imageUrl}
              alt="User Avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <span className="ml-3">{truncateAddress(actor.address, 5)}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-mr-1 ml-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </button>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div className="py-1">
            <button className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Profile
            </button>
            <button
              className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomButton;
