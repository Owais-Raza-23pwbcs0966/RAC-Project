import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import JoinUs from "./Schemas/JoinUsSchema.js";
import Collaborate from "./Schemas/CollaborateSchema.js";
import teamData from "./Schemas/teamDataSchema.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 5000;

// Middleware setup
app.use(bodyParser.json());  // Parse incoming request bodies as JSON
app.use(cors({
    origin:['https://rac-project-frontend.vercel.app'],
    methods:['POST','GET'],
    credentials:true
}));  // Enable Cross-Origin Resource Sharing (CORS) for all routes

// MongoDB Connection
const mongo_URI = process.env.MONGO_URI;  // Get MongoDB URI from environment variable

// Connect to MongoDB using Mongoose
mongoose
    .connect(mongo_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))  // Log success message on successful connection
    .catch((err) => console.error("MongoDB connection error:", err));  // Log error if connection fails

// Routes

app.get('/',async(req,res)=>{
    res.json('hello bhai server chal rha hai')
})

// Route for handling "JoinUs" form submissions
app.post("/JoinUs", async (req, res) => {
    console.log("Request body received:", req.body);  // Log incoming request body
    const { name, email, contactNumber, institute } = req.body;  // Destructure incoming data

    try {
        // Check if all fields are filled
        if (!name || !email || !contactNumber || !institute) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists in the database by email
        const existingUser = await JoinUs.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered with this email" });
        }

        // Create a new user document and save to the database
        const newUser = new JoinUs({ name, email, contactNumber, institute });
        await newUser.save();

        // Set up email transporter using nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Sender's email from environment variables
                pass: process.env.EMAIL_PASS,  // Sender's email password from environment variables
            },
        });

        // Set up the email content
        const mailOptions = {
            from: process.env.EMAIL_USER,  // Sender's email
            to: email,  // Recipient's email (user's email)
            subject: "Welcome to Robotics Automation Community",  // Email subject
            text: `Hello ${name}, 
            Thank you for joining the Robotics Automation Community. We are excited to have you on board!
            Please wait for our response.
            Regards,
            Robotics Automation Community`,  // Email body
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Respond with a success message
        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error.message);  // Log error if something goes wrong
        res.status(500).json({ message: "Internal Server Error" });  // Send error response
    }
});

// Route for handling "Collaborate" form submissions
app.post("/Collaborate", async (req, res) => {
    const { instituteName, instituteEmail } = req.body;  // Destructure incoming data

    try {
        // Create a new collaboration request document and save to the database
        const collaborator = new Collaborate({ instituteName, instituteEmail });
        await collaborator.save();

        // Set up email transporter using nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Sender's email from environment variables
                pass: process.env.EMAIL_PASS,  // Sender's email password from environment variables
            },
        });

        // Set up the collaboration email content
        const mailOptions = {
            from: process.env.EMAIL_USER,  // Sender's email
            to: instituteEmail,  // Recipient's email (institute's email)
            subject: "Collaboration Request",  // Email subject
            text: `Hello ${instituteName}, Thank you for your interest in collaborating with us. We will get back to you soon.`,  // Email body
        };

        // Send the collaboration email
        await transporter.sendMail(mailOptions);

        // Respond with a success message
        res.status(200).json({ message: "Collaboration request sent successfully" });
    } catch (error) {
        console.error("Error sending collaboration request:", error.message);  // Log error if something goes wrong
        res.status(500).json({ message: "Internal Server Error" });  // Send error response
    }
});

app.get("/teamData", async (req, res) => {
    try {
        console.log("Fetching team data...");
        const data = await teamData.find();
        console.log("Team data retrieved:", data);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching team data:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));  // Start the Express server
