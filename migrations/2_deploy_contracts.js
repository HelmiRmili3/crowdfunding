
const Crowdfunding = artifacts.require("Crowdfunding");
const Auth = artifacts.require("Auth");

module.exports = function (deployer) {
  deployer.deploy(Auth).then(function () {
    return deployer.deploy(Crowdfunding, Auth.address);
  });
};
