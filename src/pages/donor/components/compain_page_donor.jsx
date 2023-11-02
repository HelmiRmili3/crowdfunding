import React from "react";
import Compain from "../../../components/compain";
function compainPageDonor() {
  const compain = [];
  return (
    <>
      <Compain
        amount={compain.amount}
        creator={compain.creator}
        dataUrl={compain.dataUrl}
        description={compain.description}
        donors={compain.donors}
        endDate={compain.endDate}
        filed={compain.filed}
        id={compain.id}
        imageUrl={compain.imageUrl}
        period={compain.period}
        raisedAmount={compain.raisedAmount}
        status={compain.status}
        title={compain.title}
      >
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Donate To
        </button>
      </Compain>
    </>
  );
}

export default compainPageDonor;
