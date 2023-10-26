import React, { createContext, useContext } from "react";

const EvaluatorContext = createContext();
export function useEvaluator() {
  return useContext(EvaluatorContext);
}

export const EvaluatorProvider = ({ children }) => {
  return (
    <EvaluatorContext.Provider value={{}}>{children}</EvaluatorContext.Provider>
  );
};
