const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const transportSchema = new Schema (
    {
        name: {
            type: String, 
            required: [true, "The route must be added"],
        }, 
        service_type: {
            type: String, 
            enum: ["Luxury", "Standard"],
            required: [true, "Sercive type must be specified"],
        }, 
        vehicle_type: {
            type: String, 
            enum: ["Van", "Wagon", "Car"],
            required: [true, "Vehicle type must be specified"],
        },
        price: {
            type: Number, 
            required: [true, "Price must be added"],
        }, 
        description: {
            type: String,
        },
        images: {
            type: [String],
          },
        comments: {
            type: String,
        }
    }
)

module.exports = model("Transport", transportSchema);