import React, { createContext, useContext} from "react";
import { CrowdFundingContract } from "../utils/contracts";
import uploadFileToPinata from "../apis/pinata";
import { useAuth } from "./authContext";

const AssociationContext = createContext();

export function useAssociation() {
  return useContext(AssociationContext);
}

export const AssociationProvider = ({ children }) => {
  const { actor } = useAuth();
  // const [comapins, setComapins] = useState();
  // const [comapin, setComapin] = useState();

  const getComapains = async () => {
    return {};
  };
  const createCampaign = async (comapin, pdfFile) => {
    if (comapin) {
      const options = {
        from: actor.address,
        gas: 2000000,
      };
      if (pdfFile) {
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
          })
          .catch((error) => {
            console.error("Error while creating actor:", error);
          });
      }
    }
  };

  return (
    <AssociationContext.Provider value={{ createCampaign, getComapains }}>
      {children}
    </AssociationContext.Provider>
  );
};
