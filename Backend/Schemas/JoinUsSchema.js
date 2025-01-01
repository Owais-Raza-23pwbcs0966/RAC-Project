import mongoose from "mongoose";

// Define the schema for JoinUs collection
const JoinUsSchema = new mongoose.Schema({
    // Name field with validation
    name: {
        type: String,  // Data type is String
        required: [true, "Name is required"],  // Name is a required field
        minlength: [2, "Name must be at least 2 characters long"],  // Minimum length of name is 2 characters
    },

    // Email field with validation
    email: {
        type: String,  // Data type is String
        required: [true, "Email is required"],  // Email is a required field
        unique: true,  // Email must be unique across the collection
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"],  // Regular expression to validate the email format
    },

    // Contact Number field with validation
    contactNumber: {
        type: String,  // Data type is String (to handle any special characters or leading zeros)
        required: [true, "Contact number is required"],  // Contact number is a required field
        minlength: [10, "Contact number must be at least 10 characters"],  // Minimum length of contact number is 10 characters
        maxlength: [15, "Contact number cannot exceed 15 characters"],  // Maximum length of contact number is 15 characters
    },

    // Institute Name field with validation
    institute: {
        type: String,  // Data type is String
        required: [true, "Institute name is required"],  // Institute name is required field
    },
});

// Export the "JoinUs" model based on the JoinUsSchema
export default mongoose.model("JoinUs", JoinUsSchema);
