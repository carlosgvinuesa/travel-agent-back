const mongoose = require("mongoose");
const { Schema } = mongoose;

const experienceScheme = new Schema(
    {
        name: {
            type: String,
            required: [true, "Debes agregar el nombre de la experiencia"],
        },
        address: {
            type: String,
            required: [true, "Debes agregar la dirección"],
        },
        city: {
            type: String,
            required: [true, "Debes agregar la dirección"],
        },
        type: {
            type: [String],
            required: [true, "Debes agregar como minimo un tipo de actividad"],
        }, 
        interests: {
            type: [String],
            required: [true, "Debes agregar como minimo un tipo de interes"],
        }, 
        price: {
            type: Number, 
            required: [true, "Debes agregar el precio de la experiencia"],
        }, 
        description: {
            type: [String],
            required: [true, "Debes agregar una descripción de la experiencia"],
        }, 
        phoneNumber: {
            type: Number,
            required: [true, "Debes agregar el número de telefono"],
        }, 
        contacts: {
            type: [String],
        }, 
        comments: {
            type: [String],
        }
    }

)

module.exports = mongoose.model("Experience", experienceScheme);