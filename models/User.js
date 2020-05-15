const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const userSchema = new Schema(
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
      required: [true, "Email address must be added"],
      validate: {
        message: "This email is already in use",
        validator: async (email) => {
          const items = await models["User"].count({ email });
          return items < 1;
        },
      },
    },
    password: {
      type: String,
      required: [true, "A password must be added"],
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
