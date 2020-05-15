const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const transportSchema = new Schema (
    {
        route: {
            type: String, 
            required: [true, "The route must be added"],
        }, 
        servie_type: {
            type: String, 
            enum: ["luxury", "standard"],
            required: [true, "Sercive type must be specified"],
        }, 
        vehicle_type: {
            type: String, 
            enum: ["van", "wagon", "car"],
            required: [true, "Vehicle type must be specified"],
        },
        price: {
            type: Number, 
            required: [true, "Price must be added"],
        }, 
        description: {
            type: String,
        },
        comments: {
            type: String,
        }
    }
)

module.exports = model("Transport", transportSchema);