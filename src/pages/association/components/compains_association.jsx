import React from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useAssociation } from "../../../contexts/associationContext";
function CompainsAssociation() {
  const { campains } = useAssociation();
  console.log(campains);
  return (
    <>
      <CompainsGrid campains={campains} />
    </>
  );
}

export default CompainsAssociation;
