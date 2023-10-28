



import axios from "axios";

// Replace with your own API keys
const API_KEY = "3cc4aa0f02351f3dea52";
const API_SECRET =
  "ec0b90ec61136f7b8e3e704f37746703a642bf520eed00a8002a4f1dd89d024c";

// Function to upload a file to Pinata
const uploadFileToPinata = async (file) => {
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

export default uploadFileToPinata;
