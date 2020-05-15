const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be added"],
      validate: {
        message: "This restaurant already exists",
        validator: async (name) => {
          const items = await models["Restaurant"].count({ name });
          return items < 1;
        },
      },
    },
    adress: {
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
    food_types: {
      type: [String],
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    description: {
      type: String,
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

module.exports = model("Restaurant", restaurantSchema);
