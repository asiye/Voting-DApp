const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
    deployer.deploy(Voting, [web3.utils.asciiToHex('Asiye'), we.utils.asciiToHex('Asi'), web3.utils.asciiToHex('Lui')]);
};