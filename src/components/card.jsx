import React from "react";
function Card({
  domain,
  title,
  description,
  raisedAmount,
  amount,
  daysLeft,
  address,
  onClick,
}) {
  return (
    <div
      className="max-w-xs mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-lg mt-20 border"
      onClick={onClick}
    >
      <img
        src={require("../assets/image.png")}
        alt="Project"
        className="w-full h-48 object-cover"
      />

      <div className="px-4 py-2">
        <div className="grid grid-cols-1 gap-2">
          <div className="text-gray-600">
            <p>{domain}</p>
          </div>

          <div className="font-bold">
            <p>{title}</p>
          </div>

          <div className="text-sm text-gray-700">
            <p>{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-rows-2">
              <div>
                <p className="text-green-500 font-bold ">{raisedAmount} ETH</p>
              </div>
              <div>
                <p className="text-gray-600">Raised of {amount} ETH</p>
              </div>
            </div>

            <div className="grid grid-rows-2 justify-end">
              <div>
                <p className="text-green-500 font-bold ">{daysLeft}</p>
              </div>
              <div>
                <p className="text-gray-600">Days left</p>
              </div>
            </div>
          </div>

          <div className="flex bg-gray-200 rounded-lg p-2">
            <div className="w-2/6">
              <img
                src={require("../assets/Preview_Logo.png")}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p>Association</p>
              <p className="text-sm text-gray-700">{address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0">
        <div className="w-full h-1 bg-gray-200 ">
          <div className="w-1/2 h-1 bg-blue-500 "></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
