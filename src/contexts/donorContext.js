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

  const donateTo = async (project, amount) => {
    const donationAmount = web3.utils.toWei(amount, "ether"); // Convert 1 ETH to wei

    try {
      const response = await CrowdFundingContract.methods
        .donate(project.id)
        .send({
          from: actor.address,
          value: donationAmount, // Specify the donation amount in wei
          gas: 600000,
        });
      showAlert("success", "Done added successfully.");
      console.log(response);
      getComapains();
    } catch (error) {
      showAlert("error", "Error adding The done. Please try again.");
      console.error("Error while donating to campaign:", error);
    }
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
    <DonorContext.Provider value={{ donateTo, campaigns, alert, setAlert }}>
      {children}
    </DonorContext.Provider>
  );
};
