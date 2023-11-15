import React, { useState } from "react";
import CustomButtonAdd from "./customButtonAdd";

import CardItem from "./customItem";
import CustomText from "./customText";
import PopupForm from "./popupForm";
import { useAdmin } from "../contexts/adminContext";
import { getRoleName,capitalizeFirstLetter } from "../utils/helper";

export function ActorsList({ role }) {
  const { actors } = useAdmin();
  const data = actors.filter((actor) => actor.role === role);

  const [isAccepted, setIsAccepted] = useState(false);
  const [closed, setClosed] = useState(false);
  const handleToggleStatus = () => {
    setIsAccepted(!isAccepted);
  };
  const close = () => {
    setClosed(!closed);
  };
 
  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-gray-100 ">
      <div className="flex-row flex  w-3/4">
        <CustomText text={capitalizeFirstLetter(getRoleName(role))} count={data.length} />
        <CustomButtonAdd onOpen={close} />
      </div>
      <div className="flex-row flex  w-3/4">
        <ul className="w-full flex-1">
          {data.map((actor) => (
            <li key={actor.id} className="w-full flex-1">
              <CardItem
                avatarImageUrl={actor.imageUrl}
                walletAddress={actor.address}
                status={isAccepted ? "accepted" : "denied"}
                onToggleStatus={handleToggleStatus}
              />
            </li>
          ))}
        </ul>
      </div>
      <PopupForm isOpen={closed} onClose={close} role={role} />
    </div>
  );
}
