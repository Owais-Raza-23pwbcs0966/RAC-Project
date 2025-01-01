import mongoose from "mongoose";

// Define the schema for collaboration requests
const CollaborateSchema = new mongoose.Schema({
    // Institute Name field with validation
    instituteName: {
        type: String,  // Data type is String
        required: [true, "Name is required"],  // Name is required field
        minlength: [2, "Name must be at least 2 characters long"],  // Minimum length of name must be 2 characters
    },

    // Institute Email field with validation
    instituteEmail: {
        type: String,  // Data type is String
        required: [true, "Email is required"],  // Email is required field
        unique: true,  // Email should be unique in the collection
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"],  // Validates email format using a regular expression
    },
})

// Export the "Collaborate" model based on the CollaborateSchema
export default mongoose.model("Collaborate", CollaborateSchema);
