import React from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useAssociation } from "../../../contexts/associationContext";
function CompainsAssociation() {
  const { campaigns, isLoading } = useAssociation();
  return (
    <>
      <CompainsGrid
        campaigns={campaigns}
        isLoading={isLoading}
      />
    </>
  );
}

export default CompainsAssociation;
