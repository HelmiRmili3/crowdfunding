import React from "react";
function Card({
  key,
  imageUrl,
  domain,
  title,
  raisedAmount,
  amount,
  daysLeft,
  status,
  name,
  onClick,
}) {
  function Status(status) {
    switch (status) {
      case 0n:
        return "Waiting";
      case 1n:
        return "Invalid";
      case 2n:
        return daysLeft;
      case 3n:
        return "Done";
      default:
        break;
    }
  }
  return (
    <div
      key={key}
      className="w-full mx-auto bg-gray-50 rounded-lg overflow-hidden shadow-lg mt-5 border"
      onClick={onClick}
    >
      <img src={imageUrl} alt="Project" className="w-full h-48 object-cover" />
      <div className="px-4 py-2">
        <div className="grid grid-cols-1 gap-2">
          <div className="text-gray-600">
            <p>{domain}</p>
          </div>
          <div className="font-bold">
            <p>{title}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-rows-2">
              <div>
                <p
                  className={
                    Status(status) === "Done"
                      ? "text-red-500 font-bold "
                      : "text-green-500 font-bold "
                  }
                >
                  {raisedAmount} ETH
                </p>
              </div>
              <div>
                <p className="text-gray-600"> Raised of {amount}</p>
              </div>
            </div>

            <div className="grid grid-rows-2 justify-end">
              <div>
                <p
                  className={
                    Status(status) === "Done"
                      ? "text-red-500 font-bold "
                      : "text-green-500 font-bold "
                  }
                >
                  {Status(status)}
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  {daysLeft >= 0 ? "Days left" : ""}
                </p>
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
              <p className="text-sm text-gray-700">{name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0">
        <div className="w-full h-1 bg-gray-200">
          <div
            className={
              Status(status) === "Done"
                ? "w-full h-1 bg-red-500"
                : "w-full h-1 bg-green-500"
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
