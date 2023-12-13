import React from "react";
import CustomLink from "./customLink";
import CustomButton from "./customButton";
import { useAuth } from "../contexts/authContext";
import { capitalizeFirstLetter } from "../utils/helper";
// import { getRoleName } from "../utils/helper";

function Navbar({ customLinks }) {
  const { actor } = useAuth();
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full  z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="http://localhost:3000/admin/compains"
            className="flex items-center"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {capitalizeFirstLetter(actor.name)}
            </span>
          </a>
          <div className="flex md:order-2">
            <CustomButton />
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {customLinks.map((link, index) => (
                <CustomLink key={index} to={link.to}>
                  {link.text}
                </CustomLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
