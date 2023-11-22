import React, { useState } from "react";

import CompainsGrid from "../../../components/compainsGrid";
import { useEvaluator } from "../../../contexts/evaluatorContext";
import Alert from "../../../components/alert";
function CompainsEvaluator() {
  const { campaigns, evaluate, alert } = useEvaluator();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [project, setProject] = useState();

  const handleAccept = () => {
    evaluate(project.id, 2n);
    setModalIsOpen(!modalIsOpen);
  };

  const handleReject = () => {
    try {
      evaluate(project.id, 1n);
    } catch (error) {
      console.log(error);
    }
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
      {alert.visible && (
        <Alert status={alert.status} message={alert.message}></Alert>
      )}
    </>
  );
}

export default CompainsEvaluator;
