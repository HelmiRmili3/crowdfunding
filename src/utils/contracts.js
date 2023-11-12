import Web3 from "web3";
//import loadEnc from '../loadEnc.js';


const web3 = new Web3("http://localhost:7545");

export const Auth_Address = "0xCbcd5Bde8e5fA2596864B59c663E6D8155B89239";
export const CrowdFunding_Address = "0x622a950fD39FF7297354ea58518FF83A6CcCdb4D";

const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
