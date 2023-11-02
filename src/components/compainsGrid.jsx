import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./card";
import CustomButtonAdd from "./customButtonAdd";
import FormPage from "../pages/association/components/formPage";
import CustomText from "./customText";
import { getRoleName } from "../utils/helper";
import { useAuth } from "../contexts/authContext";
import Loading from "./loading";
function CompainsGrid({ campaigns, isLoading }) {
  const { actor } = useAuth();
  const navigate = useNavigate();
  const [cardCliked, setCardCliked] = useState(false);
  const [closed, setClosed] = useState(false);
  const handleCard = () => {
    setCardCliked(!cardCliked);
    navigate(`/${getRoleName(actor.role)}/compains/compain`, { replace: true });
  };
  const close = () => {
    setClosed(!closed);
  };
  return isLoading ? (
    <Loading />
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-40 ">
      <div className="flex-row flex w-3/4 px-8">
        <CustomText text={"All Compains"} count={campaigns.length} />
        {getRoleName(actor.role) === "association" ? (
          <>
            <CustomButtonAdd onOpen={close} />
          </>
        ) : (
          <></>
        )}
      </div>
      <ul className="mx-auto max-w-5xl mb-10 ml-1/6 mr-1/6 flex flex-wrap -mx-4">
        {campaigns.map((campaign, index) => (
          <li key={index} className="w-2/6 px-4 mb-8">
            <Card
              domain={campaign.domain}
              title={campaign.title}
              description={campaign.description}
              raisedAmount={campaign.raisedAmount}
              amount={campaign.amount}
              daysLeft={campaign.endDate}
              address={campaign.creator}
              onClick={handleCard}
            />
          </li>
        ))}
      </ul>
      <FormPage isOpen={closed} onClose={close} />
    </div>
  );
}

export default CompainsGrid;
