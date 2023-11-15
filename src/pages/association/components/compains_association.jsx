import React, { useState } from "react";

import CompainsGrid from "../../../components/compainsGrid";
import { useAssociation } from "../../../contexts/associationContext";

function CompainsAssociation() {
  const { campaigns, isLoading } = useAssociation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <CompainsGrid
        campaigns={campaigns}
        isLoading={isLoading}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}

export default CompainsAssociation;
