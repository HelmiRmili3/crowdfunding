import Web3 from "web3";
const web3 = new Web3("http://localhost:7545");

export const Auth_Address = "0xD592E2032027005a3A9546e490de391094461787";
export const CrowdFunding_Address = "0x3e441202ae3D623a6D82EAb771D9de3F10eCAb5f";

const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
