const mongoose = require("mongoose");
const { Schema } = mongoose;

const experienceSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "You need to add the experience name"],
            validator: async (email) => {
                const items = await models["Experience"].count({ email });
                return items < 1;
            }
        },
        address: {
            type: String,
            required: [true, "You need to add the address"],
        },
        city: {
            type: String,
            required: [true, "You need to add the city"],
        },
        type: {
            type: [String],
            required: [true, "You need to add at the type"],
        },
        interests: {
            type: [String],
            required: [true, "You need to add interests related"],
        },
        price: {
            type: Number,
            required: [true, "You need to add the price"],
        },
        description: {
            type: String,
            required: [true, "You need to add the description"],
        },
        phone_numbers: {
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

module.exports = mongoose.model("Experience", experienceSchema);