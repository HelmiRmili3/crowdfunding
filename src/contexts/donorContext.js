import React, { createContext, useState, useContext, } from "react";

const DonorContext = createContext();
export function useDonor() {
  return useContext(DonorContext);
}

export const DonorProvider = ({ children }) => {

    
  return (
    <DonorProvider.Provider
      value={{
     
      }}
    >
      {children}
    </DonorProvider.Provider>
  );
};