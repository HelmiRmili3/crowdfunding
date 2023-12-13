import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { SHA256 } from "crypto-js";
import { AuthContract } from "../utils/contracts";
import { CrowdFundingContract } from "../utils/contracts";

import { useAuth } from "./authContext";
import { parseActors, parseCampains } from "../utils/helper";
import { useWallet } from "./walletContext";
const AdminContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export const AdminProvider = ({ children }) => {
  const { actor } = useAuth();
  const { address } = useWallet();

  const [actors, setActors] = useState({});
  const [Campaigns, setCampaigns] = useState([]);

  const [alert, setAlert] = useState({
    status: null,
    message: "",
    visible: false,
  });
  const showAlert = (status, message) => {
    setAlert({
      status: status,
      message: message,
      visible: true,
    });
    // Hide the alert after 2 seconds
    setTimeout(() => {
      setAlert({
        status: null,
        message: "",
        visible: false,
      });
    }, 2000);
  };
  //get all the comapains function .
  const getComapains = useCallback(async () => {
    const options = {
      from: address,
      gas: 2000000,
    };
    await CrowdFundingContract.methods
      .expired()
      .call()
      .then(async () => {
        await CrowdFundingContract.methods
          .getAllCampaigns()
          .call(options)
          .then((response) => {
            setCampaigns(parseCampains(response));
          })
          .catch((error) => {
            console.error("Error while creating actor:", error);
          });
      });
  }, [address]);

  // get all actors function .
  const getActors = useCallback(async () => {
    getComapains();
    const options = {
      gas: 20000000,
    };
    try {
      await CrowdFundingContract.methods
        .expired()
        .call()
        .then(async () => {
          const response = await AuthContract.methods
            .getAllActors()
            .call(options);
          setActors(parseActors(response));
        });
    } catch (error) {
      console.error("Error while getting actors:", error);
    }
  }, [getComapains]);

  // create actor function .
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
          CrowdFundingContract.methods
            .expired()
            .call()
            .then(async () => {
              await AuthContract.methods
                .createActor(
                  data.name,
                  data.metamaskWallet,
                  data.imagePicker,
                  data.role,
                  data.cin,
                  data.description,
                  hashedPassword
                )
                .send(options)
                .then((response) => {
                  showAlert("success", "User created successfully.");
                  console.log(response);
                  getActors(); // Call getActors when create is called
                })
                .catch((error) => {
                  showAlert("error", "Error creating user. Please try again.");
                  console.error("Error while creating actor:", error);
                });
            });
        } else {
          console.log("data not found");
          showAlert("error", "Data not found error. Please try again.");
        }
      } catch (error) {
        console.error("Error in create function:", error);
        showAlert("error", "Error in create function. Please try again.");
      }
    },
    [actor, getActors]
  );

  useEffect(() => {
    const fetchData = async () => {
      await getActors(); // Call getActors on initial render
    };
    fetchData();
  }, [getComapains, getActors]); // Add getActors to the dependency array

  return (
    <AdminContext.Provider
      value={{ actors, create, Campaigns, alert, setAlert }}
    >
      {children}
    </AdminContext.Provider>
  );
};
