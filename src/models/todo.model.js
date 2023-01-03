import mongoose from "./../database/connection.js";

// Define Todo schema
const schema = mongoose.Schema(
    {
        title: String,
        description: String,
        isDone: Boolean,
    },
    {
        timestamps: true,
    }
);

// Create Todo model
const model = mongoose.model("todo", schema);

export default model;
