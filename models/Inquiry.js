const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const inquirySchema = new Schema (
    {
        client: {
            type: Schema.Types.ObjectId, 
            ref: "Client",
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
        comments: {
            type: String,
        }
    }
)

module.exports = model("Inquiry", inquirySchema);