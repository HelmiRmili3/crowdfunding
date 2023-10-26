import React, { createContext, useState, useContext, useEffect } from "react";
import { AuthContract } from "../utils/contracts";
import { SHA256 } from "crypto-js";
import { useAuth } from "./authContext";
const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export const AdminProvider = ({ children }) => {
  const [actors, setActors] = useState({});
  const { actor } = useAuth();

  const create = async (data) => {
    const hashedPassword = SHA256(data.password).toString();
    console.log(hashedPassword);
    console.log(data);
    const options = {
      from: actor.address,
      gas: 2000000, // Set the desired gas limit
    };
    if (data) {
      const response = AuthContract.methods
        .createActor(
          data.metamaskWallet,
          data.imagePicker,
          data.role,
          data.cin,
          data.description,
          hashedPassword
        )
        .send(options);
      console.log(response);
    } else {
      console.log("data not found");
    }
  };
  const getActors = async () => {
    const options = {
      gas: 20000000, // Set the desired gas limit
    };
    try {
      const response = await AuthContract.methods.getAllActors().call(options);
      console.log(response);
      setActors(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActors();
  }, []);

  return (
    <AdminContext.Provider value={{ actors, create }}>
      {children}
    </AdminContext.Provider>
  );
};
