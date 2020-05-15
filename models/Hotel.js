const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "You need to add a name"],
      validate: {
        message: "This hotel already exists",
        validator: async (name) => {
          const items = await models["Hotel"].count({ name });
          return items < 1;
        },
      },
    },
    adress: {
      type: String,
    },
    city: {
      type: String,
      required: [true, "You need to add a city"],
    },
    types: {
      type: [String],
    },
    interests: {
      type: [String],
    },
    price: {
      type: Number,
      required: [true, "You need to add a price"],
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
    },
    phone: {
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
