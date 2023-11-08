import React, { useState } from "react";

import Card from "./card";
import CustomButtonAdd from "./customButtonAdd";
import FormPage from "../pages/association/components/formPage";
import Compain from "./compain";
import CustomText from "./customText";
import { getRoleName } from "../utils/helper";
import { useAuth } from "../contexts/authContext";
import { useEvaluator } from "../contexts/evaluatorContext";
import Loading from "./loading";
function CompainsGrid({ campaigns, isLoading, children }) {
  const { actor } = useAuth();
  const { setCompain } = useEvaluator();
  const [closed, setClosed] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [campaign, setCampaign] = useState([]);

  const handleCard = (data) => {
    console.log(data);
    setModalIsOpen(!modalIsOpen);
    setCampaign(data);
    setCompain(data);
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
            <>
              <Card
                imageUrl={campaign.imageUrl}
                domain={campaign.domain}
                title={campaign.title}
                description={campaign.description}
                raisedAmount={campaign.raisedAmount}
                amount={campaign.amount}
                daysLeft={campaign.endDate}
                address={campaign.creator}
                children={children}
                onClick={() => handleCard(campaign)}
              />
            </>
          </li>
        ))}
      </ul>
      <FormPage isOpen={closed} onClose={close} />
      <Compain
        amount={campaign.amount}
        creator={campaign.creator}
        dataUrl={campaign.dataUrl}
        description={campaign.description}
        donors={campaign.donors}
        endDate={campaign.endDate}
        filed={campaign.filed}
        id={campaign.id}
        imageUrl={campaign.imageUrl}
        period={campaign.period}
        raisedAmount={campaign.raisedAmount}
        status={campaign.status}
        title={campaign.title}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      >
        {children}
      </Compain>
    </div>
  );
}

export default CompainsGrid;
