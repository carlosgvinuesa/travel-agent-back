const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientFormScheme = new Schema (
    {
        client: {
            type: Schema.Types.ObjectId
        }, 
        numberOfGuests: {
            type: Number, 
            required: [true, "Por favor agrega el número de personas que viajaran"]
        }, 
        initialDate: {
            type: Date, 
            required: [true, "Por favor indica la fecha de inicio del viaje"],
        }, 
        finalDate: {
            type: Date, 
            required: [true, "Por favor indica la fecha final del viaje"],
        }, 
        interests: {
            type: [String],
        },
        cities: {
            type: [String], 
        },
        comments: {
            type: String,
        }
    }
)

module.exports = mongoose.model("ClientForm", clientFormScheme);