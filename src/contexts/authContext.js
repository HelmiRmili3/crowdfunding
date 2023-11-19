import React, { createContext, useState, useContext, useEffect } from "react";
import { parseActor } from "../utils/helper";
import { AuthContract } from "../utils/contracts";
import { useWallet } from "./walletContext";
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const { address, changed, setChanged } = useWallet();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [actor, setActor] = useState();
  const [compain, setCompain] = useState();

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  useEffect(() => {
    //connectWallet();
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
        console.log("address is null.");
      }
    };
    fetchUser();
    if (changed) {
      setIsLoggedIn(false);
      setChanged(false);
    }
  }, [address, changed, setChanged]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        actor,
        handleLogout,
        compain,
        setCompain,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
