const { last } = require("lodash/fp")
const { carsContract } = require("./client")

const main = async () => {
  try {
    const car = last(process.argv)
    const response = await carsContract.methods.set(car).send({
      from: "0x24a1007c553b48c844d08b5e636e0f091afdfcec"
    })
    console.log("response: ", JSON.stringify(response, null, 2))
  } catch (error) {
    console.error(error)
  }
}

main()
