import React, { createContext, useContext, useEffect, useState } from "react";
import { CrowdFundingContract } from "../utils/contracts";
import { UploadFileToPinata } from "../apis/pinata";
const AssociationContext = createContext();
export function useAssociation() {
  return useContext(AssociationContext);
}

export const AssociationProvider = ({ children }) => {
  const [comapins, setComapins] = useState();
  const [comapin, setComapin] = useState();

  const getComapains = async () => {
    return {};
  };
  const create = async ({ comapin }) => {
    if (data) {
      const options = {
        from: actor.address,
        gas: 2000000,
      };
      await UploadFileToPinata(comapin.dataUrl).then(async (dataHash) => {
        await CrowdFundingContract.methods
          .createCampaign(
            comapin.field,
            comapin.title,
            comapin.description,
            comapin.period,
            comapin.amount,
            comapin.imageUrl,
            dataHash
          )
          .send(options)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Error while creating actor:", error);
          });
      });
    } else {
      console.log("data not found");
    }
  };
  useEffect(() => {
    create();
  }, []);
  return (
    <AssociationProvider.Provider value={{ create, getComapains }}>
      {children}
    </AssociationProvider.Provider>
  );
};
