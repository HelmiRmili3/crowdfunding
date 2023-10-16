import React, { useState } from "react";
import Card from "../../../components/card";
import { useNavigate } from "react-router-dom";
import Compain from "./compain";

function CompainsGrid() {
  const navigate = useNavigate();
  const [cardCliked, setCardCliked] = useState(false);
  const handleCard = () => {
    setCardCliked(!cardCliked);
    console.log("card cliked");
    navigate("/admin/compains/compain", { replace: true });
  };
  return !cardCliked ? (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="mx-auto max-w-5xl mt-10 mb-10 ml-1/6 mr-1/6 flex flex-wrap -mx-4">
          <Card
            domain={"Education"}
            title={"School fund"}
            description={"fund a scholl"}
            raisedAmount={0.5}
            amount={2}
            daysLeft={6}
            address={"0x12548....167744"}
            onClick={handleCard}
          />
          <Card
            domain={"Education"}
            title={"School fund"}
            description={"fund a scholl"}
            raisedAmount={0.5}
            amount={2}
            daysLeft={6}
            address={"0x12548....167744"}
            onClick={handleCard}
          />
          <Card
            domain={"Education"}
            title={"School fund"}
            description={"fund a scholl"}
            raisedAmount={0.5}
            amount={2}
            daysLeft={6}
            address={"0x12548....167744"}
            onClick={handleCard}
          />
          <Card
            domain={"Education"}
            title={"School fund"}
            description={"fund a scholl"}
            raisedAmount={0.5}
            amount={2}
            daysLeft={6}
            address={"0x12548....167744"}
            onClick={handleCard}
          />
          <Card
            domain={"Education"}
            title={"School fund"}
            description={"fund a scholl"}
            raisedAmount={0.5}
            amount={2}
            daysLeft={6}
            address={"0x12548....167744"}
            onClick={handleCard}
          />
          <Card
            domain={"Education"}
            title={"School fund"}
            description={"fund a scholl"}
            raisedAmount={0.5}
            amount={2}
            daysLeft={6}
            address={"0x12548....167744"}
            onClick={handleCard}
          />
        </div>
      </div>
    </>
  ) : (
    <Compain />
  );
}
export default CompainsGrid;
