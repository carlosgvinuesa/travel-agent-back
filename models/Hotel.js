const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be added"],
      validate: {
        message: "This hotel already exists",
        validator: async (name) => {
          const items = await models["Hotel"].count({ name });
          return items < 1;
        },
      },
    },
    address: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "City must be added"],
    },
    types: {
      type: [String],
    },
    interests: {
      type: [String],
    },
    price: {
      type: Number,
      required: [true, "Price must be added"],
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
    },
    phone_numbers: {
      type: [String],
    },
    contacts: {
      type: [String],
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Hotel", hotelSchema);
