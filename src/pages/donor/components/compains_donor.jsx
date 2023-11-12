import React, { useState } from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useDonor } from "../../../contexts/donorContext";
function CompainsDonor() {
  const { campaigns, donateTo } = useDonor();
  const [project, setProject] = useState();

  const handelClick = () => donateTo(project);
  console.log("handel donate", project);
  return (
    <>
      <CompainsGrid campaigns={campaigns} setProject={setProject}>
        <button
          onClick={handelClick}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Donate To
        </button>
      </CompainsGrid>
    </>
  );
}

export default CompainsDonor;
