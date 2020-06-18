const Web3 = require("web3")
const carsContractJSON = require("./solidity/build/Cars.json")

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
const carsContract = new web3.eth.Contract(carsContractJSON.abi, carsContractJSON.networks[8995].address)

module.exports = {
  web3,
  carsContract
}
