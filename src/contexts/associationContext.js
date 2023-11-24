import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { CrowdFundingContract } from "../utils/contracts";
import { uploadFileToPinata } from "../apis/pinata";
import { useAuth } from "./authContext";
import { parseCampains, customFilterAssociation } from "../utils/helper";
const AssociationContext = createContext();

export function useAssociation() {
  return useContext(AssociationContext);
}

export const AssociationProvider = ({ children }) => {
  const { actor } = useAuth();
  const [campaigns, setcampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  const createProject = async (comapin, pdfFile) => {
    setIsLoading(true);
    if (comapin) {
      const options = {
        from: actor.address,
        gas: 2000000,
      };
      if (pdfFile) {
        console.log(pdfFile);
        const ipfsHash = await uploadFileToPinata(pdfFile);
        console.log(ipfsHash);
        await CrowdFundingContract.methods
          .createCampaign(
            comapin.field,
            comapin.title,
            comapin.description,
            comapin.period,
            comapin.amount,
            comapin.imageUrl,
            ipfsHash.toString()
          )
          .send(options)
          .then((response) => {
            showAlert("success", "Campaign created successfully.");
            console.log(response);
            getComapains();
            setIsLoading(false);
          })
          .catch((error) => {
            showAlert("error", "Error creating campaign. Please try again.");
            console.error("Error while creating comapin:", error);
            setIsLoading(false);
          });
      }
    } else {
      console.log("Comapgin data is empty.");
      showAlert("error", "Comapign data is empty.. Please try again.");
      setIsLoading(false);
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
        setcampaigns(
          customFilterAssociation(parseCampains(response), actor.address)
        );
      })
      .catch((error) => {
        console.error("Error while creating actor:", error);
      });
  }, [actor.address]);

  useEffect(() => {
    getComapains();
  }, [getComapains]);

  return (
    <AssociationContext.Provider
      value={{ createProject, campaigns, isLoading, alert, setAlert }}
    >
      {children}
    </AssociationContext.Provider>
  );
};
