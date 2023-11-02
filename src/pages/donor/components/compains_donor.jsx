import React from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useDonor } from "../../../contexts/donorContext";
function CompainsDonor() {
  const { campaigns } = useDonor();
  return (
    <>
      <CompainsGrid campaigns={campaigns} />
    </>
  );
}

export default CompainsDonor;
