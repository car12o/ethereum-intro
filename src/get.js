const { carsContract } = require("./client")

const main = async () => {
  try {
    const cars = await carsContract.methods.get().call()
    console.log("cars: ", JSON.stringify(cars, null, 2))
  } catch (error) {
    console.error(error)
  }
}

main()
