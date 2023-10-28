import React, { createContext, useContext, useEffect, useState } from "react";
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
  const [campains, setCampains] = useState();
  const getComapains = async () => {
    const options = {
      from: actor.address,
      gas: 2000000,
    };
    await CrowdFundingContract.methods
      .getAllCampaigns()
      .call(options)
      .then((response) => {
        console.log(response);
        setCampains(parseCampains(response));
      })
      .catch((error) => {
        console.error("Error while creating actor:", error);
      });
    console.log(campains);
  };
  const createCampaign = async (comapin, pdfFile) => {
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
          })
          .catch((error) => {
            console.error("Error while creating actor:", error);
          });
      }
    }
  };
  useEffect(() => {
    getComapains();
  }, []);
  return (
    <AssociationContext.Provider
      value={{ createCampaign, campains }}
    >
      {children}
    </AssociationContext.Provider>
  );
};
