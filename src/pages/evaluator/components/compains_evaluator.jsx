import React from "react";
import CompainsGrid from "../../../components/compainsGrid";
import { useEvaluator } from "../../../contexts/evaluatorContext";
function CompainsEvaluator() {
  const { campaigns } = useEvaluator();
  return (
    <>
      <CompainsGrid campaigns={campaigns} />
    </>
  );
}

export default CompainsEvaluator;
