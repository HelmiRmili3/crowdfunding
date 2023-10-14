import React, { createContext, useState, useContext, } from "react";

const AssociationContext = createContext();
export function useAssociation() {
  return useContext(AssociationContext);
}

export const AssociationProvider = ({ children }) => {

    
  return (
    <AssociationProvider.Provider
      value={{
     
      }}
    >
      {children}
    </AssociationProvider.Provider>
  );
};