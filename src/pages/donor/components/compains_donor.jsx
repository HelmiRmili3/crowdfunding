import React, { useState } from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useDonor } from "../../../contexts/donorContext";
function CompainsDonor() {
  const { campaigns, donateTo } = useDonor();
  const [project, setProject] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const handelClick = () => {
    donateTo(project, amount);
    setModalIsOpen(!modalIsOpen);
  };
  const handelAmount = (event) => {
    setAmount(event.target.value);
  };
  return (
    <>
      <CompainsGrid
        campaigns={campaigns}
        setProject={setProject}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <div>
          <input
            onChange={handelAmount}
            type="number"
            min={0}
            placeholder="amount"
            className="w-90 px-4 py-2 rounded-l focus:border-none hover:border-none"
          ></input>
          <button
            onClick={handelClick}
            className="bg-yellow-500 text-white px-4 py-2 rounded-r"
          >
            Donate
          </button>
        </div>
      </CompainsGrid>
    </>
  );
}

export default CompainsDonor;
