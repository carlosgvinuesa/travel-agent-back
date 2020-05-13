const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const clientShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "You need to add a name"],
    },
    last_name: {
      type: String,
      required: [true, "You need to add a last name"],
    },
    email: {
      type: String,
      required: [true, "You need to add an email"],
      validate: {
        message: "This email is already used",
        validator: async (email) => {
          const items = await models["Client"].count({ email });
          return items < 1;
        },
      },
    },
    password: {
      type: String,
      required: [true, "You need to add a password"],
    },
    reservations: {
      type: [Schema.Types.ObjectId],
      ref: "Reservation",
    },
    comments: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = model("Client", clientShema);