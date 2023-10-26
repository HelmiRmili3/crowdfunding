import React, { useState } from "react";
import CardItem from "../../../components/customItem";
import CustomText from "../../../components/customText";
import CustomButtonAdd from "../../../components/customButtonAdd";
import PopupForm from "../../../components/popupForm";
function EvaluatorProfile() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [closed, setClosed] = useState(false);
  const close = () => {
    setClosed(!closed);
  };
  const handleToggleStatus = () => {
    setIsAccepted(!isAccepted);
  };

  const avatarImageUrl = require("../../../assets/Preview_Logo.png");
  const walletAddress = "0x1234567890";
  return (
    <>
      <div className="min-h-screen flex-col flex items-center justify-center bg-gray-100">
        <CustomButtonAdd onOpen={close} />
        <PopupForm isOpen={closed} onClose={close} role={3n} />
      </div>
      <div className="min-h-screen flex-col flex items-center justify-center bg-gray-100">
        <CustomText />
        <CardItem
          avatarImageUrl={avatarImageUrl}
          walletAddress={walletAddress}
          status={isAccepted ? "accepted" : "denied"}
          onToggleStatus={handleToggleStatus}
        />
      </div>
    </>
  );
}
export default EvaluatorProfile;
