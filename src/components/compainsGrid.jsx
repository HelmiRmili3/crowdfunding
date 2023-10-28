import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Card from "./card";
import CustomButtonAdd from "./customButtonAdd";
import FormPage from "../pages/association/components/formPage";
import CustomText from "./customText";

import { getRoleName } from "../utils/helper";
import { useAuth } from "../contexts/authContext";
function CompainsGrid({campains}) {
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

  // Define an array of card data
  const capains = [
    {
      domain: "Education",
      title: "School fund",
      description: "Fund a school",
      raisedAmount: 0.5,
      amount: 2,
      daysLeft: 6,
      address: "0x12548....167744",
    },
    {
      domain: "Education",
      title: "School fund",
      description: "Fund a school",
      raisedAmount: 0.5,
      amount: 2,
      daysLeft: 6,
      address: "0x12548....167744",
    },
    {
      domain: "Education",
      title: "School fund",
      description: "Fund a school",
      raisedAmount: 0.5,
      amount: 2,
      daysLeft: 6,
      address: "0x12548....167744",
    },
    {
      domain: "Education",
      title: "School fund",
      description: "Fund a school",
      raisedAmount: 0.5,
      amount: 2,
      daysLeft: 6,
      address: "0x12548....167744",
    },
    {
      domain: "Education",
      title: "School fund",
      description: "Fund a school",
      raisedAmount: 0.5,
      amount: 2,
      daysLeft: 6,
      address: "0x12548....167744",
    },
    {
      domain: "Education",
      title: "School fund",
      description: "Fund a school",
      raisedAmount: 0.5,
      amount: 2,
      daysLeft: 6,
      address: "0x12548....167744",
    },
    {
      domain: "Education",
      title: "School fund",
      description: "Fund a school",
      raisedAmount: 0.5,
      amount: 2,
      daysLeft: 6,
      address: "0x12548....167744",
    },
  ];

  return !cardCliked ? (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-40 ">
        <div className="flex-row flex  w-3/4 px-8">
          <CustomText text={"All Compains"} count={campains.length} />
          {getRoleName(actor.role) === "association" ? (
            <>
              <CustomButtonAdd onOpen={close} />
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="mx-auto max-w-5xl  mb-10 ml-1/6 mr-1/6 flex flex-wrap -mx-4">
          {campains.map((campain, index) => (
            <Card
              key={index}
              domain={campain.domain}
              title={campain.title}
              description={campain.description}
              raisedAmount={campain.raisedAmount}
              amount={campain.amount}
              daysLeft={campain.endDate}
              address={campain.creator}
              onClick={handleCard}
            />
          ))}
        </div>
        <FormPage isOpen={closed} onClose={close} />
      </div>
    </>
  ) : (
    <Outlet />
  );
}

export default CompainsGrid;
