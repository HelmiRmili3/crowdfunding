import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./login";
import Landing from "../pages/landing/landing";
import RequireAuth from "./requireAuth";
import Admin from "../pages/admin/admin";
import Association from "../pages/association/association";
import Donor from "../pages/donor/donor";
import Evaluator from "../pages/evaluator/evaluator";
function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/association" element={<Association />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/evaluator" element={<Evaluator />}></Route>
        </Route>
      </Routes>
    </>
  );
}
export default RoutesComponent;
