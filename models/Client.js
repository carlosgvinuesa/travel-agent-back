const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be added"],
    },
    last_name: {
      type: String,
      required: [true, "Last name must be added"],
    },
    email: {
      type: String,
      required: [true, "Email must be added"],
      validate: {
        message: "This email is already is use",
        validator: async (email) => {
          const items = await models["Client"].count({ email });
          return items < 1;
        },
      },
    },
    password: {
      type: String,
      required: [true, "A password must be added"],
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Client", clientSchema);
