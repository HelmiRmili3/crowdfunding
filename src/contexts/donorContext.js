import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useAuth } from "./authContext";
import { parseCampains } from "../utils/helper";
import { CrowdFundingContract } from "../utils/contracts";
const DonorContext = createContext();
export function useDonor() {
  return useContext(DonorContext);
}

export const DonorProvider = ({ children }) => {
  const { actor } = useAuth();
  const [campaigns, setcampaigns] = useState([]);

  const donateTo = () => {
    console.log("handle donate clicked");
  };

  const getComapains = useCallback(() => {
    const options = {
      from: actor.address,
      gas: 2000000,
    };
    CrowdFundingContract.methods
      .getAllCampaigns()
      .call(options)
      .then((response) => {
        setcampaigns(parseCampains(response));
      })
      .catch((error) => {
        console.error("Error while creating actor:", error);
      });
  }, [actor.address]);

  useEffect(() => {
    getComapains();
  }, [getComapains]);

  return (
    <DonorContext.Provider value={{ donateTo, campaigns }}>
      {children}
    </DonorContext.Provider>
  );
};
