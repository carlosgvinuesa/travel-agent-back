const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
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
          const items = await mongoose.models["User"].count({ email });
          return items < 1;
        },
      },
    },
    password: {
      type: String,
      required: [true, "You need to add a password"],
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
