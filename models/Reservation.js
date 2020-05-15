const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be added"],
      validate: {
        message: "This reservation name already exists",
        validator: async (name) => {
          const items = await models["Reservation"].count({ name });
          return items < 1;
        },
      },
    },
    user: {
      type: Schema.Types.ObjectId, 
      ref: "User",
    },
    client: {
      type: Schema.Types.ObjectId, 
      ref: "Client",
    },
    client_form: {
      type: Schema.Types.ObjectId, 
      ref: "ClientForm",
    },
    number_of_guests: {
      type: Number, 
      required: [true, "Number of guests must be added"]
    }, 
    initial_date: {
      type: Date, 
      required: [true, "Start date must be specified"],
    }, 
    final_date: {
      type: Date, 
      required: [true, "Final date must be specified"],
    }, 
    interests: {
      type: [String],
    },
    cities: {
      type: [String], 
    },
    schedule: {
      type: [{}],
      required: [true, "Schedule must be added"],
    },
    status: {
      type: String,
      required: [true, "Status must be added"],
    },
    cost: {
      type: Number,
    },
    comments: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Reservation", reservationSchema);





hotel_type	[4 star, 5 star, villa, boutique, trendy, traditional, resort]
schedule	[{day, city, hotel, restaurants, experiences, transports, cost}]

comments	String