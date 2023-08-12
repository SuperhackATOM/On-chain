
var Basic = artifacts.require("ERC1155Basic");
Basic.gasMultiplier = 0.9;
module.exports = function(deployer) {
  deployer.deploy(Basic,{ gas: 5000000 });
};
