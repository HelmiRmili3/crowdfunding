import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./login";
import Landing from "../pages/landing/landing";
import RequireAuth from "./requireAuth";
// Admin Dashbord
import Admin from "../pages/admin/admin";
import AssociationsList from "../pages/admin/components/associations_list";
import DonorsList from "../pages/admin/components/donors_list";
import CompainsAdmin from "../pages/admin/components/compains_admin";
import Compain from "../pages/admin/components/compain";
import EvaluatorProfile from "../pages/admin/components/evaluator_profile";

// Associaton App
import CompainsAssociation from "../pages/association/components/compains_association";
import Association from "../pages/association/association";

// Evaluator App
import CompainsEvaluator from "../pages/evaluator/components/compains_evaluator";
import Evaluator from "../pages/evaluator/evaluator";

// Donor App
import Donor from "../pages/donor/donor";
import CompainsDonor from "../pages/donor/components/compains_donor";

function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<RequireAuth />}>
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />}>
            <Route exact path="compains/" element={<CompainsAdmin />}>
              <Route path="compain" element={<Compain />}></Route>
            </Route>
            <Route path="associations" element={<AssociationsList />}></Route>
            <Route path="donors" element={<DonorsList />}></Route>
            <Route path="evaluator" element={<EvaluatorProfile />}></Route>
          </Route>
          {/* Association Routes */}
          <Route path="/association" element={<Association />}>
            <Route exact path="compains/" element={<CompainsAssociation />}>
              <Route path="compain" element={<Compain />}></Route>
            </Route>
          </Route>
          {/* Donor Routes */}
          <Route path="/donor" element={<Donor />}>
            <Route exact path="compains/" element={<CompainsDonor />}>
              <Route path="compain" element={<Compain />}></Route>
            </Route>
          </Route>
          {/* Evaluator Routes */}
          <Route path="/evaluator" element={<Evaluator />}>
            <Route exact path="compains/" element={<CompainsEvaluator />}>
              <Route path="compain" element={<Compain />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
export default RoutesComponent;
