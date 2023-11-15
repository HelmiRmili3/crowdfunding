import React, { useState } from "react";

import CompainsGrid from "../../../components/compainsGrid";
import { useAdmin } from "../../../contexts/adminContext";

function CompainsAdmin() {
  const { Campaigns } = useAdmin();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <CompainsGrid
        campaigns={Campaigns}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}

export default CompainsAdmin;
