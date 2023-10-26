import React, { createContext, useContext } from "react";

const DonorContext = createContext();
export function useDonor() {
  return useContext(DonorContext);
}

export const DonorProvider = ({ children }) => {
  return <DonorContext.Provider value={{}}>{children}</DonorContext.Provider>;
};
