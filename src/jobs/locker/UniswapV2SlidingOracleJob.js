const {Job} = require("../Job");
const ethers = require("ethers");

const contract = require("../../contracts/locker/uniswapv2slidingoracle.js");

class OracleLockerJob extends Job {
    constructor(account, provider) {
        super("OracleLockerJob",
            new ethers.Contract(contract.address, contract.abi, account),
            provider
        );
    }
}

exports.OracleLockerJob = OracleLockerJob;
