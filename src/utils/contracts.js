import Web3 from "web3";
const web3 = new Web3("http://localhost:7545");

export const Auth_Address = "0x23f39E467A4F83Ab602E2419F62F9cF948070771";
export const CrowdFunding_Address =
  "0xA683bd9834B245c7D4310e2Ddf88d0e26972a8D3";

const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
