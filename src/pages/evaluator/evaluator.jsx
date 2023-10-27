
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navBar";

const links = [{ text: "Compains", to: "/evaluator/compains" }];
const Avaluator = () => {
  return (
    <>
      <Navbar customLinks={links} />
      <Outlet />
    </>
  );
};
export default Avaluator;