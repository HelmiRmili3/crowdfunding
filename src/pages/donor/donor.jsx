
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navBar";

const links = [{ text: "Campaigns", to: "" }];
const Donor = () => {
  return (
    <>
      <Navbar customLinks={links} />
      <Outlet />
    </>
  );
};
export default Donor;
