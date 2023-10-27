import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { SHA256 } from "crypto-js";
import { AuthContract } from "../utils/contracts";
import { useAuth } from "./authContext";
import { parseActors } from "../utils/helper";

const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export const AdminProvider = ({ children }) => {
  const [actors, setActors] = useState({});
  const { actor } = useAuth();

  const create = useCallback(
    (data) => {
      try {
        const hashedPassword = SHA256(data.password).toString();
        console.log(hashedPassword);
        const options = {
          from: actor.address,
          gas: 2000000,
        };
        if (data) {
          AuthContract.methods
            .createActor(
              data.metamaskWallet,
              data.imagePicker,
              data.role,
              data.cin,
              data.description,
              hashedPassword
            )
            .send(options)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error("Error while creating actor:", error);
            });
        } else {
          console.log("data not found");
        }
      } catch (error) {
        console.error("Error in create function:", error);
      }
    },
    [actor]
  );

  useEffect(() => {
    const getActors = async () => {
      const options = {
        gas: 20000000,
      };
      try {
        const response = await AuthContract.methods
          .getAllActors()
          .call(options);
        setActors(parseActors(response));
      } catch (error) {
        console.error("Error while getting actors:", error);
      }
    };
    getActors();
  }, [create]);

  return (
    <AdminContext.Provider value={{ actors, create }}>
      {children}
    </AdminContext.Provider>
  );
};
