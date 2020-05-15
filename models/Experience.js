const mongoose = require("mongoose");
const { Schema, model, models } = mongoose;

const experienceSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Experience name must be added"],
            validator: async (name) => {
                const items = await models["Experience"].count({ name });
                return items < 1;
            }
        },
        address: {
            type: String,
            required: [true, "Experience address must be added"],
        },
        city: {
            type: String,
            required: [true, "City for the experience must be added"],
        },
        type: {
            type: [String],
            required: [true, "Experience type must be added"],
        },
        interests: {
            type: [String],
            required: [true, "Interests related to this experience must be added"],
        },
        price: {
            type: Number,
            required: [true, "Experience price must be added"],
        },
        description: {
            type: String,
            required: [true, "A description for this experience must be added"],
        },
        phone_number: {
            type: [String],
        },
        contacts: {
            type: [String],
        },
        comments: {
            type: String,
        }
    }
)

module.exports = model("Experience", experienceSchema);