
var ATOM = artifacts.require("ATOM");
ATOM.gasMultiplier = 0.9;
module.exports = function(deployer) {
  deployer.deploy(ATOM,{ gas: 5000000 });
};
