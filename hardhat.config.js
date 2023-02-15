require('dotenv').config()
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
	solidity: {
		compilers: [{
			version: "0.8.17",
			settings: {
				optimizer: {
					enabled: true,
					runs: 200
				}
			},
		}]
	},
	networks: {
		goerli: {
			url: `${process.env.GOERLI_NETWORK}`,
			chainId: 5,
			gasPrice: 'auto',
			accounts: [`${process.env.PRIVATEKEY}`],
		},
		mumbai: {
			url: `${process.env.MUMBAI_NETWORK}`,
			chainId: 80001,
			gasPrice: 'auto',
			accounts: [`${process.env.PRIVATEKEY}`],
		}
	}
};