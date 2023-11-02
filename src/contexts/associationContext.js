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
import { parseCampains } from "../utils/helper";
const AssociationContext = createContext();

export function useAssociation() {
  return useContext(AssociationContext);
}

export const AssociationProvider = ({ children }) => {
  const { actor } = useAuth();
  const [campaigns, setcampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const create = async (comapin, pdfFile) => {
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
            console.log(response);
            getComapains();
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error while creating actor:", error);
            setIsLoading(false);
          });
      }
    } else {
      console.log("Comapin data is empty.");
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
    <AssociationContext.Provider value={{ create, campaigns, isLoading }}>
      {children}
    </AssociationContext.Provider>
  );
};
