import React, { useState } from "react";
import Card from "./card";
import { Outlet, useNavigate } from "react-router-dom";
import CustomText from "./customText";

function CompainsGrid() {
  const navigate = useNavigate();
  const [cardCliked, setCardCliked] = useState(false);
  const handleCard = () => {
    setCardCliked(!cardCliked);
    console.log("card clicked");
    navigate("/admin/compains/compain", { replace: true });
  };

  // Define an array of card data
  const cardData = [
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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-40">
        <CustomText text={"All Compains"} count={6}/>
        <div className="mx-auto max-w-5xl  mb-10 ml-1/6 mr-1/6 flex flex-wrap -mx-4">
          {cardData.map((data, index) => (
            <Card
              key={index}
              domain={data.domain}
              title={data.title}
              description={data.description}
              raisedAmount={data.raisedAmount}
              amount={data.amount}
              daysLeft={data.daysLeft}
              address={data.address}
              onClick={handleCard}
            />
          ))}
        </div>
      </div>
    </>
  ) : (
    <Outlet/>
  );
}

export default CompainsGrid;
