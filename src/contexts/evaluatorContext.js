import React, { createContext, useState, useContext, } from "react";

const EvaluatorContext = createContext();
export function useEvaluator() {
  return useContext(EvaluatorContext);
}

export const EvaluatorProvider = ({ children }) => {

    
  return (
    <EvaluatorProvider.Provider
      value={{
     
      }}
    >
      {children}
    </EvaluatorProvider.Provider>
  );
};