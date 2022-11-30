import { Schema } from "mongoose";

export const HousesSchema = new Schema(
  {
    bedrooms: {
      type: Number,
      required: true
    },
    bathrooms: {
      type: Number,
      required: true
    },
    levels: {
      type: Number,
    },
    imgUrl: {
      type: String
    },
    year: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
)