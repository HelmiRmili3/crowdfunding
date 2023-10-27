import React from "react";
import Compain from "../../../components/compain";
function compainPageEvaluator() {
  return (
    <>
      <Compain>
        <button className="bg-green-600 text-white px-4 py-2 rounded mx-1">
          Accept
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Reject
        </button>
      </Compain>
    </>
  );
}

export default compainPageEvaluator;
