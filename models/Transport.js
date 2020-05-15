const mongoose = require("mongoose");
const { Schema } = mongoose;

const transportSchema = new Schema (
    {
        route: {
            type: String, 
            required: [true, "You need to add the route"],
        }, 
        servie_type: {
            type: String, 
            enum: ["luxury", "standard"],
            required: [true, "You need to specify the sercive type"],
        }, 
        vehicle_type: {
            type: String, 
            enum: ["van", "wagon", "car"],
            required: [true, "You need to specify the vehicle type"],
        },
        price: {
            type: Number, 
            required: [true, "You need to add the price"],
        }, 
        description: {
            type: String,
        },
        comments: {
            type: String,
        }
    }
)

module.exports = mongoose.model("Transport", transportSchema);