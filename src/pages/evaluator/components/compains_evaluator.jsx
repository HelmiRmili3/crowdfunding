import React, { useState } from "react";

import CompainsGrid from "../../../components/compainsGrid";
import { useEvaluator } from "../../../contexts/evaluatorContext";
import Alert from "../../../components/alert";
function CompainsEvaluator() {
  const { campaigns, evaluate, alert, setAlert } = useEvaluator();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [project, setProject] = useState();

  const handleAccept = () => {
    evaluate(project.id, 2n);
    setModalIsOpen(!modalIsOpen);
  };

  const handleReject = () => {
    try {
      evaluate(project.id, 1n);
      showAlert("success", "Evaluation added successfully.");
    } catch (error) {
      showAlert("error", "Error evaluation . Please try again.");
    }

    setModalIsOpen(!modalIsOpen);
  };
  const showAlert = (status, message) => {
    setAlert({
      status: status,
      message: message,
      visible: true,
    });

    // Hide the alert after 2 seconds
    setTimeout(() => {
      setAlert({
        status: null,
        message: "",
        visible: false,
      });
    }, 2000);
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
