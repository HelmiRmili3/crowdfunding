import Web3 from "web3";
//import loadEnc from '../loadEnc.js';


const web3 = new Web3("http://localhost:7545");

export const Auth_Address = "0x3aBD9CDc94cc87AEC7726c31d00d9d79e571f295";
export const CrowdFunding_Address = "0xb6Eaf7055ecc75221d4C208fc84A329511e68b2a";

const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
