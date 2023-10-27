import React from "react";

const Compain = ({
  domain,
  title,
  description,
  raisedAmount,
  amount,
  daysLeft,
  address,
  onClick,
  children,
}) => {
  const donors = [
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e3",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e4",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e5",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e6",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e7",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e8",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44e9",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44ea",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44eb",
    "0x742d35Cc6634C0532925a3b844Bc454e4438f44ec",
  ];

  return (
    <div className="h-screen  overflow-y-auto ">
      <div className="container mx-4/6 p-20 ml-10">
        <img
          src={require("../assets/image.png")}
          alt="Project"
          className="w-full h-80 object-cover"
        />

        <div className="px-4 py-2">
          <div className="grid grid-cols-1 gap-2">
            <div className="text-gray-600">
              <p>{"Education"}</p>
            </div>

            <div className="font-bold">
              <p>{"CrowdFunding"}</p>
            </div>

            <div className="text-sm text-gray-700">
              <p>
                {
                  "Certainly! Here's a single paragraph without any single or double quotation marksThe sun rose over the horizon, casting a warm golden glow across the tranquil meadow. Birds chirped in harmony, greeting the dawn with their melodic songs. A gentle breeze rustled the leaves of the tall oak trees, creating a soothing rhythmic whisper in the air. It was a perfect morning for a leisurely walk through nature's embrace. In the heart of the bustling city, people hurriedly made their way to work, lost in their thoughts and the cacophony of urban life. The towering skyscrapers reached for the sky, their glass facades reflecting the city's vibrant energy. The streets were a tapestry of cultures, where the past met the future in a vibrant mosaic. High in the mountains, a lone hiker embarked on a challenging journey. The air grew thinner with every step, but the breathtaking vistas motivated the adventurer to keep climbing. The silence of the wilderness was punctuated only by the occasional cry of an eagle soaring above. Nature's raw beauty was on full display. At a quaint café on a cobbled street, friends gathered to savor espresso and share stories. Laughter filled the air, and the aroma of freshly baked pastries was impossible to resist. The world outside seemed to slow down as they enjoyed the simple pleasure of each others company. In the cozy library, bookshelves stretched to the ceiling, housing knowledge from various eras and places. People hunched over antique desks, absorbed in their books. The soft glow of reading lamps created pockets of warm illumination in the sea of quiet study, where the pursuit of knowledge was a timeless endeavor"
                }
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="grid grid-rows-2">
                <div>
                  <p className="text-green-500 font-bold ">{"6"} ETH</p>
                </div>
                <div>
                  <p className="text-gray-600">Raised of {"0.5"} ETH</p>
                </div>
              </div>

              <div className="grid grid-rows-2 justify-end">
                <div>
                  <p className="text-green-500 font-bold ">{"6"}</p>
                </div>
                <div>
                  <p className="text-gray-600">Days left</p>
                </div>
              </div>
            </div>
            <div>
              <h1>Donors</h1>
              <ul>
                {donors.map((address, index) => (
                  <li className="text-green-600" key={index}>{address}</li>
                ))}
              </ul>
            </div>

            <div className="flex bg-gray-200 rounded-lg p-2">
              <div className="w-1/6">
                <img
                  src={require("../assets/Preview_Logo.png")}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              <div className="flex-1">
                <p>Association</p>
                <p className="text-sm text-gray-700">{"0x742d35Cc6634C0532925a3b844Bc454e4438f44eb"}</p>
              </div>
              {children}
            </div>
          </div>
        </div>
        <div className="mt-0">
          <div className="w-full h-1 bg-gray-200">
            <div className="w-1/2 h-1 bg-blue-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Compain;
