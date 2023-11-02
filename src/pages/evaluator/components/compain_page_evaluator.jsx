import React from "react";
import Compain from "../../../components/compain";
import { useEvaluator } from "../../../contexts/evaluatorContext";

function CompainPageEvaluator() {
  const {evaluate } = useEvaluator();
  const compain = [];
  const handleAccept = () => evaluate(compain.id, 2n);
  const handleReject = () => evaluate(compain.id, 1n);
  return (
    <>
      <Compain
        amount={compain.amount}
        creator={compain.creator}
        dataUrl={compain.dataUrl}
        description={compain.description}
        donors={compain.donors}
        endDate={compain.endDate}
        filed={compain.filed}
        id={compain.id}
        imageUrl={compain.imageUrl}
        period={compain.period}
        raisedAmount={compain.raisedAmount}
        status={compain.status}
        title={compain.title}
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
      </Compain>
    </>
  );
}

export default CompainPageEvaluator;
