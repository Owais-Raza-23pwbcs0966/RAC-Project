import React, { useState } from "react"; // Import React and useState for component state
import axios from "axios"; // Import axios for making HTTP requests
import "../styles/JoinUs.css"; // Import CSS for styling
import { toast } from 'react-toastify'; // Import toast for notifications

// Functional component for the "Join Us" form
export const JoinUs = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    institute: "",
  });

  // State for showing submission status message (success/error)
  const [message, setMessage] = useState("");

  // State to manage form submission status (to disable the button during submission)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes and update form data
  const handleChange = (data) => {
    setFormData({ ...formData, [data.target.name]: data.target.value }); // Update specific input field
  };

  axios.defaults.withCredentials = true;
  
  // Handle form submission
  const handleSubmit = async (data) => {
    data.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // Log form data for debugging
    setIsSubmitting(true); // Disable submit button while submitting
    try {
      // Send form data to the server using POST request
      const response = await axios.post("https://rac-project.vercel.app/JoinUs", formData, {
        headers: {
          'Content-Type': 'application/json', // Specify JSON content type
        }
      });
      toast.success(response.data.message); // Show success message using toast
    } catch (error) {
      // Get error message from response or fallback to a default message
      const errorMessage = error.response?.data?.message || "Error submitting form. Please try again.";
      toast.error(errorMessage); // Show error message using toast
    }
    setIsSubmitting(false); // Re-enable submit button after submission
  };

  return (
    <div className="main"> {/* Main container */}
      <div className="joinUs-form"> {/* Form container */}
        <div className="form-section"> {/* Section for the form */}
          <form className="form" onSubmit={handleSubmit}> {/* Form element */}
            {/* Input field for name */}
            <div className="input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=""
                value={formData.name} // Bind value to state
                onChange={handleChange} // Update state on change
              />
              <label htmlFor="name">Your Name</label>
            </div>
            {/* Input field for contact number */}
            <div className="input">
              <input
                type="number"
                name="contactNumber"
                id="contactNumber"
                placeholder=""
                value={formData.contactNumber} // Bind value to state
                onChange={handleChange} // Update state on change
              />
              <label htmlFor="contactNumber">Contact</label>
            </div>
            {/* Input field for email */}
            <div className="input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                value={formData.email} // Bind value to state
                onChange={handleChange} // Update state on change
              />
              <label htmlFor="email">Email</label>
            </div>
            {/* Input field for institute */}
            <div className="input">
              <input
                type="text"
                name="institute"
                id="institute"
                placeholder=""
                value={formData.institute} // Bind value to state
                onChange={handleChange} // Update state on change
              />
              <label htmlFor="institute">Institute</label>
            </div>
            {/* Submit button */}
            <div className="submit-btn">
              <button type="submit" disabled={isSubmitting}> {/* Disable button if submitting */}
                {isSubmitting ? 'Submitting...' : 'Submit'} {/* Show loading state */}
              </button>
            </div>
          </form>
          {message && <p className="message">{message}</p>} {/* Show submission message if exists */}
        </div>
        {/* Section for heading and additional information */}
        <div className="heading">
          <h1>
            Join <span style={{ fontFamily: "Dancing Script" }}>Us</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veritatis!</p>
          <img src="/join-us-3.png" alt="" className="join-us-img" /> {/* Decorative image */}
        </div>
      </div>
    </div>
  );
};
