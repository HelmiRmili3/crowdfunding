import React from "react";
import { Route, Routes } from "react-router-dom";

// Import context providers and components
import { AdminProvider } from "../contexts/adminContext";
import { DonorProvider } from "../contexts/donorContext";
import { EvaluatorProvider } from "../contexts/evaluatorContext";

import Login from "./login";
import Landing from "../pages/landing/landing";
import RequireAuth from "./requireAuth";
import Admin from "../pages/admin/admin";
import AssociationsList from "../pages/admin/components/associations_list";
import DonorsList from "../pages/admin/components/donors_list";
import CompainsAdmin from "../pages/admin/components/compains_admin";
import EvaluatorProfile from "../pages/admin/components/evaluator_profile";
import CompainsAssociation from "../pages/association/components/compains_association";
import Association from "../pages/association/association";
import CompainsEvaluator from "../pages/evaluator/components/compains_evaluator";
import Evaluator from "../pages/evaluator/evaluator";
import Donor from "../pages/donor/donor";
import CompainsDonor from "../pages/donor/components/compains_donor";
import CompainPageDonor from "../pages/donor/components/compain_page_donor";
import CompainPageAdmin from "../pages/admin/components/compain_page_admin";
import CompainPageAssociation from "../pages/association/components/compain_page_association";
import CompainPageEvaluator from "../pages/evaluator/components/compain_page_evaluator";
import { AssociationProvider } from "../contexts/associationContext";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route element={<RequireAuth />}>
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminProvider>
              <Admin />
            </AdminProvider>
          }
        >
          <Route path="compains" element={<CompainsAdmin />} />
          <Route path="compains/compain" element={<CompainPageAdmin />} />
          <Route path="associations" element={<AssociationsList />} />
          <Route path="donors" element={<DonorsList />} />
          <Route path="evaluator" element={<EvaluatorProfile />} />
        </Route>

        {/* Association Routes */}
        <Route
          path="/association"
          element={
            <AssociationProvider>
              <Association />
            </AssociationProvider>
          }
        >
          <Route path="compains" element={<CompainsAssociation />} />
          <Route path="compains/compain" element={<CompainPageAssociation />} />
        </Route>

        {/* Donor Routes */}
        <Route
          path="/donor"
          element={
            <DonorProvider>
              <Donor />
            </DonorProvider>
          }
        >
          <Route path="compains" element={<CompainsDonor />} />
          <Route path="compains/compain" element={<CompainPageDonor />} />
        </Route>

        {/* Evaluator Routes */}
        <Route
          path="/evaluator"
          element={
            <EvaluatorProvider>
              <Evaluator />
            </EvaluatorProvider>
          }
        >
          <Route path="compains" element={<CompainsEvaluator />} />
          <Route path="compains/compain" element={<CompainPageEvaluator />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RoutesComponent;
