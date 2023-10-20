import React from "react";
import NavBar from "../../components/navBar";
import { Outlet } from "react-router-dom";

const links = [
  { text: "Campaigns", to: "/admin/compains" },
  { text: "Associations", to: "/admin/associations" },
  { text: "Donors", to: "/admin/donors" },
  { text: "Evaluator", to: "/admin/evaluator" },
];
const Admin = () => {
  return (
    <>
      <NavBar customLinks={links}  />
      <Outlet />
    </>
  );
};
export default Admin;
