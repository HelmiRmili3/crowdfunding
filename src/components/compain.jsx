import React from "react";
import OpenPdfButton from "./pdfPage";
const Compain = ({
  name,
  amount,
  creator,
  dataUrl,
  description,
  donors,
  endDate,
  id,
  imageUrl,
  period,
  raisedAmount,
  status,
  title,
  children,
  modalIsOpen,
  setModalIsOpen,
}) => {
  // const [progress, setProgress] = useState(0);
  // useEffect(() => {
  //   setProgress(Math.round(amount - raisedAmount) + 1);
  // }, [amount, raisedAmount]);
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (!modalIsOpen) {
    return null;
  }
  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-gray-600">
        <div className="bg-white p-4 w-5/6 rounded shadow-md overflow-hidden">
          <button onClick={closeModal}>
            <img src={require("../assets/close-42-48.png")} alt="close" />
          </button>
          <div className="max-h-96 overflow-y-auto">
            <img
              src={imageUrl}
              alt="Project"
              className="w-full h-80 object-cover"
            />

            <div className="px-4 py-2">
              <div className="grid grid-cols-1 gap-2">
                {/* <div className="text-gray-600">
                  <p>{filed}</p>
                </div> */}

                <div className="font-bold">
                  <p>{title}</p>
                </div>

                <div className="text-sm text-gray-700">
                  <p>{description}</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="grid grid-rows-2">
                    <div>
                      <p className="text-green-500 font-bold ">
                        {raisedAmount} ETH
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Raised of {amount} ETH</p>
                    </div>
                  </div>

                  <div className="grid grid-rows-2 justify-end">
                    <div>
                      <p className="text-green-500 font-bold ">
                        {status}
                      </p>
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
                      <li className="text-green-600" key={index}>
                        {index + " : " + address}
                      </li>
                    ))}
                  </ul>
                </div>
                <OpenPdfButton ipfsHash={dataUrl} />
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
                    <p className="text-sm text-gray-700">{name}</p>
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-0">
            <div className="w-full h-1 bg-gray-200">
              <div className={`w-full h-1 bg-blue-500`}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compain;
