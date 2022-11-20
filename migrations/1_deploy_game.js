const FiboGame = artifacts.require("FiboGame");

module.exports = function(deployer) {
    deployer.deploy(FiboGame, '0xdac17f958d2ee523a2206206994597c13d831ec7');
};
