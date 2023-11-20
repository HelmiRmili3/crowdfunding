import React, { useState } from "react";

import CompainsGrid from "../../../components/compainsGrid";
import { useAssociation } from "../../../contexts/associationContext";
import Alert from "../../../components/alert";
function CompainsAssociation() {
  const { campaigns, isLoading, alert } = useAssociation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

 
  return (
    <>
      <CompainsGrid
        campaigns={campaigns}
        isLoading={isLoading}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />

      {alert.visible && (
        <Alert status={alert.status} message={alert.message}></Alert>
      )}
    </>
  );
}

export default CompainsAssociation;
