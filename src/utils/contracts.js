import Web3 from "web3";
//import loadEnc from '../loadEnc.js';


const web3 = new Web3("http://localhost:7545");

export const Auth_Address = "0xA255dD17E0EcBD2a9e54c66931F5884dD2BA567A";
export const CrowdFunding_Address = "0x3b5463f1C91ae2223982939841fbb3140B5303ba";

const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
