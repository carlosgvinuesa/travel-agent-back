const mongoose = require("mongoose");
const { Schema } = mongoose;

const transportScheme = new Schema (
    {
        route: {
            type: String, 
            required: [true, "Debes agregar la ruta"],
        }, 
        servieType: {
            type: String, 
            enum: ["Lujo", "Estandar"],
            required: [true, "Debes especificar el tipo de servicio"],
        }, 
        price: {
            type: Number, 
            required: [true, "Debes agregar el precio del transporte"],
        }, 
        description: {
            type: String,
        },
        comments: {
            type: String,
        }
    }
)

module.exports = mongoose.model("Transport", transportScheme);