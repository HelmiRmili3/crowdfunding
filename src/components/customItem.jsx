import React from "react";

const CardItem = ({
  avatarImageUrl,
  name,
  status,
  onToggleStatus,
}) => {
  // const isAccepted = status === "accepted";

  return (
    <div className="bg-white shadow-md rounded-full p-2 m-2 ">
      <div className="flex items-center">
        <div className="w-1/6 mr-4">
          <img
            src={avatarImageUrl}
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-xl font-semibold">{name}</p>
        </div>
        <div>
          {/* <label className="flex items-center cursor-pointer">
            <div
              className={`w-16 h-8 flex items-center justify-center rounded-full ${
                isAccepted ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full ${
                  isAccepted ? "bg-white" : "bg-white"
                }`}
              />
            </div>
            <div className="ml-3 text-gray-700">
              {isAccepted ? "Accepted" : "Denied"}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={isAccepted}
              onChange={onToggleStatus}
            />
          </label> */}
        </div>
      </div>
    </div>
  );
};
export default CardItem;
