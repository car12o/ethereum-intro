// eslint-disable-next-line no-undef
const Cars = artifacts.require("Cars")

module.exports = (deployer) => {
  deployer.deploy(Cars)
}
