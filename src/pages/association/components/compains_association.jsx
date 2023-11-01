import React from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useAssociation } from "../../../contexts/associationContext";
function CompainsAssociation() {
  const { campaigns, isLoading, create } = useAssociation();
  return (
    <>
      <CompainsGrid
        campaigns={campaigns}
        isLoading={isLoading}
        create={create}
      />
    </>
  );
}

export default CompainsAssociation;
