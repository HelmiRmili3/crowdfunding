import axios from "axios";

// Replace with your own API keys
const API_KEY = "3cc4aa0f02351f3dea52";
const API_SECRET =
  "ec0b90ec61136f7b8e3e704f37746703a642bf520eed00a8002a4f1dd89d024c";

// Function to upload a file to Pinata
export const uploadFileToPinata = async (file) => {
  // Create a FormData object
  const formData = new FormData();
  formData.append("file", file);

  // Set up request headers
  const headers = {
    "Content-Type": "multipart/form-data",
    pinata_api_key: API_KEY,
    pinata_secret_api_key: API_SECRET,
  };

  try {
    // Send the POST request to Pinata
    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      { headers }
    );

    // Handle the response
    const pinHash = response.data.IpfsHash;
    return pinHash;
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    return null;
  }
};


export const fetchFile = (cid) => {
  const ipfsGatewayURL = `https://gateway.pinata.cloud/ipfs/${cid}`;

  fetch(ipfsGatewayURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("File successfuly downloaded");
      }
      return response.blob(); // This assumes you want to work with the binary data of the file.
    })
    .then((blobData) => {
      // Do something with the downloaded file data, for example, save it to a local file or display it.
    })
    .catch((error) => {
      console.error("Error downloading file:", error);
    });
};
