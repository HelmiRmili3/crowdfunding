import React from "react";
import Compain from "../../../components/compain";
function compainPageAssociation() {
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
      ></Compain>
    </>
  );
}

export default compainPageAssociation;
