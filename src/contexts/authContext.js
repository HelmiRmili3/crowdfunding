import React, { createContext, useState, useContext, useEffect } from "react";
import { parseActor } from "../utils/helper";
import { AuthContract } from "../utils/contracts";
import { useWallet } from "./walletContext";
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const { address, changed, setChanged, connectWallet } = useWallet();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [actor, setActor] = useState();

  const handleLogout = () => {};
  useEffect(() => {
    connectWallet();
    
    const fetchUser = async () => {
      if (address) {
        try {
          const response = await AuthContract.methods
            .getActorData(address)
            .call();
          setActor(parseActor(response));
        } catch (error) {
          console.log(error);
        }
      } else {
        //console.log("address is null.");
      }
    };
    fetchUser();
    setChanged(false);
    setIsLoggedIn(false)
  }, [address, changed, setChanged, connectWallet]);

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
