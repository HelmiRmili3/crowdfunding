import React, { useState } from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useDonor } from "../../../contexts/donorContext";
import Alert from "../../../components/alert";
function CompainsDonor() {
  const { campaigns, donateTo, alert, setAlert } = useDonor();
  const [project, setProject] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const handelClick = () => {
    setModalIsOpen(!modalIsOpen);
    try {
      donateTo(project, amount);
      showAlert("success", "Done added successfully.");
    } catch (error) {
      showAlert("error", "Error adding done. Please try again.");
    }
  };
  const handelAmount = (event) => {
    setAmount(event.target.value);
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
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        <div>
          <input
            onChange={handelAmount}
            type="number"
            step={0.01}
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
      {alert.visible && (
        <Alert status={alert.status} message={alert.message}></Alert>
      )}
    </>
  );
}

export default CompainsDonor;
