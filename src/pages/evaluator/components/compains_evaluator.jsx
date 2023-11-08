import React from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useEvaluator } from "../../../contexts/evaluatorContext";
function CompainsEvaluator() {
  const { campaigns, evaluate, compain } = useEvaluator();
  const handleAccept = () => {
    console.log("handel accept clicked", compain);
    evaluate(compain.id, 2n);
  };
  const handleReject = () => {
    console.log("handel reject clicked", compain);
    evaluate(compain.id, 1n);
  };
  return (
    <>
      <CompainsGrid campaigns={campaigns}>
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
