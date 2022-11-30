import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
  async getAll(query) {
    const houses = await dbContext.Houses.find(query).sort('-createdAt').limit(10)
    return houses
  }
  async create(houseData) {
    await dbContext.Houses.create(houseData)
    return "House Created!"
  }
  async remove(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (!house) throw new BadRequest("no car at" + houseId)
    await house.remove()
    return "deleted House"
  }

}

export const housesService = new HousesService()