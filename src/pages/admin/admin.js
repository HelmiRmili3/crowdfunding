import React from "react";
import NavBar from "./components/navBar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default Admin;
