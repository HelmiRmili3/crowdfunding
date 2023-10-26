import React, { useState } from "react";
import CustomButtonAdd from "../../../components/customButtonAdd";
import PopupForm from "../../../components/popupForm";
function AssociationsList() {
  const [closed, setClosed] = useState(false);
  const close = () => {
    setClosed(!closed);
  };
  return (
    <>
      <div className="min-h-screen flex-col flex items-center justify-center bg-gray-100">
        <CustomButtonAdd onOpen={close} />
        <PopupForm isOpen={closed} onClose={close} role={1n} />
      </div>
    </>
  );
}
export default AssociationsList;
