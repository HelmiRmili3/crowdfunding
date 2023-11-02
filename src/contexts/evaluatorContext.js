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
const EvaluatorContext = createContext();
export function useEvaluator() {
  return useContext(EvaluatorContext);
}

export const EvaluatorProvider = ({ children }) => {
  const { actor } = useAuth();
  const [campaigns, setcampaigns] = useState([]);
  const [compain, setCompain] = useState();

  const evaluate = async (id, status) => {
    if (id != null || status != null) {
      const options = {
        from: actor.address,
        gas: 2000000,
      };
      await CrowdFundingContract.methods
        .evaluateCampaign(id, status)
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error while creating actor:", error);
        });
    } else {
      console.log("id or status is null");
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
        setcampaigns(customFilter(parseCampains(response), 0n));
        //console.log(campaigns);
      })
      .catch((error) => {
        console.error("Error while creating actor:", error);
      });
  }, [actor.address]);

  useEffect(() => {
    getComapains();
  }, [getComapains]);
  return (
    <EvaluatorContext.Provider
      value={{ evaluate, campaigns, compain, setCompain }}
    >
      {children}
    </EvaluatorContext.Provider>
  );
};
