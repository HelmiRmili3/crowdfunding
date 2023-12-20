import Web3 from "web3";
const web3 = new Web3("http://localhost:7545");

export const Auth_Address = process.env.REACT_APP_ADDRESS_AUTH;
export const CrowdFunding_Address = process.env.REACT_APP_ADDRESS_CORWDFUNDING;
const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
