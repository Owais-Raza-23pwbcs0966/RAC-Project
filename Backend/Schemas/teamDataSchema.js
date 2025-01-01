import mongoose from "mongoose";

// Define the schema for teamData collection
const teamDataSchema = new mongoose.Schema({
    // Name field for storing the name of the team member
    name: {
        type: String,  // Data type is String
    },

    // Position field for storing the position of the team member
    position: {
        type: String,  // Data type is String
    },

    // Description field for providing a short description about the team member
    description: {
        type: String,  // Data type is String
    },

    // Image field to store the URL or path of the team member's image
    image: {
        type: String,  // Data type is String (URL or image path)
    },
});

// Export the "teamData" model based on the teamDataSchema
export default mongoose.model("teamData", teamDataSchema);
