import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./login";
import Landing from "../pages/landing/landing";
import RequireAuth from "./requireAuth";
// Admin Dashbord
import Admin from "../pages/admin/admin";
import Association from "../pages/association/association";
import Donor from "../pages/donor/donor";
import Evaluator from "../pages/evaluator/evaluator";
import Compain from "../pages/admin/components/compain";
import EvaluatorProfile from "../pages/admin/components/evaluator_profile";
import DonorsList from "../pages/admin/components/donors_list";
import CompainsGrid from "../pages/admin/components/compains_grid";
import AssociationsList from "../pages/admin/components/associations_list";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<RequireAuth />}>
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />}>
            <Route exact path="compains/" element={<CompainsGrid />}>
              <Route  path="compain" element={<Compain />}></Route>
            </Route>
            <Route path="associations" element={<AssociationsList />}></Route>
            <Route path="donors" element={<DonorsList />}></Route>
            <Route path="evaluator" element={<EvaluatorProfile />}></Route>
          </Route>
          {/* Association Routes */}
          <Route path="/association" element={<Association />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/evaluator" element={<Evaluator />}></Route>
        </Route>
      </Routes>
    </>
  );
}
export default RoutesComponent;
