import React, { createContext, useState, useContext, useEffect } from "react";
import { parseActor } from "../utils/helper";
import { AuthContract } from "../utils/contracts";
import { useWallet } from "./walletContext";
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const { address } = useWallet();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [actor, setActor] = useState();

  const handleLogout = () => {};
  useEffect(() => {
    const fetchUser = async () => {
      if (address) {
        try {
          const response = await AuthContract.methods
            .getActorData(address)
            .call();
          console.log(parseActor(response));
          setActor(parseActor(response));
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("address is null.");
      }
    };
    fetchUser();
  }, [address]);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        actor,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
