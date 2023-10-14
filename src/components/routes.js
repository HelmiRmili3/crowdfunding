import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Landing from "../pages/landing/landing";
import RequireAuth from "./requireAuth";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route exact  path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<RequireAuth/>}>

        </Route>
      </Routes>
    </>
  );
}
export default RoutesComponent;
