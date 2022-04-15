const ERC20 = artifacts.require("Marketplace");

module.exports = function(deployer) {
  deployer.deploy(ERC20);
};
