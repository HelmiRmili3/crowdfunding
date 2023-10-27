import React, { createContext, useContext } from "react";

const EvaluatorContext = createContext();
export function useEvaluator() {
  return useContext(EvaluatorContext);
}

export const EvaluatorProvider = ({ children }) => {
  const evaluate = () => {};
  return (
    <EvaluatorContext.Provider value={{ evaluate }}>
      {children}
    </EvaluatorContext.Provider>
  );
};
