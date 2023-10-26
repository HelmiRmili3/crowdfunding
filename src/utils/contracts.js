import Web3 from "web3";
//import loadEnc from '../loadEnc.js';


const web3 = new Web3("http://localhost:7545");

export const Auth_Address = "0x0e119160381DBB24a792094Ac1C063C718a964F8";
export const CrowdFunding_Address = "0x21634adDcfBB5C10564FDF94A4265bB56A3dDE72";

const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
