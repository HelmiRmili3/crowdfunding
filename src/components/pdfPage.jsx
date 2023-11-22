import React from "react";

const OpenPdfButton = ({ ipfsHash }) => {
  const ipfsGatewayUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  const handleOpenPdf = () => {
    window.open(ipfsGatewayUrl, "_blank");
  };
  return (
    <button className="bg-green-500 rounded p-2 text-white" onClick={handleOpenPdf}>
      Open PDF
    </button>
  );
};

export default OpenPdfButton;
