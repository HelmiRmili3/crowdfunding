import Web3 from "web3";
//import loadEnc from '../loadEnc.js';


const web3 = new Web3("http://localhost:7545");

export const Auth_Address = "0x82569f5362273390E45F943CFDDBdEd04C4a251d";
export const CrowdFunding_Address = "0xbB3fe93739D4065F16357b79586fa8387201F473";

const Auth = require("../contracts/Auth.json");
export const AuthContract = new web3.eth.Contract(Auth.abi, Auth_Address);

const CrowdFunding = require("../contracts/Crowdfunding.json");
export const CrowdFundingContract = new web3.eth.Contract(
  CrowdFunding.abi,
  CrowdFunding_Address
);
