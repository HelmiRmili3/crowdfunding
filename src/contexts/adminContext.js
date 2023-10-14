import React, { createContext, useState, useContext } from "react";

const AdminContext = createContext();
export function useAdmin() {
  return useContext(AdminContext);
}

export const AdminProvider = ({ children }) => {
  return <AdminProvider.Provider value={{}}>{children}</AdminProvider.Provider>;
};
