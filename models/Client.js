const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const clientSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Client", clientSchema);
