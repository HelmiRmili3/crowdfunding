import React, { createContext, useContext, useState } from "react";
import { CrowdFundingContract } from "../utils/contracts";
const AssociationContext = createContext();
export function useAssociation() {
  return useContext(AssociationContext);
}

export const AssociationProvider = ({ children }) => {
  const [comapins, setComapins] = useState();

  const getComapains = async () => {
    return {};
  };
  const create = async ({ comapin }) => {
    if (data) {
      const options = {
        from: actor.address,
        gas: 2000000,
      };
      await CrowdFundingContract.methods
        .createCampaign(
          comapin.field,
          comapin.title,
          comapin.description,
          comapin.period,
          comapin.amount,
          comapin.imageUrl,
          comapin.dataUrl
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
  };
  return (
    <AssociationProvider.Provider value={{ create, getComapains }}>
      {children}
    </AssociationProvider.Provider>
  );
};
