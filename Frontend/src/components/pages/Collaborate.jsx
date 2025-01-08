import React, { useState } from "react"; // Importing React and useState hook
import "../styles/Collaborate.css"; // Importing the CSS file for styling
import axios from "axios"; // Importing axios for making HTTP requests
import { toast } from "react-toastify"; // Importing toast notifications for feedback

// Collaborate component
export const Collaborate = () => {
  // State for storing form data (institute name and email)
  const [formData, setFormData] = useState({
    instituteName: "",
    instituteEmail: "",
  });

  // State for showing submission message
  const [message, setMessage] = useState("");
  // State for controlling submit button while the form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes and update state accordingly
  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value });
  };

  // Handle form submission
  const handleSubmit = async (data) => {
    data.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Set isSubmitting to true to disable the button

    // Log the form data to console (for debugging purposes)
    console.log(formData);

    axios.defaults.withCredentials = true;

    try {
      // Making a POST request to the backend server with form data
      const response = await axios.post(
        "https://rac-project.vercel.app/Collaborate",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Set content type for request
          },
        }
      );

      // Show success message using toast notification
      toast.success(response.data.message); // Assuming the response contains a 'message' key
    } catch (error) {
      // Show error message if the form submission fails
      toast.error("Error submitting form. Please try again."); // Shows an error message with a toast
    }
    setIsSubmitting(false); // Set isSubmitting to false once the request is complete
  };

  return (
    <div className="collab">
      <div className="collab-form">
        <h1>
          <span style={{ fontFamily: "Dancing Script" }}>Ideas</span> and
          Collaboration
        </h1>
        {/* Description paragraph */}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eos
          deleniti quibusdam, commodi porro ipsum necessitatibus, earum
          exercitationem quo expedita hic amet error eius ex veritatis eum
          magnam ut omnis, nostrum tempora aspernatur vel accusantium nemo
          pariatur. Ipsum rerum libero, aliquid dolorem nobis asperiores.
          Repellat ad rerum iusto quos tempora?
        </p>

        {/* Form for collecting collaboration details */}
        <form onSubmit={handleSubmit}>
          {/* Input field for institute name */}
          <div className="input">
            <input
              type="text"
              name="instituteName"
              id="institute-name"
              placeholder=""
              value={formData.instituteName}
              onChange={handleChange}
            />
            <label htmlFor="institute-name">Institute Name</label>
          </div>

          {/* Input field for institute email */}
          <div className="input">
            <input
              type="email"
              name="instituteEmail"
              id="institute-email"
              placeholder=""
              value={formData.instituteEmail}
              onChange={handleChange}
            />
            <label htmlFor="institute-email">Email</label>
          </div>

          {/* Submit button */}
          <div className="submit-btn">
            <button type="submit" disabled={isSubmitting}>
              {/* Show loading text while submitting */}
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Placeholder for an image */}
      <div className="collab-img">
        {/* You can add an image by uncommenting the line below */}
        {/* <img src="/collab-1.JPG" alt="" /> */}
      </div>
    </div>
  );
};
