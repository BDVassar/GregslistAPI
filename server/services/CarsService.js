import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getAll(query) {
    const cars = await dbContext.Cars.find(query).sort('-createdAt').limit(10)
    return cars
  }
  async getOne(carId) {
    const car = await dbContext.Cars.findById(carId)
    if (!car) throw new BadRequest('no car at id:' + carId)
    return car
  }
  async create(carData) {
    const newCar = await dbContext.Cars.create(carData)
    return newCar
  }
  async update(carId, carData) {
    const original = await dbContext.Cars.findById(carId)
    if (!original) throw new BadRequest('no car at id:' + carId)
    original.make = carData.make ? carData.make : original.make
    original.model = carData.model ? carData.model : original.model
    original.price = carData.price !== undefined ? carData.price : original.price
    original.imgUrl = carData.imgUrl ? carData.imgUrl : original.imgUrl
    original.year = carData.year !== undefined ? carData.year : original.year
    original.description = carData.description ? carData.description : original.description
    original.color = carData.color ? carData.color : original.color
    await original.save()
    return original

  }
  async remove(carId) {
    const car = await dbContext.Cars.findById(carId)
    if (!car) throw new BadRequest('no car at id:' + carId)
    await car.remove()
    return `deleted ${car.make} ${car.model}`
  }

}

export const carsService = new CarsService()