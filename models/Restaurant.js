const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "You need to add a name"],
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
      required: [true, "You need to add a city"],
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
