import React from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useAdmin } from "../../../contexts/adminContext";

function CompainsAdmin() {
  const { Campaigns } = useAdmin();

  return (
    <>
      <CompainsGrid campaigns={Campaigns} />
    </>
  );
}

export default CompainsAdmin;
