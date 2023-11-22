import React from "react";
import NavBar from "../../components/navBar";
import { Outlet } from "react-router-dom";
import Alert from "../../components/alert";
import { useAdmin } from "../../contexts/adminContext";
const links = [
  { text: "Campagnes", to: "/admin/compains" },
  { text: "Associations", to: "/admin/associations" },
  { text: "Donors", to: "/admin/donors" },
  { text: "Evaluator", to: "/admin/evaluator" },
];
const Admin = () => {
  const {alert } = useAdmin();
  return (
    <>
      <NavBar customLinks={links} />
      <Outlet />
      {alert.visible && (
        <Alert status={alert.status} message={alert.message}></Alert>
      )}
    </>
  );
};
export default Admin;
