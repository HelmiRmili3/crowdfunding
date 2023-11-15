import React, { useState } from "react";

import CompainsGrid from "../../../components/compainsGrid";
import { useEvaluator } from "../../../contexts/evaluatorContext";

function CompainsEvaluator() {
  const { campaigns, evaluate } = useEvaluator();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [project, setProject] = useState();

  const handleAccept = () => {
    evaluate(project.id, 2n);
    setModalIsOpen(!modalIsOpen);
  };

  const handleReject = () => {
    evaluate(project.id, 1n);
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <CompainsGrid
        campaigns={campaigns}
        setProject={setProject}
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
      >
        <button
          onClick={handleAccept}
          className="bg-green-600 text-white px-4 py-2 rounded mx-1"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Reject
        </button>
      </CompainsGrid>
    </>
  );
}

export default CompainsEvaluator;
