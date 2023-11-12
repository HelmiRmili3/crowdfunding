import web3 from "web3";
import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useAuth } from "./authContext";
import { parseCampains, customFilter } from "../utils/helper";
import { CrowdFundingContract } from "../utils/contracts";
const DonorContext = createContext();
export function useDonor() {
  return useContext(DonorContext);
}

export const DonorProvider = ({ children }) => {
  const { actor } = useAuth();
  const [campaigns, setcampaigns] = useState([]);

  const donateTo = async (project) => {
    const donationAmount = web3.utils.toWei("0.001", "ether"); // Convert 1 ETH to wei

    const options = {
      value: donationAmount, // Specify the donation amount in wei
      from: actor.address,
      to: project.creator,
      gas: 2000000,
    };
    await CrowdFundingContract.methods
      .donateToCampaign(project.id)
      .send(options) // Use "send" instead of "call" to send the transaction
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error while donating to campaign:", error);
      });
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
        setcampaigns(customFilter(parseCampains(response), 2n));
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
